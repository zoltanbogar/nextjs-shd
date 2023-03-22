import Card from './Card/Card';
import styles from './Cards.module.css';

interface Cards {
  cards: Array<CardInterface>
}

interface CardInterface {
  title: string,
  subtitle: string,
  id: number
}

const Cards = ({cards}: Cards) => {
  const cardsEl = cards.map(card => {
    return <Card title={card.title} subtitle={card.subtitle} key={card.id} />;
  });

  return (
    <div className={styles.card__container}>
      {cardsEl}
    </div>
  );
}

export default Cards;