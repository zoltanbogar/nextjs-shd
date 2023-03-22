import styles from './ProductCardNike.module.css';
import CSSModules from 'react-css-modules';
import Link from "next/link";

// @ts-ignore
const ProductCardNike = ({products, invert}) => {
  let productCardsContent = '';

  productCardsContent = products.map((product: {
      id: number; attributes: {
        Thumbnail: any;
        price_in_huf: number; price_in_eur: number; brand: { data: { attributes: { brand_name: string; }; }; }; product_taxonomy: { data: { attributes: { name: string; }; }; }; Name: string;
      };
    }) => (
      <Link key={product.id} className={`${styles.card}`} data-brand={product.attributes.brand.data.attributes.brand_name} href={`/product/${product.id}`}>
        <img className={`${styles.card__img}`}
             src={`http://localhost:1337${product.attributes.Thumbnail.data.attributes.url}`} alt={"asdas"}/>
        <h2 className={styles.card__title}>{product.attributes.Name}</h2>

        <div className={styles.card__content}>
          <div className={styles.card__sizeContainer}>
            <p className={styles.card__sizeTitle}>Price:</p>
            <span className={styles.card__sizeNumber}>{product.attributes.price_in_huf ? `${product.attributes.price_in_huf} Ft` : `${product.attributes.price_in_eur} €`}</span>
          </div>
          <div className={styles.card__colorContainer}>
            <p className={styles.card__colorTitle}>Brands:</p>
            <span className={styles.card__colorCircle}>{product.attributes.brand.data.attributes.brand_name}</span>
          </div>
          <div className={styles.card__sizeContainer}>
            <p className={styles.card__sizeTitle}>Category:</p>
            <span className={styles.card__sizeNumber}>{product.attributes?.product_taxonomy?.data?.attributes?.name}</span>
          </div>
        </div>
        {/*<a href='#' className={styles.card__link}>{product.attributes?.product_taxonomy?.data?.attributes?.name}</a>*/}
      </Link>


    )
  );

  console.log(productCardsContent);

  return (
    <div className={`${styles.productCardsContainer} ${invert ? styles.productCardsContainerInvert : ''}`}>
      <h2 className={styles.legend}>Latest</h2>
      <div className={styles.productCardsContainerInner}>
        {productCardsContent}
      </div>
    </div>
  );
}

export default CSSModules(ProductCardNike, styles, {allowMultiple: true});