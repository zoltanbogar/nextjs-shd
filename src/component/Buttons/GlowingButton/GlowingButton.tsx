import React from "react";

import styles from "./GlowingButton.module.css";
import {useEffectOnce} from "@/hooks/useEffectOnce";

interface GlowingButton {
  label: string;
}

const GlowingButton = ({label}: GlowingButton) => {

  const setGlowEffectRx = () => {
    const glowEffects = document.querySelectorAll(`.${styles.GlowEffect}`);

    glowEffects.forEach((glowEffect) => {
      const glowLines = glowEffect.querySelectorAll("rect");
      const rx = getComputedStyle(glowEffect).borderRadius;

      glowLines.forEach((line) => {
        line.setAttribute("rx", rx);
      });
    });
  };

  useEffectOnce(() => {
    setGlowEffectRx();
  })


  return (
    <button className={`${styles.CtaButton} ${styles.GlowEffect}`}>
      {label}
      <svg className={styles.GlowContainer}>
        <rect pathLength="100" strokeLinecap="round" className={styles.GlowBlur}></rect>
        <rect pathLength="100" strokeLinecap="round" className={styles.GlowLine}></rect>
      </svg>
    </button>
  );
}

export default GlowingButton;