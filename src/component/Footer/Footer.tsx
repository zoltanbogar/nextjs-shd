import Image from "next/image";
import Logo from "@/resources/images/logo/shd_logo_blue-2.png";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sectionMasked}>
        <div className={styles.sectionBackgroundMask}>
          <div className={styles.sectionBackgroundMask__background}>

            <div className={styles.Guides} aria-hidden="true">
              <div className={styles.Guides__container}>
                <div className={styles.Guides__guide}></div>
                <div className={styles.Guides__guide}></div>
                <div className={styles.Guides__guide}></div>
                <div className={styles.Guides__guide}></div>
                <div className={styles.Guides__guide}></div>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.Section__container}>
          <div className={styles.Section__layoutContainer}>
            <div className={styles.Section__layout}>

              <nav className={styles.SiteFooterSection__layout}>
                <div className={styles.SiteFooterSection__column}>
                  <div className="SiteFooterSection__localeContainer">
                    <div className={styles.SiteFooterSection__logo}>
                      <a className={styles.SiteFooterSection__logoLink} href="/en-gb" data-js-controller="AnalyticsButton"
                         data-analytics-category="Navigation" data-analytics-action="Clicked"
                         data-analytics-label="SHD Logo" aria-label="Go to the SHD homepage"
                         data-testid="footer-shd-logo">
                        <Image src={Logo} alt="Logo" style={{display: "block", maxHeight: "40px", width: "auto"}}/>
                      </a>
                    </div>
                    <div className={styles.SiteFooterSection__localeControls}>
                      <div className={styles.LocaleControl__country} data-js-controller="LocaleControl">
                        <button className="LocaleControl__trigger" data-js-target="LocaleControl.trigger"
                                aria-label="Hungary. Choose your country" data-testid="footer-locale-country-button"
                                aria-expanded="false">
                          <svg className="LocaleControl__triggerIcon" width="16" height="16" viewBox="0 0 16 16">
                            <path
                              d="M3.54 8.04h4.42v4.43c0 .57.76.75 1.01.24l4.96-9.93a.54.54 0 0 0-.72-.72L3.3 7.03c-.5.25-.33 1.01.24 1.01"
                              fill="#0A2540" fillRule="evenodd"></path>
                          </svg>
                          <span data-js-target="LocaleControl.triggerLabel">Hungary</span>
                        </button>
                      </div>
                      <div className={styles.LocaleControl__country} data-js-controller="LocaleControl">
                        <button className="LocaleControl__trigger" data-js-target="LocaleControl.trigger"
                                aria-label="English. Choose your language"
                                data-testid="footer-locale-language-button" aria-expanded="false">
                          <svg className="LocaleControl__triggerIcon" width="16" height="16" viewBox="0 0 16 16">
                            <path
                              d="M7.5 2C10.91 2 13 4.01 13 6.5c0 2.07-1.45 3.82-3.92 4.34L6.62 13.3a.66.66 0 0 1-1.12-.46v-2.1C3.29 10.12 2 8.45 2 6.5 2 4.01 4.09 2 7.5 2z"
                              fill="#0A2540" fillRule="evenodd"></path>
                          </svg>
                          <span data-js-target="LocaleControl.triggerLabel">English</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <section className={styles.SiteFooterSection__copyright}>
                    <ul className={styles.List__list}>
                      <li className={styles.List__item}>
                        ©2023 BZR Szoftverfejlesztő Kft.
                      </li>
                    </ul>
                  </section>
                </div>

                <div className={styles.SiteFooterSection__column}>
                  <section className={`${styles.List} ${styles.List__hasTitle}`}>
                    <h1 className={`${styles.CopyTitle} ${styles.CopyTitle__inline}`}>Products</h1>

                    <ul className={styles.List__list}>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/category/2">
                          Sensors
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/category/3">
                          Buttons
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/category/7">
                          Blinds
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/category/8">
                          Cameras
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/category/4">
                          Energy
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/category/1">
                          Hubs
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/category/5">
                          Lighting
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/category/9">
                          Safety
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/category/6">
                          Speakers
                        </a>
                      </li>
                    </ul>

                  </section>
                </div>

                <div className={styles.SiteFooterSection__column}>
                  <section className={`${styles.List} ${styles.List__hasTitle}`}>
                    <h1 className={`${styles.CopyTitle} ${styles.CopyTitle__inline}`}>Brands</h1>

                    <ul className={styles.List__list}>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/1">
                          Aqara
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/2">
                          Eve
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/4">
                          Ikea
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/5">
                          Meross
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/3">
                          Nanoleaf
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/6">
                          SwitchBot
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/9">
                          Tuya
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/7">
                          VOCOlinc
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/10">
                          WEMO
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/brand/8">
                          Xiaomi
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>

                <div className={styles.SiteFooterSection__column}>
                  <section className={`${styles.List} ${styles.List__hasTitle}`}>
                    <h1 className={`${styles.CopyTitle} ${styles.CopyTitle__inline}`}>Ecosystems</h1>

                    <ul className={styles.List__list}>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/system/1">
                          Apple Home
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/system/2">
                          Google
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/system/3">
                          Amazon
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/system/4">
                          Home Assistant
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="/system/5">
                          Homebridge
                        </a>
                      </li>
                    </ul>
                  </section>
                  <section className={`${styles.List} ${styles.List__hasTitle}`}>
                    <h1 className={`${styles.CopyTitle} ${styles.CopyTitle__inline}`}>Social</h1>

                    <ul className={styles.List__list}>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="#">
                          Facebook
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="#">
                          Instagram
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="#">
                          YouTube
                        </a>
                      </li>
                      <li className={styles.List__item}>
                        <a className={styles.Link} href="#">
                          TikTok
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>

              </nav>
              <div className={`${styles.StripeSet} ${styles.StripeSet__TopLeft} ${styles.StripeSet__alignEnd}`} data-js-controller="StripeSet" aria-hidden="true" data-js-align="End">

                <div className={`${styles.Stripe} ${styles.Stripe__accentNone} ${styles.Stripe__widthNormal}`} aria-hidden="true" data-js-target-list="StripeSet.stripes" style={{transform: "translateY(9px)"}}></div>

                <div className={`${styles.Stripe} ${styles.Stripe__accentNone} ${styles.Stripe__insetSmall}`} aria-hidden="true" data-js-target-list="StripeSet.stripes"></div>

                <div className={`${styles.Stripe} ${styles.Stripe__accentNone} ${styles.Stripe__intersectionInsetSmall}`} aria-hidden="true" data-js-target-list="StripeSet.stripes"
                     style={{transform: "translateY(9px)"}}>
                  <div className={styles.Stripe__intersection} data-js-target="StripeSet.intersection" style={{transform: "translateY(-9.25px)"}}></div>
                </div>

              </div>
              <div className={`${styles.StripeSet} ${styles.StripeSet__TopRight} ${styles.StripeSet__alignCenter}`} data-js-controller="StripeSet" aria-hidden="true">

                <div className={`${styles.Stripe} ${styles.Stripe__accentNone} ${styles.Stripe__insetSmall}`} aria-hidden="true" data-js-target-list="StripeSet.stripes"></div>

                <div className={`${styles.Stripe} ${styles.Stripe__accentNone} ${styles.Stripe__widthNormal}`} aria-hidden="true" data-js-target-list="StripeSet.stripes" style={{transform: "translateY(-8.5px)"}}></div>

                <div className={`${styles.Stripe} ${styles.Stripe__accentNone} ${styles.Stripe__insetSmall} ${styles.Stripe__intersectionWidthNormal}`} aria-hidden="true" data-js-target-list="StripeSet.stripes">
                  <div className={styles.Stripe__intersection} data-js-target="StripeSet.intersection" style={{transform: "translateY(-8.75px)"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;