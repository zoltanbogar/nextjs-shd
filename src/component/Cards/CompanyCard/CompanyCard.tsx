import styles from "../../../pages/company/company.module.css";

import Restaurants from "./Restaurants/Restaurants";
import Image from "next/image";

const CompanyCard = (companies: any[]) => {
  let content: JSX.Element[] = [<div key={0}>Loading</div>];

  if (companies) {
    //console.log(companies);
    // @ts-ignore
    //console.log(companies.companies);

    // @ts-ignore
    content = companies.companies.map((company, idx) => {
      //console.log(company, idx);
      return (<div className={styles.profileCard} key={company.id}>
        <figure className={styles.profileCard__img}>
          <Image src={'http://localhost:1337'+company.attributes.Image.data[0].attributes.url} alt=""/>
        </figure>

        <div className={styles.profileCard__desc}>
          <h2>{company?.attributes?.Title}</h2>
          <div>{company?.attributes?.Email}</div>

        </div>

        <div className={styles.profileCard__info}>
          <div>
            <div>{company.attributes.restaurants.data.length}</div>
            <div>Restaurant(s)</div>
          </div>

          <div>
            <div>{company.attributes.users.data.length}</div>
            <div>Employee(s)</div>
          </div>
        </div>

        <div className={styles.profileCard__social}>
          <a href="#" className={styles.facebook}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24"
                 height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                 strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/>
            </svg>
          </a>
          <a href="#" className={styles.twitter}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24"
                 height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                 strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path
                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"/>
            </svg>
          </a>
          <a href="#" className={styles.instagram}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24"
                 height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                 strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="4" y="4" width="16" height="16" rx="4"/>
              <circle cx="12" cy="12" r="3"/>
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"/>
            </svg>
          </a>
        </div>

        <div className={styles.profileCard__actions}>
          <button className={styles.primary}>Do smth</button>
          <button className={styles.secondary}>Do other things</button>
        </div>
        <Restaurants companyRestaurants={company.attributes.restaurants.data} />
      </div>)
    })
  }

  return (
    <div>{content}</div>
  );
}

export default CompanyCard;