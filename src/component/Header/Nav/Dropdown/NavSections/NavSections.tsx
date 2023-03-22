import styles from "@/component/Header/Nav/Dropdown/Dropdown.module.css";
import NavItems from "@/component/Header/Nav/Dropdown/NavItems/NavItems";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faSquareFull,
  faStar,
  faShield,
  IconDefinition,
  faLightbulb,
  faTabletButton, faCamera, faBoltLightning
} from "@fortawesome/free-solid-svg-icons";
import { MdBlinds, MdSensors, MdHub } from "react-icons/md";
import { BsApple, BsGoogle, BsAlexa, BsWifi } from "react-icons/bs";
import { SiHomeassistant, SiHomebridge, SiZigbee, SiBluetooth, SiZwave, SiIkea, SiWemo, SiXiaomi } from "react-icons/si";

interface ListItem {
  serial: number,
  url: string,
  title: string,
  label: string,
  body: string,
}

interface NavSection {
  subNavItemHovered: number,
  hoverBackgroundOffset: number,
  setSubNavItemBackground: (serial: number) => void,
  serial: number,
  listItems: Array<ListItem>;
}

const NavSections = ({serial, subNavItemHovered, hoverBackgroundOffset, setSubNavItemBackground, listItems}: NavSection) => {

  const getMenuIcon = (label: string) => {
    let icon: IconDefinition|JSX.Element;
    let isFA: boolean;
    switch (label) {
      case 'Safety':
        icon = faShield;
        isFA = true;
        break;
      case 'Music':
        icon = faMusic;
        isFA = true;
        break;
      case 'Lighting':
        icon = faLightbulb;
        isFA = true;
        break;
      case 'Button':
        icon = faTabletButton;
        isFA = true;
        break;
      case 'Camera':
        icon = faCamera;
        isFA = true;
        break;
      case 'Energy':
        icon = faBoltLightning;
        isFA = true;
        break;
      case 'Blinds':
        icon = <MdBlinds className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Sensor':
        icon = <MdSensors className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Hub':
        icon = <MdHub className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Apple Home':
        icon = <BsApple className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Google':
        icon = <BsGoogle className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Amazon Alexa':
        icon = <BsAlexa className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Home Assistant':
        icon = <SiHomeassistant className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Homebridge':
        icon = <SiHomebridge className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'IKEA':
        icon = <SiIkea className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Xiaomi':
        icon = <SiXiaomi className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'WEMO':
        icon = <SiWemo className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Zigbee':
        icon = <SiZigbee className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Z-Wave':
        icon = <SiZwave className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'BLE':
        icon = <SiBluetooth className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;
      case 'Wi-Fi':
        icon = <BsWifi className={styles.svgReactIcons} size="5x" style={{ fill: "url(#blue-gradient)"}} />;
        isFA = false;
        break;

      default:
        icon = faStar;
        isFA = true;
    }

    if (isFA) {
      // @ts-ignore
      return <FontAwesomeIcon className={styles.featureIcon} icon={icon} size="5x" mask={faSquareFull} />;
    }

    return icon;
  }

  return (
    <div className={styles.SiteMenu__section} style={(subNavItemHovered === serial ? {"--sectionOpacity": "1", "--sectionDisplay":"inline-block"} as React.CSSProperties : {})}>
      <section className={styles.SiteMenuSection}>
        <div className={styles.SiteMenuSection__body}>
          <div className={styles.SiteSubMenu}>
            <div className={styles.SiteSubMenu__nav}>
                    <span className={styles.SiteSubMenu__navHoverBackground} style={{"--siteSubMenuTriggerOffsetY": `${hoverBackgroundOffset}px`} as React.CSSProperties}>
                      <svg className={styles.SiteSubMenu__navHoverArrow} width="12" height="28" viewBox="0 0 12 28" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
        <path d="M7.29289 13.2929 0 6v16l7.29289-7.2929c.39053-.3905.39053-1.0237 0-1.4142Z" fill="#fff"></path>
        <path fillRule="evenodd" clipRule="evenodd"
              d="m0 27.657 9.41421-9.4142c2.34319-2.3432 2.34319-6.1422.00001-8.48532L0 .343262V6.00012l6.58579 6.58578c.78105.7811.78105 2.0474 0 2.8284L0 22.0001v5.6569Z"
              fill="var(--siteSubMenuBackgroundColor, #f0f3f6)"></path>
      </svg>
                    </span>
              <NavItems setSubNavItemBackground={setSubNavItemBackground}/>
            </div>

            <div className={styles.SiteSubMenu__sectionList}>
              <div className={styles.SiteSubMenuSection}>
                <section className={`${styles.SiteNavList} ${styles.SiteNavList__iconSizeLarge}`}>
                  <ul className={styles.SiteNavList__list}>
                    {listItems.map(item => {
                      return (
                        <li className={styles.SiteNavItem} key={item.serial}>
                          <a href={item.url} className={styles.SiteNavItem__link}>
                              <span className={styles.SiteNavItem__iconContainer}>
                                {getMenuIcon(item.label)}
                              </span>
                            <span className={styles.SiteNavItem__labelContainer}>
                                <span className={styles.SiteNavItem__label}>
                                  {item.label}&nbsp;
                                  <svg className={`
                                    ${styles.HoverArrow}
                                    ${styles.HoverArrow__sizeSmall}
                                    ${styles.SiteNavItem__arrow}
                                  `} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                    <g fillRule="evenodd">
                                        <path className={styles.HoverArrow__linePath} d="M0 5h6.5"></path>
                                        <path className={styles.HoverArrow__tipPath} d="M1 1.5l3.25 3.5-3.25 3.5"></path>
                                    </g>
                                  </svg>
                                </span>
                                <p className={styles.SiteNavItem__body}>{item.body}</p>
                              </span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NavSections;