import Nav from './Nav/Nav'
import styles from './Header.module.css'
import {useEffect, useRef, useState} from "react";

import Dropdown from "@/component/Header/Nav/Dropdown/Dropdown";

const Header = ({inverse=false}) => {
  const menuContainerRef = useRef(null);
  const [menuItemActive, setMenuItemActive] = useState(0);

  const [containerOpen, setContainerOpen] = useState(true);

  const [navHoverState, setNavHoverState] = useState(false);
  const [menuContainerHoverState, setMenuContainerHoverState] = useState(false)
  const [menuContainerPointerEvents, setMenuContainerPointerEvents] = useState('none')

  const containerOpenHandler = (state: boolean | ((prevState: boolean) => boolean)) => {
    // @ts-ignore
    if (menuContainerRef.current.style.opacity == 0) return;

    setMenuContainerHoverState(state)
  }

  useEffect(() => {
    if (!navHoverState && !menuContainerHoverState) {
      // @ts-ignore
      menuContainerRef.current.style.opacity = 0;
      setMenuContainerPointerEvents('none')
    } else {
      setMenuContainerPointerEvents('all')
    }
  }, [navHoverState, menuContainerHoverState])

  return (
    <header className={`${styles.SiteHeader} ${styles.theme__Transparent} ${styles.variant__Overlay} ${styles.SiteHeader__hasGuides}`}>
      <div className={styles.SiteHeader__container}>
        <Nav menuRef={menuContainerRef} set={setMenuItemActive} isOpen={containerOpen} setNavHover={setNavHoverState} isInverse={inverse} />
      </div>
      {/*<div className="SiteHeader__tabletOverlay" data-js-target="SiteHeader.tabletOverlay"></div>*/}
      <Dropdown menuRef={menuContainerRef} set={containerOpenHandler} getPointerEventsValue={menuContainerPointerEvents} />
      <svg width="1em" height="1em" style={{position: "absolute"}}>
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%" gradientTransform="rotate(45)" >
          <stop stopColor="#0049e6" offset="1%" />
          <stop stopColor="#7c75ff" offset="1%" />
          <stop stopColor="#80eaff" offset="91%" />
        </linearGradient>
      </svg>
    </header>
  )
}

export default Header