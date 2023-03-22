import {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import {fetchAPI} from "@/lib/api";
import styles from './index.module.css';
import axios from "axios";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";

import {useEffectOnce} from "@/hooks/useEffectOnce";

interface Offer {
  [id: string]: number;
}

// @ts-ignore
const OrderPage = ({products, homes}) => {
  const cookies = new Cookies();
  const [offer, setOffer] = useState({})
  const [productsInOffer, setProductsInOffer] = useState({})
  const [sumHufState, setSumHufState] = useState(0)
  const [sumEurState, setSumEurState] = useState(0)
  //console.log('init', sumHuf, sumEur)

  useEffectOnce(() => {
    let order = cookies.get('order')

    if (order) {
      for (const id in products) {
        const productId = products[id].id;

        for (const orderedProductId in order) {
          if (productId === parseInt(orderedProductId)) {
            if (products[id].attributes.is_hub || !products[id].attributes.is_require_hub) {
              break;
            }

            console.log(order, products[id].attributes.hub.data.id, Object.keys(order).includes(`${products[id].attributes.hub.data.id}`))
            if (products[id].attributes.hub.data !== null && !Object.keys(order).includes(`${products[id].attributes.hub.data.id}`)) {
              const hub = {[products[id].attributes.hub.data.id]: 1}

              const orderWithHub = {...order, ...hub}

              cookies.set('order', orderWithHub, {path: '/'})
              setOffer(orderWithHub)

              order = cookies.get('order')
            }
          }
        }
      }
      order = cookies.get('order')
      setOffer(order)
    }
  })

  // @ts-ignore
  useEffectOnce(() => {
    let sumHuf = cookies.get('sumHuf')
    if (!sumHuf) {
      sumHuf = 0;
    }
    let sumEur = cookies.get('sumEur')
    if (!sumEur) {
      sumEur = 0;
    }

    for (const id in offer) {
      // @ts-ignore
      const count = offer[id];

      sumHuf = cookies.get('sumHuf')
      if (!sumHuf) {
        sumHuf = 0;
      }
      sumEur = cookies.get('sumEur')
      if (!sumEur) {
        sumEur = 0;
      }

      products.forEach((product: { id: number; attributes: { price_in_huf: any; price_in_eur: any; }; }, idx: any) => {
        if (parseInt(id) === product.id) {

          const priceHuf = product.attributes.price_in_huf
          const priceEur = product.attributes.price_in_eur


          console.log(id, product, priceEur, priceHuf, priceHuf * count + sumHuf, priceEur * count + sumEur, sumHuf, sumEur);

          if (priceHuf !== null) {
            const newPrice = priceHuf * count + parseInt(sumHuf)
            //setSumHuf(newPrice)
            cookies.set('sumHuf', newPrice, {path: '/'})
          } else {
            const newPrice = priceEur * count + parseInt(sumEur)
            cookies.set('sumEur', newPrice, {path: '/'})
          }

          let newProductsinOffer = productsInOffer
          // @ts-ignore
          newProductsinOffer[id] = product
          setProductsInOffer(newProductsinOffer)
        }
      })
    }

    sumHuf = cookies.get('sumHuf')
    if (!sumHuf) {
      sumHuf = 0;
    }
    sumEur = cookies.get('sumEur')
    if (!sumEur) {
      sumEur = 0;
    }
    setSumEurState(sumEur)
    setSumHufState(sumHuf)
    // @ts-ignore
  }, [offer, products])

  const handleSubmit = () => {
    // @ts-ignore
    event.preventDefault();
    console.log('submitted');

    let orderData = {}
    let homeData = {}

    for (let i = 0; i < 2; i++) {
      // @ts-ignore
      orderData = {...orderData, ...{[event.target[i].name]: event.target[i].value}}
    }

    orderData = {...orderData, ...{['product_json']: productsInOffer}}

    for (let i = 2; i < 11; i++) {
      // @ts-ignore
      let value = event.target[i].value
      if (value === "on") value = true
      if (value === "off") value = false
      console.log(value)
      // @ts-ignore
      homeData = {...homeData, ...{[event.target[i].name]: value}}
    }
    console.log(orderData, homeData)

    axios.post(
      `http://localhost:1337/api/homes`,
      {
        data: homeData
      }
    ).then(r => {
      const homeId = r?.data?.data?.id
      orderData = {...orderData, ...{['home']: homeId}}

      axios.post(
        `http://localhost:1337/api/orders`,
        {
          data: orderData
        }
      ).then(r => console.log('order added', r));
    });


  }

  return (
    <>
      <Header/>
      <div className={styles.orderPage}>
        <div>Total eur {sumEurState}</div>
        <div>Total huf {sumHufState}</div>
        {/*@ts-ignore*/}
        <div>Total price {parseInt(sumHufState) + (parseInt(sumEurState) * 389)} Ft</div>
        <div className={styles.productList}>
          {products.map((p: { id: string; attributes: { Thumbnail: { data: { attributes: { url: any; }; }; }; Name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }; }) => {
            if (Object.keys(offer).includes(`${p.id}`)) {
              return (
                <div key={'list_' + p.id} className={styles.orderCard}>
                  <img className={styles.orderCardImage}
                       src={`http://localhost:1337${p.attributes.Thumbnail.data.attributes.url}`} alt="thumbnail"/>
                  <div className={styles.orderTitle}>{p.attributes.Name}</div>
                </div>
              )
            }
          })}
        </div>
        <div className={styles.formContainer}>
          <form action="#" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="observation_date">Observation Date</label>
              <input className={styles.formInput} type="date" name="observation_date"/>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="installation_date">Installation Date</label>
              <input className={styles.formInput} type="date" name="installation_date"/>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="owner_name">Name</label>
              <input className={styles.formInput} type="text" name="owner_name"/>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="owner_phone">Phone</label>
              <input className={styles.formInput} type="tel" name="owner_phone"/>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="owner_email">Email</label>
              <input className={styles.formInput} type="email" name="owner_email"/>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="postal_code">Postal Code</label>
              <input className={styles.formInput} type="text" name="postal_code"/>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="city">City</label>
              <input className={styles.formInput} type="text" name="city"/>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="street">Street</label>
              <input className={styles.formInput} type="text" name="street"/>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="address_misc">Address Misc</label>
              <input className={styles.formInput} type="text" name="address_misc"/>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="area">Area</label>
              <input className={styles.formInput} type="number" name="area"/>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.formLabel} htmlFor="is_newly_built">Is Newly Built</label>
              <input className={styles.formCheckbox} type="checkbox" name="is_newly_built"/>
            </div>

            <input className={styles.formButton} type="submit" value={"Submit"}/>
          </form>
        </div>
      </div>
      <Footer/>
    </>

  )
}

//get products where id IN Object.keys(offer)
//get hubs where needed
//calculate cost
//add button to the page to render a form to place an order
//render form fields and a button that saves an order and home to strapi

export async function getStaticProps() {
  // Run API calls in parallel
  const [productsRes, homesRes] = await Promise.all([
    fetchAPI("/products", {
      //filters: {'id': [1,2,3]},
      populate: "*",
      _limit: -1,
      pagination: {
        start: 0,
        limit: 999,
      },
    }),
    fetchAPI("/homes", {
      //filters: {'id': [1,2,3]},
      populate: "*",
    }),
  ]);

  return {
    props: {
      products: productsRes.data,
      homes: homesRes.data,
    },
    revalidate: 1,
  };
}

export default OrderPage;