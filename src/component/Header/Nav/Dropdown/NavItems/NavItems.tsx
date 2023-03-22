import styles from "@/component/Header/Nav/Dropdown/Dropdown.module.css";

import SubNavItems from "@/component/Header/Nav/Dropdown/NavItems/SubNavItems/SubNavItems";

const NavItems = ({setSubNavItemBackground}) => {
  const subNavItemsContent = [
    {serial: 0, label: 'Product Categories', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', setBackground: setSubNavItemBackground},
    {serial: 1, label: 'Brands', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', setBackground: setSubNavItemBackground},
    {serial: 2, label: 'Ecosystems', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', setBackground: setSubNavItemBackground},
    {serial: 3, label: 'Technologies', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', setBackground: setSubNavItemBackground}
  ]

  return (
    <div className="SiteSubMenu__navItems">
      {subNavItemsContent.map(item => {
        return <SubNavItems key={item.serial} label={item.label} body={item.body} setBackground={setSubNavItemBackground} serial={item.serial} />
      })}
    </div>
  )
}

export default NavItems;