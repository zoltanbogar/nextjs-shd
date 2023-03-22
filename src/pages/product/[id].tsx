import React, { CSSProperties, useEffect } from 'react';
import {useRouter} from "next/router";
import {fetchAPI} from "@/lib/api";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import GlowingButton from "@/component/Buttons/GlowingButton/GlowingButton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from "@fortawesome/free-solid-svg-icons";

import Image from 'next/image';
import svg from "@/resources/images/misc/05cae2bf306c44b4a82fda253514822e.svg"
import svgMatter from "@/resources/images/misc/integrations-matter-icon.svg";
import pngZigbee from "@/resources/images/misc/zigbee.png";
import svgBle from "@/resources/images/misc/bluetooth-svgrepo-com.svg";
import svgZwave from "@/resources/images/misc/z-wave-svgrepo-com.svg";
import svgThread from "@/resources/images/misc/Thread-logomark-dkgrey_aud.svg";

import styles from './product.module.css';

import { Carousel } from 'react-responsive-carousel';
import {useEffectOnce} from "@/hooks/useEffectOnce";

// @ts-ignore
const Product = ({product}) => {
  const router = useRouter()
  const {id} = router.query
  console.log(product)

  /*useEffect(() => {

    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetchAPI("/products/" + id, {
        populate: {
          Product_section_content: {
            populate: '*'
          },
          brand: {
            populate: '*'
          },
          Images: {
            populate: '*'
          },
          Thumbnail: {
            populate: '*'
          },
          hub: {
            populate: '*'
          },
          phone_types: {
            populate: '*'
          },
          product_taxonomy: {
            populate: '*'
          },
          system_types: {
            populate: '*'
          }
        }
      });

      console.log({data})
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])*/

  let sectionContent: JSX.Element[] = [];

  if (!product) return;

  if (product.attributes.Product_section_content) {
    sectionContent = Object.keys(product.attributes.Product_section_content).map(key => {
      return (
        <section className={styles.ProductContentRow} key={product.attributes.Product_section_content[key].id}>
          <div className={styles.contentRowWrapper}>
            <section className={styles.RowCopy}>
              <header className={styles.RowCopy__header}>
                <h1 className={styles.RowCopy__title}>{product.attributes.Product_section_content[key].Section_Title}</h1>
              </header>
              <div className={styles.RowCopy__body}>
                <p dangerouslySetInnerHTML={{__html: product.attributes.Product_section_content[key].Section_body}}></p>
              </div>
            </section>
            <div className={styles.SectionImageWrapper}>
              <Image src={svg} alt={"svg"} className={styles.backgroundSvg} />
              <img src={`http://localhost:1337${product.attributes.Product_section_content[key].Section_Image.data.attributes.url}`} alt="img"/>
            </div>
          </div>
        </section>
      )
    })
  }



  //console.log(product.attributes.Product_section_content)
  return (
    <>
      <Header inverse={true}/>
      <div className={styles.productPage}>
        <div className={styles.firstRow}>
          <div className={styles.contentWrapper}>
            <section className={styles.Copy}>
              <header className={styles.Copy__header}>
                <h2 className={styles.Copy__caption}>{product.attributes.product_taxonomy.data.attributes.name}</h2>
                <h1 className={styles.Copy__title}>{product.attributes.Name}</h1>
              </header>
              <div className={styles.Copy__body}>
                <p dangerouslySetInnerHTML={{__html: product.attributes.description}}></p>
              </div>
              <footer className={styles.Copy__footer}>
                <div className={styles.Copy__ctaContainer}>
                  <GlowingButton label={"Add to Cart"} />
                </div>
                <div className={styles.icons}>
                  {(product.attributes.Product_Attributes && product.attributes.Product_Attributes.is_ble) && (
                    <div className={styles.iconWrapper}>
                      <Image src={svgBle} alt={"svg"} className={styles.productAttributes} />
                      <div className={styles.iconDescription}>BLE</div>
                    </div>
                  )}
                  {(product.attributes.Product_Attributes && product.attributes.Product_Attributes.is_wifi) && (
                    <div className={styles.iconWrapper}>
                      <FontAwesomeIcon icon={faWifi} className={styles.productAttributes} />
                      <div className={styles.iconDescription}>WiFi</div>
                    </div>
                  )}
                  {(product.attributes.Product_Attributes && product.attributes.Product_Attributes.is_matter) && (
                    <div className={styles.iconWrapper}>
                      <Image src={svgMatter} alt={"svg"} className={styles.productAttributes} />
                      <div className={styles.iconDescription}>Matter</div>
                    </div>
                  )}
                  {(product.attributes.Product_Attributes && product.attributes.Product_Attributes.is_zigbee) && (
                    <div className={styles.iconWrapper}>
                      <Image src={pngZigbee} alt={"svg"} className={styles.productAttributes} />
                      <div className={styles.iconDescription}>Zigbee</div>
                    </div>
                  )}
                  {(product.attributes.Product_Attributes && product.attributes.Product_Attributes.is_zwave) && (
                    <div className={styles.iconWrapper}>
                      <Image src={svgZwave} alt={"svg"} className={styles.productAttributes} />
                      <div className={styles.iconDescription}>Z-Wave</div>
                    </div>
                  )}
                  {(product.attributes.Product_Attributes && product.attributes.Product_Attributes.is_thread) && (
                    <div className={styles.iconWrapper}>
                      <Image src={svgThread} alt={"svg"} className={styles.productAttributes} />
                      <div className={styles.iconDescription}>Thread</div>
                    </div>
                  )}
                </div>
              </footer>
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
                {Object.keys(product.attributes.Images.data).map(key => {
                  return (
                    <div key={product.attributes.Images.data[key].id}>
                      <img src={'http://localhost:1337'+product.attributes.Images.data[key].attributes.url} className={styles.carouselImage} alt={"asd"} />
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </div>




        </div>

        {sectionContent}

      </div>
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
  const [productsRes] = await Promise.all([
    fetchAPI("/products/" + params.id, {
      populate: {
        Product_section_content: {
          populate: '*'
        },
        Product_Attributes: {
          populate: '*'
        },
        brand: {
          populate: '*'
        },
        Images: {
          populate: '*'
        },
        Thumbnail: {
          populate: '*'
        },
        hub: {
          populate: '*'
        },
        phone_types: {
          populate: '*'
        },
        product_taxonomy: {
          populate: '*'
        },
        system_types: {
          populate: '*'
        }
      }
    }),
  ]);

  return {
    props: {
      product: productsRes.data,
    },
    revalidate: 1,
  };
}

export default Product;