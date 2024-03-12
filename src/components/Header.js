import React from "react";
import Logo from "../assest/sheer.png";

const Header = () => {
  return (
    <div className="absolute z-10 w-36 bg-black">
      <img src={Logo} alt="SHeer" />
    </div>
  );
};

export default Header;
