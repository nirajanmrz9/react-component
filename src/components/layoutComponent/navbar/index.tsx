import React, { ReactElement } from "react";
import style from "./navbar.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import IconText from "../../iconText";

export interface MenuI {
  icon?: string;
  title?: string;
  onClick?: () => void;
}

interface NavbarProps {
  menus: MenuI[];
  title?: string;
  subTitle?: string;
  isAdmin?: boolean;
  logo?: string;
}
export const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate();

  const { menus, isAdmin = false, logo } = props;
  return (
    <>
        <div className={`grid grid-cols-3 items-center p-3 ${style.navbarWrapper}`}>
      <div className={style.logo}>
        {isAdmin && (
          <FaArrowLeft
            onClick={() => navigate("/alert")}
            className="ml-2 mr-6"
          />
        )}

        <img src={logo} alt="logo" />
      </div>
      <div className={style.headContainer}>
        <h1 className={style.headingTitle}>{"OutCode"}</h1>
        <p className={style.subTitle}>{"React Js"}</p>
      </div>
      <div className={style.MenuContainer}>
          {menus.map((list:any, index:any) => {
            return (
              <IconText
                sx={{ fontSize: "14px" }}
                key={index}
                icon={list?.icon}
                title={list?.title}
                onClick={list?.onClick}
              />
            );
          })}

        </div>
    </div>
      <div className={style.borderLine}></div>
    </>


  );
};
