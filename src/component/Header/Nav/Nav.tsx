import styles from './Nav.module.css'

import Logo from "@/resources/images/logo/shd_logo-2.png";
import LogoInverse from "@/resources/images/logo/shd_logo_blue-2.png";
import Image from 'next/image'
import Link from "next/link";
import {useState} from "react";

// @ts-ignore
const Nav = ({menuRef, set, isOpen, setNavHover, isInverse}) => {
  const menuItemHoverHandler = (serial: number) => {
    setNavHover(true)

    if (!menuRef.current?.style) {
      menuRef.current = {...menuRef.current, ...{['style']: {['opacity']: 1}}}
    }
    menuRef.current.style.opacity = 1;
    set(serial)
  }

  const menuItemLeaveHandler = () => {
    setNavHover(false)
  }

  return (
    <div className={styles.SiteHeader__navContainer}>
      <h1 className={styles.SiteHeader__logo}>
        <Link href="/" className={styles.SiteHeader__logoLink}>
          <Image src={(isInverse ? LogoInverse : Logo)} alt="Logo" style={{display: "block", maxHeight: "40px", width: "auto"}} />
        </Link>
      </h1>

      <nav className={styles.SiteHeaderNav}>
        <ul className={styles.SiteHeaderNav__list} data-is-inverse={(!!isInverse)}>
          <li className={styles.SiteHeaderNavItem} onMouseEnter={() => menuItemHoverHandler(0)} onMouseLeave={menuItemLeaveHandler}>
            <button className={styles.SiteHeaderNavItem__link} aria-haspopup="true" aria-expanded="false"
                    data-js-target-list="SiteHeader.dropdownTriggers" data-testid="header-products-nav-item">Products
            </button>
          </li>

          {/*<li className={styles.SiteHeaderNavItem} onMouseEnter={() => menuItemHoverHandler(1)} onMouseLeave={menuItemLeaveHandler}>
            <button className={styles.SiteHeaderNavItem__link} aria-haspopup="true" aria-expanded="false"
                    data-js-target-list="SiteHeader.dropdownTriggers" data-testid="header-resources-nav-item">Resources
            </button>
          </li>*/}

          <li className={styles.SiteHeaderNavItem}>
            <a className={styles.SiteHeaderNavItem__link} href="/wiz/phone">Wizard</a>
          </li>
        </ul>
      </nav>

      <nav className={styles.SiteHeader__ctaNav}>
        <a className={`${styles.CtaButton} ${styles.variant__Button} ${styles.CtaButton__arrow}`}
           href="/login"
           data-js-controller="AnalyticsButton"
           data-analytics-category="Buttons"
           data-analytics-action="Clicked"
           data-analytics-label="Login"
           data-testid="header-login-cta-button"
        >
          <span className="DashboardLoginButton__label">Sign in</span>
          <svg className={styles.HoverArrow} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <g fillRule="evenodd">
              <path className={styles.HoverArrow__linePath} d="M0 5h7"></path>
              <path className={styles.HoverArrow__tipPath} d="M1 1l4 4-4 4"></path>
            </g>
          </svg>
        </a>
      </nav>
    </div>
  )
}

export default Nav