import React from "react";
import { FaRegSmile } from "react-icons/fa";
import { VscBellDot } from "react-icons/vsc";
const Header = () => {
  return (
    <div className="header">
      <div className="header-container1">
        <h3>Hii, Jullia</h3>
        <FaRegSmile style={{ marginLeft: "1.2rem" }} />
      </div>
      <VscBellDot />
    </div>
  );
};

export default Header;
