import styles from "@/pages/wizard/WizardCard/WizardCard.module.css";
import {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import Image from "next/image";

interface WizardCardInterface {
  product: ProductObject,
  set?: object,
  //order?: object,
}

interface ProductObject {
  id: number,
  attributes: {
    Name: string,
    Thumbnail: {
      data: {
        attributes: {
          id: number,
          url: string,
        }
      }
    }
  }
}

const WizardCard = ({product, set}: WizardCardInterface) => {
  const cookies = new Cookies();
  let order = cookies.get('order')
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (order && product && product.id in order) {
      setCount(order[product.id]);
    }
  }, []);

  const handleCountStep = (value: number) => {
    const newCount = count + value;
    const productId = product.id
    order = cookies.get('order')

    setCount(newCount);
    console.log(newCount);

    if (newCount > 0) {
      const newOrder = {...order, ...{[productId]: newCount}}

      console.log(productId, newCount, newOrder);

      cookies.set('order', newOrder, {path: '/'})
    } else {
      console.log(order[productId]);
      delete order[productId]
      console.log(order);
      cookies.set('order', order, {path: '/'})
    }


    //set(product.id, newCount);
  }

  const handleStepMinus = () => {
    if (count > 0) {
      handleCountStep(-1);

      //add product with 1 less
    }
  }

  const handleStepPlus = () => {
    handleCountStep(1);
    //add product
  }

  const handleSetManualCount = () => {
    order = cookies.get('order')
    const target = event?.target;
    // @ts-ignore
    const value = parseInt(target.value);

    const productId = product.id

    //add product if value not null

    setCount(value);

    if (value > 0) {
      const newOrder = {...order, ...{[productId]: value}}

      console.log(productId, value, newOrder);

      cookies.set('order', newOrder, {path: '/'})
    } else {
      delete order[productId]
      cookies.set('order', order, {path: '/'})
    }

    //console.log(product.id, parseInt(value));


    //set(product.id, value);
  }

  return (

    <div key={product ? product.id : 0} className={`${styles.cardContainer} ${(count > 0 ? styles.selected : '')}`}>
      {product && (
      <Image src={'http://localhost:1337'+product.attributes.Thumbnail.data.attributes.url} alt="logo" className={styles.cardImage}/>
      )}
      {product && (
        <div className={styles.cardTitle}>
          {product.attributes.Name}
        </div>
      )}
      <div className={styles.stepper}>
        <button className={styles.minus} onClick={handleStepMinus}>-1</button>
        <input type="number" className={styles.count} onChange={handleSetManualCount} value={count} />
        <button className={styles.plus} onClick={handleStepPlus}>+1</button>
      </div>
    </div>
  );
}

export default WizardCard;