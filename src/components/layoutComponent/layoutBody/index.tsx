import React from 'react'
import styles from "./leftSide.module.scss"
import Menulist from './menulist';
import { SearchBar } from './searchBar'
export interface LayoutBodyProps {
    onClick?: () => void;
    toggle?: boolean;
    isAdmin?: boolean;
    children?:React.ReactNode
  }
const LayoutBody = (props: LayoutBodyProps) => {
  const { onClick, toggle, isAdmin = false ,children} = props;

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
    <div className={`${styles.layoutRightSideBody} ${
          isAdmin ? styles.layoutRightSideBodyCollapseAdmin :
          toggle ?styles.layoutRightSideBodyCollapse : styles.layoutRightSideBodyNoneCollapse}`}>
        {children}

        </div>
    </div>

  )
}

export default LayoutBody