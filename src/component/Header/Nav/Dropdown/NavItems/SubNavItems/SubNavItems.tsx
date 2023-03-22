import styles from "@/component/Header/Nav/Dropdown/Dropdown.module.css";

interface SubNavItem {
  serial: number,
  label: string,
  body: string,
  setBackground: (key: number) => void;
}

const SubNavItems = ({serial, label, body, setBackground}: SubNavItem) => {
  return (
    <button className={styles.SiteSubNavItem} onMouseEnter={() => setBackground(serial)} key={serial}>
      <strong className={styles.SiteSubNavItem__label}>{label}</strong>
      <p className={styles.SiteSubNavItem__body}>{body}</p>
    </button>
  );
}

export default SubNavItems;