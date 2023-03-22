import {fetchAPI} from "@/lib/api";
import Cookies from "universal-cookie";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import styles from "@/pages/wizard/wizard.module.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";

const Phone = ({phoneTypes}) => {
  const cookies = new Cookies();
  const router = useRouter();

  const [listContent, setListContent] = useState()
  const [controls, setControls] = useState()
  const [phoneType, setPhoneType] = useState()

  let content = '';

  const handleSelected = (event: Event, id: number) => {
    const target = event?.target as HTMLElement;

    cookies.set('phoneType', id);

    const siblings = [...target.parentNode.children].filter((child) => child !== target);
    siblings.forEach(e => {
      e.classList.remove(styles.selected)
    })

    target.classList.add(styles.selected);
  }

  const handleStepForward = (url) => {
    const pt = cookies.get('phoneType')
    if (pt) {
      console.log('mehetünk');
      router.push(url)
    } else {
      console.log('válassz');
    }
  }

  useEffect(() => {
    content = phoneTypes.map(type => (
      <div key={'phone_' + type.id} className={`${styles.cardContainer} ${(type.id === parseInt(cookies.get('phoneType')) ? styles.selected : '')}`} onClick={() => handleSelected(event, type.id)}>
        <img src={'http://localhost:1337' + type.attributes.Image.data.attributes.url} alt="logo"
             className={styles.cardImage}/>
        <div className={styles.cardTitle}>
          {type.attributes.Type}
        </div>
      </div>
    ));
    setListContent(content);

    let controlContent = (
      <button type={"button"} onClick={() => handleStepForward('/wiz/system')}>Next</button>
    )
    setControls(controlContent)

    const pt = cookies.get('phoneType')

    if (pt) {
      setPhoneType(pt);
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
  const [phoneTypeRes] = await Promise.all([
    fetchAPI("/phone-types", {
      populate: "*"
    })
  ]);

  return {
    props: {
      phoneTypes: phoneTypeRes.data,
    },
    revalidate: 1,
  };
}

export default Phone;