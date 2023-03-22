import {fetchAPI} from "@/lib/api";
import {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import styles from "@/pages/wiz/categories/categories.module.css";
import WizardCard from "@/pages/wizard/WizardCard/WizardCard";
import Cookies from "universal-cookie";

const Categories = ({productTaxonomies, productTaxonomiesCount, products}) => {
  const router = useRouter()
  const {pid} = router.query
  const cookies = new Cookies();
  const [controlContent, setControlContent] = useState()

  console.log({productTaxonomies, productTaxonomiesCount, products});

  useEffect(() => {
    //console.log({pid, productTaxonomiesCount});
    let controlsContent = (
      <button type={"button"} onClick={() => router.push(`/wiz/categories/${(parseInt(pid) + 1)}`)}>Next</button>
    )
    if (parseInt(pid) === (productTaxonomiesCount)) {
      controlsContent = (
        <button type={"button"} onClick={() => router.push('/order')}>Calculate</button>
      )
    }
    setControlContent(controlsContent)
  }, [pid, productTaxonomiesCount])

  const addProductToOrder = (productId: number, value: number) => {
    let newAddedProducts: {};

    if (value === 0) {
      newAddedProducts = addedProducts;
      delete newAddedProducts[productId];
    } else {
      let newAddition = {[productId]: value}
      newAddedProducts = {...addedProducts, ...newAddition}

      for (const id in products) {
        if (products[id].id === productId) {
          if (products[id].attributes.is_hub || !products[id].attributes.is_require_hub) {
            break;
          }

          if (!products[id].attributes.hub.data !== null) {
            const hub = {[products[id].attributes.hub.data.id]: 1}
            newAddedProducts = {...newAddedProducts, ...hub}
          }
        }
      }
    }

    //setAddedProducts(newAddedProducts)

    cookies.set('order', newAddedProducts, {path: '/'});
  }

  const handleCategoryTabSelect = (event, idx) => {
    event.preventDefault();
    router.push(`/wiz/categories/${(parseInt(idx) + 1)}`)
  }

  return (
    <>
      <Header/>
      <div className={styles.wizardContainer}>
        <div className={styles.wizardMenu}>
          {productTaxonomies.map((tax, index) => <a className={parseInt(pid) === (index + 1) ? styles.active : ''}
                                                    key={tax.id} href="#"
                                                    onClick={() => handleCategoryTabSelect(event, index)}>{tax.attributes.name}</a>)}
        </div>
        <div className={styles.wizardContent}>
          {products.map(e => {
            return (
              <WizardCard key={'product_' + e.id} product={e} set={addProductToOrder}/>
            )
          })}
        </div>
        <div className={styles.wizardController}>
          {controlContent}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {pid: '1'}},
    ],
    fallback: true,
  }
}

interface CategoriesParams {
  params: {
    pid: number
  }
}

export async function getStaticProps({params}: CategoriesParams) {
  const [productTaxonomiesRes, productTaxonomiesCountRes, productsRes] = await Promise.all([
    fetchAPI("/product-taxonomies", {
      sort: ['createdAt:asc'],
      populate: "*"
    }),
    fetchAPI("/product-taxonomies/count/view", {}),
    fetchAPI("/products", {
      sort: ['createdAt:desc'],
      filters: {'product_taxonomy': {'id': params.pid}},
      populate: "*"
    }),
  ]);

  return {
    props: {
      productTaxonomies: productTaxonomiesRes.data,
      productTaxonomiesCount: productTaxonomiesCountRes,
      products: productsRes.data,
    },
    revalidate: 1,
  };
}

export default Categories;