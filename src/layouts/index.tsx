import React, { useState } from 'react'
import { MenuI, Navbar } from '../components/layoutComponent/navbar'
import home from "../resources/images/home.svg";
import history from "../resources/images/history.svg";
import sound from "../resources/images/ic-sound-on.svg";
import baseline from "../resources/images/ic-baseline-portable-wifi-on.svg";
import LeftSidebar from '../components/layoutComponent/leftSideLayout';
interface HomeLayoutViewProps {
  children?: React.ReactNode;
  isAdmin?:boolean,

}
const Layouts = (props: HomeLayoutViewProps) => {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
      console.log("in")
      setToggle((toggle) => !toggle);
    };
  const homeHandle = () => {
    console.log("click");
  };
  const menus : MenuI[] = [
    { icon: baseline },
    {
      title: "Home",
      icon: home,
      onClick: homeHandle,
    },
    {
      title: "History",
      icon: history,
    },
    {
      title: "On",
      icon: sound,
    },
  ];
  const { children ,isAdmin=false} = props;

  return (
    <>
    <Navbar menus={menus} />
    
    <LeftSidebar isAdmin={isAdmin} onClick={toggleMenu} toggle={toggle}/>
    </>
  )
}

export default Layouts