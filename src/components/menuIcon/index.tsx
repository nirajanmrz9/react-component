import React, { useState } from 'react'
import styles from "./menuText.module.scss"
interface IconTextProps {
    icon?:any;
    title?:string;
    sx?:any
    onClick?:()=> void;
    active?:boolean,

}
const MenuIcon = (props:IconTextProps) => {
    const {icon,title,sx,onClick,active= false}= props
  return (
    <div className={`${styles.iconTitleWrapper} ${
      active ? `${styles.iconTitleActive}` : ""
    }`} onClick={onClick}>
        <img className={styles.iconImage} src={icon} alt={title} />
        {title && <h3 className={styles.iconTitle} style={{...sx}}>{title}</h3>}
    </div>
  )
}

export default MenuIcon