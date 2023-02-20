import React from 'react'
import styles from "./leftSide.module.scss"
import Menulist from './menulist';
import { SearchBar } from './searchBar'
export interface LeftSideBarProps {
    onClick?: () => void;
    toggle?: boolean;
    isAdmin?: boolean;
  }
const LeftSidebar = (props: LeftSideBarProps) => {
  const { onClick, toggle, isAdmin = false } = props;

  return (
    <div className={styles.layoutBody}>
    <div
    className={`${styles.leftSideBarWrapper} ${
      isAdmin
        ? styles.leftsidebarSmallWidth
        : toggle
        ? styles.leftsidebarSmallWidth
        : styles.leftsidebarFullWidth
    }`}
  >
        <SearchBar isAdmin={isAdmin} toggle={toggle}  onClick={onClick}/>
        <Menulist/>
    </div>
    </div>

  )
}

export default LeftSidebar