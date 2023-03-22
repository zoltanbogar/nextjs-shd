import {fetchAPI} from "@/lib/api";
import Cookies from "universal-cookie";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import styles from "@/pages/wizard/wizard.module.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";

// @ts-ignoregit
const System = ({systemTypes}) => {
  const cookies = new Cookies();
  const router = useRouter();

  const [listContent, setListContent] = useState()
  const [controls, setControls] = useState()
  const [systemType, setSystemType] = useState()

  let content = '';

  const handleSelected = (event: Event, id: number) => {
    const target = event?.target as HTMLElement;

    cookies.set('systemType', id);

    // @ts-ignore
    const siblings = [...target.parentNode.children].filter((child) => child !== target);
    siblings.forEach(e => {
      e.classList.remove(styles.selected)
    })

    target.classList.add(styles.selected);
  }

  // @ts-ignore
  const handleStepForward = (url) => {
    const pt = cookies.get('systemType')
    if (pt) {
      console.log('mehetünk');
      router.push(url)
    } else {
      console.log('válassz');
    }
  }

  useEffect(() => {
    // @ts-ignore
    content = systemTypes.map(type => (
      // @ts-ignore
      <div key={'system_' + type.id} className={`${styles.cardContainer} ${(type.id === parseInt(cookies.get('systemType')) ? styles.selected : '')}`} onClick={() => handleSelected(event, type.id)}>
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
      <button type={"button"} onClick={() => handleStepForward('/wiz/categories/1')}>Next</button>
    )
    // @ts-ignore
    setControls(controlContent)

    const pt = cookies.get('systemType')

    if (pt) {
      setSystemType(pt);
    }
  }, [])

  return (
    <>
      <Header />
      <div className={styles.wizardContainer}>
        <h2 className={styles.wizardTitle}>System Builder</h2>
        <div className={styles.wizardContent}>
          {listContent}
        </div>
        <div className={styles.wizardController}>
          {controls}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [systemTypeRes] = await Promise.all([
    fetchAPI("/system-types", {
      populate: "*"
    })
  ]);

  return {
    props: {
      systemTypes: systemTypeRes.data,
    },
    revalidate: 1,
  };
}

export default System;