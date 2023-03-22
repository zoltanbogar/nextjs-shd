import {fetchAPI} from "@/lib/api";
import {JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, SetStateAction,
  useEffect,
  useState
} from "react";
import {useRouter} from 'next/router';

import styles from './wizard.module.css';
import WizardCard from "@/pages/wizard/WizardCard/WizardCard";

import Cookies from 'universal-cookie';
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";

// @ts-ignore
const Wizard = ({productTaxonomies, phoneTypes, systemTypes, products, prods}) => {
//console.log({productTaxonomies, phoneTypes, systemTypes, products, prods});
  const cookies = new Cookies();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);
  const [addedProducts, setAddedProducts] = useState({});
  const [listContent, setListContent] = useState()
  const [controls, setControls] = useState()

  let content = '';

  useEffect(() => {
    content = phoneTypes.map((type: { id: string; attributes: { Image: { data: { attributes: { url: string; }; }; }; Type: string | number | boolean | ReactFragment | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | null | undefined; }; }) => (
      // @ts-ignore
      <div key={'phone_' + type.id} className={styles.cardContainer} onClick={handleSelected}>
        <img src={'http://localhost:1337' + type.attributes.Image.data.attributes.url} alt="logo"
             className={styles.cardImage}/>
        <div className={styles.cardTitle}>
          {type.attributes.Type}
        </div>
      </div>
    ));
    // @ts-ignore
    setListContent(content);

    let controlContent = (
      <button type={"button"} onClick={() => handleControlClick(1)}>Next</button>
    )
    // @ts-ignore
    setControls(controlContent)


    const order = cookies.get('order')

    if (order) {
      setAddedProducts(order);
    }
  }, [])

  const handleControlClick = (tab: SetStateAction<number>, name = '') => {
    console.log({tab, name})
    setActiveTab(tab)
    // @ts-ignore
    handleCategoryTabSelect(tab, name);
  }

  const handleSelected = (event: Event) => {
    const target = event?.target as HTMLElement;

    // @ts-ignore
    const siblings = [...target.parentNode.children].filter((child) => child !== target);
    siblings.forEach(e => {
      e.classList.remove(styles.selected)
    })

    target.classList.add(styles.selected);
  }

  const handleCategoryTabSelect = (tab: number, taxonomyName?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined) => {
    setActiveTab(tab);

    if (taxonomyName === '') {
      let controlContent
      switch (tab) {
        case 0:
          content = phoneTypes.map((type: { id: string; attributes: { Image: { data: { attributes: { url: string; }; }; }; Type: string | number | boolean | ReactFragment | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | null | undefined; }; }) => (
            // @ts-ignore
            <div key={'phone_' + type.id} className={styles.cardContainer} onClick={handleSelected}>
              <img src={'http://localhost:1337' + type.attributes.Image.data.attributes.url} alt="logo"
                   className={styles.cardImage}/>
              <div className={styles.cardTitle}>
                {type.attributes.Type}
              </div>
            </div>
          ));
          // @ts-ignore
          setListContent(content);

          controlContent = (
            <button type={"button"} onClick={() => handleControlClick(1)}>Next</button>
          )
          // @ts-ignore
          setControls(controlContent)
          break;
        case 1:
          content = systemTypes.map((type: { id: string; attributes: { Image: { data: { attributes: { url: string; }; }; }; Type: string | number | boolean | ReactFragment | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | null | undefined; }; }) => (
            // @ts-ignore
            <div key={'system_' + type.id} className={styles.cardContainer} onClick={handleSelected}>
              <img src={'http://localhost:1337' + type.attributes.Image.data.attributes.url} alt="logo"
                   className={styles.cardImage}/>
              <div className={styles.cardTitle}>
                {type.attributes.Type}
              </div>
            </div>
          ));
          // @ts-ignore
          setListContent(content);

          controlContent = (
            <button type={"button"} onClick={() => handleControlClick(2, Object.keys(prods)[0])}>Next</button>
          )
          // @ts-ignore
          setControls(controlContent)
          break;
      }

      return;
    }


    // @ts-ignore
    content = prods[taxonomyName].map(e => {
      return (
        // @ts-ignore
        <WizardCard key={'product_' + e.id} product={e} set={addProductToOrder} order={addedProducts}/>
      )
    })

    let controlContent = (
      <button type={"button"} onClick={() => handleControlClick(tab + 1, Object.keys(prods)[tab - 1])}>Next</button>
    )
    if (Object.keys(prods).length === tab - 1) {
      controlContent = (
        <button type={"button"} onClick={() => handleCalculate('/order')}>Calculate</button>
      )
    }
    // @ts-ignore
    setControls(controlContent)

    // @ts-ignore
    setListContent(content)
  };

  const handleCalculate = (url: string) => {
    router.push(url)
  }

  const addProductToOrder = (productId: number, value: number) => {
    let newAddedProducts: {};

    if (value === 0) {
      newAddedProducts = addedProducts;
      // @ts-ignore
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

    setAddedProducts(newAddedProducts)

    cookies.set('order', newAddedProducts, {path: '/'});
  }

  console.log({productTaxonomies, prods});

  return (
    <>
      <Header/>
      <div className={styles.wizardContainer}>
        <h2 className={styles.wizardTitle}>System Builder</h2>
        <div className={styles.wizardMenu}>
          <a href="#" className={activeTab === 0 ? styles.active : ''} onClick={() => handleCategoryTabSelect(0)}>PHONE
            TYPE</a>
          <a href="#" className={activeTab === 1 ? styles.active : ''} onClick={() => handleCategoryTabSelect(1)}>SYSTEM
            TYPE</a>
          {productTaxonomies.map((tax: { id: Key | null | undefined; attributes: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; }; }, index: number) => <a className={activeTab === (index + 2) ? styles.active : ''}
                                                    key={tax.id} href="#"
                                                    onClick={() => handleCategoryTabSelect(index + 2, tax.attributes.name)}>{tax.attributes.name}</a>)}
        </div>
        <div className={styles.wizardContent}>
          {listContent}
        </div>
        <div className={styles.wizardController}>
          {controls}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [productTaxonomiesRes, phoneTypeRes, systemTypesRes, productsRes] = await Promise.all([
    fetchAPI("/product-taxonomies", {
      sort: ['createdAt:desc'],
      populate: "*"
    }),
    fetchAPI("/phone-types", {
      populate: "*"
    }),
    fetchAPI("/system-types", {
      populate: "*"
    }),
    fetchAPI("/products", {
      sort: ['createdAt:desc'],
      //filters: {'product_taxonomy': {'name': 'SENSORS'}},
      populate: "*"
    }),
  ]);

  let prod = {};

  productsRes.data.forEach((product: { attributes: { product_taxonomy: { data: { attributes: { name: any; }; }; }; }; }) => {
    const taxonomyName = product.attributes.product_taxonomy.data.attributes.name;

    // @ts-ignore
    if (prod[taxonomyName] === undefined) {
      // @ts-ignore
      prod[taxonomyName] = []
    }

    // @ts-ignore
    prod[taxonomyName].push(product);
  })

  return {
    props: {
      productTaxonomies: productTaxonomiesRes.data,
      phoneTypes: phoneTypeRes.data,
      systemTypes: systemTypesRes.data,
      products: productsRes.data,
      prods: prod,
    },
    revalidate: 1,
  };
}

export default Wizard;