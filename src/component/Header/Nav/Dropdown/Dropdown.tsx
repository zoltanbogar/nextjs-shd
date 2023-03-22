import styles from './Dropdown.module.css';
import {SetStateAction, useState} from "react";

import NavItems from "@/component/Header/Nav/Dropdown/NavItems/NavItems";
import NavSections from "@/component/Header/Nav/Dropdown/NavSections/NavSections";

// @ts-ignore
const Dropdown = ({menuRef, set, getPointerEventsValue}) => {
  const [hoverBackgroundOffset, setHoverBackgroundOffset] = useState(0)
  const [subNavItemHovered, setSubNavItemHovered] = useState(0)

  const setSubNavItemBackground = (serial: number) => {
    setSubNavItemHovered(serial)
    setHoverBackgroundOffset(serial * 96)
  }

  const sectionContent = [
    {
      subNavItemHovered: subNavItemHovered,
      hoverBackgroundOffset: hoverBackgroundOffset,
      setSubNavItemBackground: setSubNavItemBackground,
      serial: 0,
      listItems: [
        {
          url: '/category/5',
          title: 'Logo',
          label: 'Lighting',
          body: 'Placeholder',
          serial: 0,
        },
        {
          url: '/category/4',
          title: 'Logo',
          label: 'Energy',
          body: 'Placeholder',
          serial: 1,
        },
        {
          url: '/category/7',
          title: 'Logo',
          label: 'Blinds',
          body: 'Placeholder',
          serial: 2,
        },
        {
          url: '/category/8',
          title: 'Logo',
          label: 'Camera',
          body: 'Placeholder',
          serial: 3,
        },
        {
          url: '/category/3',
          title: 'Logo',
          label: 'Button',
          body: 'Placeholder',
          serial: 4,
        },
        {
          url: '/category/2',
          title: 'Logo',
          label: 'Sensor',
          body: 'Placeholder',
          serial: 5,
        },
        {
          url: '/category/9',
          title: 'Logo',
          label: 'Safety',
          body: 'Placeholder',
          serial: 6,
        },
        {
          url: '/category/6',
          title: 'Logo',
          label: 'Music',
          body: 'Placeholder',
          serial: 7,
        },{
          url: '/category/1',
          title: 'Logo',
          label: 'Hub',
          body: 'Placeholder',
          serial: 8,
        }
      ]
    },
    {
      subNavItemHovered: subNavItemHovered,
      hoverBackgroundOffset: hoverBackgroundOffset,
      setSubNavItemBackground: setSubNavItemBackground,
      serial: 1,
      listItems: [
        {
          url: '/brand/1',
          title: 'Logo',
          label: 'Aqara',
          body: 'aqara.com',
          serial: 0,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Eve',
          body: 'Placeholder',
          serial: 1,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'IKEA',
          body: 'Placeholder',
          serial: 2,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Meross',
          body: 'Placeholder',
          serial: 3,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Nanoleaf',
          body: 'Placeholder',
          serial: 4,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'SwitchBot',
          body: 'Placeholder',
          serial: 5,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Tuya',
          body: 'Placeholder',
          serial: 6,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'VOCOlinc',
          body: 'Placeholder',
          serial: 7,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'WEMO',
          body: 'Placeholder',
          serial: 8,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Xiaomi',
          body: 'Placeholder',
          serial: 9,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'flic',
          body: 'Placeholder',
          serial: 10,
        },
      ]
    },
    {
      subNavItemHovered: subNavItemHovered,
      hoverBackgroundOffset: hoverBackgroundOffset,
      setSubNavItemBackground: setSubNavItemBackground,
      serial: 2,
      listItems: [
        {
          url: '/system/1',
          title: 'Logo',
          label: 'Apple Home',
          body: 'Placeholder',
          serial: 0,
        },
        {
          url: '/system/2',
          title: 'Logo',
          label: 'Google',
          body: 'Placeholder',
          serial: 1,
        },
        {
          url: '/system/3',
          title: 'Logo',
          label: 'Amazon Alexa',
          body: 'Placeholder',
          serial: 2,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Home Assistant',
          body: 'Placeholder',
          serial: 3,
        },
        {
          url: '/system/5',
          title: 'Logo',
          label: 'Homebridge',
          body: 'Placeholder',
          serial: 4,
        },
      ]
    },
    {
      subNavItemHovered: subNavItemHovered,
      hoverBackgroundOffset: hoverBackgroundOffset,
      setSubNavItemBackground: setSubNavItemBackground,
      serial: 3,
      listItems: [
        {
          url: '#',
          title: 'Logo',
          label: 'Matter',
          body: 'Placeholder',
          serial: 0,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Thread',
          body: 'Placeholder',
          serial: 1,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Wi-Fi',
          body: 'Placeholder',
          serial: 2,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Zigbee',
          body: 'Placeholder',
          serial: 3,
        },
        {
          url: '#',
          title: 'Logo',
          label: 'Z-Wave',
          body: 'Placeholder',
          serial: 4,
        },
        {
          url: 'tech/ble',
          title: 'Logo',
          label: 'BLE',
          body: 'Placeholder',
          serial: 5,
        },
      ]
    }
  ];

  return (
    <div className={styles.SiteHeader__menuContainer} ref={menuRef} onMouseEnter={() => set(true)} onMouseLeave={() => set(false)} style={{opacity: 0}}>
      <div className={styles.SiteHeaderArrow} data-js-target="SiteHeader.arrow" aria-hidden="true"></div>
      <div className={`${styles.SiteMenu} ${styles.SiteHeader__menu}`} data-item-type={"menu"} data-item-open={false} style={{pointerEvents: getPointerEventsValue}}>
        <div className={`${styles.Card} ${styles.SiteMenu__card}`}>
          {sectionContent.map(content => {
            return <NavSections
              serial={content.serial}
              hoverBackgroundOffset={content.hoverBackgroundOffset}
              setSubNavItemBackground={content.setSubNavItemBackground}
              subNavItemHovered={content.subNavItemHovered}
              key={content.serial}
              // @ts-ignore
              listItems={content.listItems}
            />;
          })}
          </div>
      </div>
    </div>
  );
}

export default Dropdown;