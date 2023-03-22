import styles from './Card.module.css';
import {useRef} from "react";

interface Card {
  title: string,
  subtitle: string
}

const Card = ({title, subtitle}: Card) => {
  //const subtitleEl = document.getElementsByClassName("card__subtitle")[0];

  //const subtitleEl = useRef<HTMLDivElement>(null);

  const createWord = (text: string, index: number) => {
    //console.log((index - 1 ) * 40);
    //console.log((40 * Math.random()));
    //console.log((index * 40) + (40 * Math.random()));
    return <span className={styles.card__subtitle__word} style={{transitionDelay: `${index * 40}ms`}} key={index}>{text}</span>
    return <span className={styles.card__subtitle__word} style={{transitionDelay: `${(index * 40) + (40 * Math.random())}ms`}} key={index}>{text}</span>
  }

  const createSubtitle = (text: string) => text.split(" ").map(createWord);

  const subbie = createSubtitle(subtitle);

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__subtitle}>{subbie.map(e => e)}</div>
      </div>
    </div>
  );
}

export default Card;