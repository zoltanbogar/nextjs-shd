import React, { CSSProperties, useEffect } from 'react';
import {useRouter} from "next/router";
import {fetchAPI} from "@/lib/api";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";

import Image from 'next/image';
import svg from "@/resources/images/misc/05cae2bf306c44b4a82fda253514822e.svg"

import styles from './brand.module.css';

import { Carousel } from 'react-responsive-carousel';
import ProductCardNike from "@/component/Cards/ProductCardNike/ProductCardNike";

// @ts-ignore
const Brand = ({brand, products}) => {
  const router = useRouter()
  const {id} = router.query

  const getSectionContentLength = () => {
    if (!brand.attributes.Brand_section_content || !brand.attributes.Brand_section_content.length) {
      return 0;
    }

    return brand.attributes.Brand_section_content.length;
  }

  let sectionContent: JSX.Element[] = [];

  if (!brand) return;

  if (brand.attributes.Brand_section_content) {
    sectionContent = Object.keys(brand.attributes.Brand_section_content).map(key => {
      return (
        <section className={styles.ProductContentRow} key={brand.attributes.Brand_section_content[key].id}>
          <div className={styles.contentRowWrapper}>
            <section className={styles.RowCopy}>
              <header className={styles.RowCopy__header}>
                <h1 className={styles.RowCopy__title}>{brand.attributes.Brand_section_content[key].Section_Title}</h1>
              </header>
              <div className={styles.RowCopy__body}>
                <p dangerouslySetInnerHTML={{__html: brand.attributes.Brand_section_content[key].Section_body}}></p>
              </div>
            </section>
            <div className={styles.SectionImageWrapper}>
              <Image src={svg} alt={"svg"} className={styles.backgroundSvg} />
              <img src={`http://localhost:1337${brand.attributes.Brand_section_content[key].Section_Image.data.attributes.url}`} alt="img"/>
            </div>
          </div>
        </section>
      )
    })
  }

  return (
    <>
      <Header inverse={true}/>
      <div className={styles.productPage}>
        <div className={styles.firstRow}>
          <div className={styles.contentWrapper}>
            <section className={styles.Copy}>
              <header className={styles.Copy__header}>
                <h1 className={styles.Copy__title}>{brand.attributes.brand_name}</h1>
              </header>
              <div className={styles.Copy__body}>
                <p dangerouslySetInnerHTML={{__html: brand.attributes.brand_description}}></p>
              </div>
            </section>
            <div className={styles.carouselWrapper}>
              <Carousel
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                infiniteLoop={true}
                interval={3000}
                autoPlay={true}
                stopOnHover={true}
                dynamicHeight={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className={`${styles.controlButton} ${styles.controlPrev}`}></button>
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <button type="button" onClick={onClickHandler} title={label}
                            className={`${styles.controlButton} ${styles.controlNext}`}></button>
                  )
                }
              >
                {Object.keys(brand.attributes.Images.data).map(key => {
                  return (
                    <div key={brand.attributes.Images.data[key].id}>
                      <img src={'http://localhost:1337'+brand.attributes.Images.data[key].attributes.url} className={styles.carouselImage} alt={"asd"} />
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>

        {sectionContent}

      </div>

      <ProductCardNike products={products} invert={getSectionContentLength() % 2 === 1} />

      <Footer/>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {id: '1'}},
    ],
    fallback: true,
  }
}

interface ProductsParams {
  params: {
    id: number
  }
}

export async function getStaticProps({params}: ProductsParams) {
  const [brandsRes, productsRes] = await Promise.all([
    fetchAPI("/brands/" + params.id, {
      populate: {
        Brand_section_content: {
          populate: '*'
        },
        Images: {
          populate: '*'
        },
      }
    }),
    fetchAPI("/products", {
      sort: ['createdAt:desc'],
      filters: {'brand': {'id': params.id}},
      pagination: {
        start: 0,
        limit: 12,
      },
      populate: "*"
    }),
  ]);

  return {
    props: {
      brand: brandsRes.data,
      products: productsRes.data,
    },
    revalidate: 1,
  };
}

export default Brand;