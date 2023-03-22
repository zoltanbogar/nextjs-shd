import styles from './ProductCard.module.css';
import CSSModules from 'react-css-modules';

// @ts-ignore
const ProductCard = ({products}) => {
  let productCardsContent = '';

  productCardsContent = products.map((product: { id: number; attributes: {
      Thumbnail: any;
      price_in_huf: number; price_in_eur: number; brand: { data: { attributes: { brand_name: string; }; }; }; product_taxonomy: { data: { attributes: { name: string; }; }; }; Name: string; }; }) => (<div key={product.id} className={`${styles.container} ${styles.shoe}`}>
      <div className={`${styles.productImage} ${styles.shoeImg}`} style={{backgroundImage: `url("http://localhost:1337${product.attributes.Thumbnail.data.attributes.url}")`}}></div>
      <div className={`${styles.size} ${styles.upright}`}>
        <h4>{product.attributes?.product_taxonomy?.data?.attributes?.name}</h4>
      </div>
      <div className={`${styles.price} ${styles.shoePrice}`}>
        <h4>PRICE</h4>
        <span>{product.attributes.price_in_huf ? `${product.attributes.price_in_huf} Ft` : `${product.attributes.price_in_eur} €`}</span>
      </div>
      <div className={`${styles.color} ${styles.upright}`}>
        <h4>{product.attributes.brand.data.attributes.brand_name}</h4>
      </div>
      <div className={`${styles.productName} ${styles.shoeName} ${styles.wordBreak}`}>
        {product.attributes.Name}
      </div>
    </div>)
  );

  return (
    <div className={styles.productCardsContainer}>
      <h2 className={styles.legend}>Latest</h2>
      <div className={styles.productCardsContainerInner}>
        {productCardsContent}
      </div>
    </div>
  );
}

export default CSSModules(ProductCard, styles, {allowMultiple: true} );