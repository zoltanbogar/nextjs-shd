import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Canvas from '../component/Canvas/Canvas';
import Header from '../component/Header/Header';
import Cards from "../component/Cards/Cards";
import ProductCardNike from "@/component/Cards/ProductCardNike/ProductCardNike";

import { useDispatch, useSelector } from "react-redux";
import {wrapper} from "@/store/store";
import {fetchAPI, getStrapiURL} from "@/lib/api";
import Logo from "@/resources/images/logo/shd_logo_blue.png";
import Image from "next/image";
import Footer from "@/component/Footer/Footer";

//import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "@/store/product/action";
import axios from "axios";
import {useEffect} from "react";

// @ts-ignore
const Home: NextPage = ({products}) => {
  const cards = [
    {
      id: 1,
      title: 'Ingyenes felmérés',
      subtitle: 'Segítünk megtalálni a legjobb okos otthon megoldásokat. Kíváncsi vagy mennyibe kerülne egy rendszer kiépítése? Vedd igénybe INGYENES igényfelmérésünket!'
    },
    {
      id: 2,
      title: 'Okos otthon kényelmesen?',
      subtitle: 'Ismerd meg szolgáltatásunkat, amivel valóban OKOSSÁ teheted otthonodat, miközben te kényelmesen, egy eszközzel irányíthatod az egész háztartásod.'
    },
  ];

  return (
    <div className={styles.container} style={{background: "white"}}>
      <Head>
        <title>The Smart Home Doctor</title>
        <meta name="description" content="The next big hit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<Canvas/>*/}

      <Header />

      <section className="Section HomepageHero theme--White accent--Slate Section--bleed1 Section--bleed2 Section--paddingNormal Section--hasGuides" style={{marginTop: "-10px"}}>
        <div className="Section__masked">
          <div className="Section__backgroundMask" style={{"position": "absolute", "width":"100%", "height": "100%", "overflow": "visible"}}>
            <div className="Section__background" style={{position: "relative", height: "100%", maxHeight: "none", width: "100%", top: 0, left: 0, overflow: "hidden", background: "#fff", transform: "skewY(0)", transformOrigin: "100% 0"}}>
              <div className="Guides" aria-hidden="true" style={{position: "absolute", height: "100%", width: "100%", top: 0, left: 0, pointerEvents: "none", padding: "0 16px"}}>
                <div className="Guides__container" style={{display: "grid", position: "relative", maxWidth: "1080px", height: "100%", margin: "0 auto", grid: "1fr/repeat(1, 1fr)"}}>
                  <div className="Guides__guide" style={{width: "1px", background: "rgba(66,71,112,0.06)"}}></div>
                  <div className="Guides__guide" style={{width: "1px", backgroundSize: "1px 8px", background: "linear-gradient(180deg,rgba(66,71,112,0.09), rgba(66,71,112,0.09) 50%, transparent 0, transparent)"}}></div>
                  <div className="Guides__guide" style={{width: "1px", backgroundSize: "1px 8px", background: "linear-gradient(180deg,rgba(66,71,112,0.09), rgba(66,71,112,0.09) 50%, transparent 0, transparent)"}}></div>
                  <div className="Guides__guide" style={{width: "1px", backgroundSize: "1px 8px", background: "linear-gradient(180deg,rgba(66,71,112,0.09), rgba(66,71,112,0.09) 50%, transparent 0, transparent)"}}></div>
                  <div className="Guides__guide" style={{position: "absolute", top: 0, right: 0, height: "100%"}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="Section__container" style={{position: "relative", zIndex: 1, display: "flex", justifyContent: "center"}}>
            <div className="Section__layoutContainer" style={{width: "100%", maxWidth: "1080px", margin: "0 16px"}}>
              <div className="Section__layout" style={{padding: "116px 0 128px"}}>
                <div className="ColumnLayout" data-columns="2,2" style={{gridTemplateColumns: "repeat(2, 1fr)", display: "grid", alignItems: "flex-start", rowGap: "32px"}}>
                  <section className="Copy HomepageHero__title variant--Superhero" style={{display: "grid", rowGap: "32px", letterSpacing: ".2px"}}>
                    <header className="HomepageHeroHeader" data-js-controller="HomepageHeroHeader" style={{marginTop: "150px"}}>
                      <div className="HomepageHeroGradient Gradient isLoaded" style={{overflow: "hidden", position: "absolute", bottom: 0, width: "calc(200vw - 15px)", transformOrigin: "", border: "none", rotate: "-6deg", left: "calc(-50vw + 1080px / 2)", transform: "translateY(20px)", height: "500px", top: "-300px"}}>
                        <Canvas/>
                      </div>
                      <div
                        className="HomepageHeroHeader__title HomepageHeroHeader__title--overlay HomepageHeroHeader__title--burn"
                        data-js-target-list="HomepageHeroHeader.title"
                        aria-hidden="true"
                        style={{mixBlendMode: "color-burn", opacity: 0.8, position: "absolute", left: 0, bottom: 0, zIndex: 2, color: "#3a3a3a", padding: "0 0 0 16px", marginTop: "100px", minHeight: "200px", display: "flex", alignItems: "flex-end", letterSpacing: "-0.04em", font: "500 94px/1.04 \"sohne-var\",\"Helvetica Neue\",\"Arial\",sans-serif", maxWidth: "50%", paddingLeft: "200px"}}>
                        The Smart Home Doctor
                      </div>
                      <div
                        className="HomepageHeroHeader__title HomepageHeroHeader__title--overlay"
                        data-js-target-list="HomepageHeroHeader.title"
                        aria-hidden="true"
                        style={{position: "absolute", left: 0, bottom: 0, padding: "0 0 0 16px", zIndex: 2, color: "#3a3a3a", opacity: ".3", minHeight: "200px", display: "flex", marginTop: "100px", alignItems: "flex-end", letterSpacing: "-0.04em", font: "500 94px/1.04 \"sohne-var\",\"Helvetica Neue\",\"Arial\",sans-serif", maxWidth: "50%", paddingLeft: "200px"}}>
                        The Smart Home Doctor
                      </div>
                    </header>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cards cards={cards} />

      {/*<ProductCard products={products} />*/}

      <ProductCardNike products={products} invert={false} />

      <Footer />
    </div>
  )
}

// @ts-ignore
export const getStaticProps = wrapper.getStaticProps(store => async ({preview}) => {
  // Run API calls in parallel
  const [productsRes, brandsRes, bestSellersRes] = await Promise.all([
    fetchAPI("/products", {
      sort: ['createdAt:desc'],
      pagination: {
        start: 0,
        limit: 6,
      },
      populate: "*"
    }),
    fetchAPI("/brands", {populate: "*"}),
    fetchAPI("/best-seller", {populate: "*"}),
  ]);
  return {
    props: {
      products: productsRes.data,
      brands: brandsRes.data,
      bestSellers: bestSellersRes.data,
    },
    revalidate: 1,
  };
});

export default Home
