import React, {useState} from "react";

import "./header.css";

import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  
  const [menuOpened, setMenuOpened] = useState(false) /*DONT WORKING 2:11:21 */
  
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800){
      return{right: !menuOpened && "-100%"}
    }
  }
  
  return (
    <section className="header-wrapper">
      <div className="flexCenter paddings innerWidth header-container">
        {/*<img scr="./logo.png" alt="logo" width={100}/>*/}
        <h1>LOGO</h1>

        <div className="flexCenter header-menu"
        style={getMenuStyles(menuOpened)}>
        
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        
          <div className="menu-icon" onClick={()=> setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30} />
        </div>
        </div>

        
      </div>
    </section>
  );
};

export default Header;
