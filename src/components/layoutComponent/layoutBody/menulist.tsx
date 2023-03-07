import React from 'react'
import IconText from '../../iconText';
import styles from "./leftSide.module.scss"
import {LayoutBodyProps} from "./index"
import { useAdminLinks, useMenuLinks } from '../../../helpers/menu';
import { useLocation, useNavigate } from 'react-router-dom';
import settingIcon from "../../../resources/images/setting.svg";
import MenuIcon from '../../menuIcon';

const Menulist = (props: LayoutBodyProps) => {
    const { onClick, toggle, isAdmin = false } = props;
    const route = useNavigate();
    const location = useLocation()
    const menuLinks = useMenuLinks();
    const adminlinks = useAdminLinks();
    const links = isAdmin ? adminlinks : menuLinks;
    const checkActive = (pathname: string, activePath: string) => {
        const splitData = pathname.split("/");
        const splitResult = splitData.filter(
          (data) => data === activePath?.replace("/", "")
        );
        return splitResult.toString() === activePath?.replace("/", "") && true;
      };
  return (
   <>
   <div
          className={`${
            isAdmin
              ? styles.leftsidebarMenuLinksAdmin
              : styles.leftsidebarMenuLinks
          }`}
        >
          <div className={styles.menuLinks}>
            {links.map((list: any, index: any) => {
              return (
                <MenuIcon
                  sx={{ fontSize: "18px", background: "" }}
                  key={index}
                  icon={list?.icon}
                  title={list?.title}
                  // onClick={list?.onClick}
                  onClick={() => route(`${list.to}`)}
                  active={checkActive(location.pathname, list.to)}
                  // active={location.pathname === list.to ? true :false}
                />
              );
            })}
          </div>
          {/* {!isAdmin && (
            <div className={styles.settinglinks}>
              <IconText
                active={location.pathname === "/setting" ? true : false}
                sx={{ fontSize: "18px" }}
                icon={settingIcon}
                title={"Setting"}
                onClick={() => route("/setting")}
              />
            </div>
          )} */}
        </div>
   </>
  )
}

export default Menulist