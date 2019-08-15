/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./Header.css";
const Header = ({ socialIcons, logo }) => {
  return (
    <div className="header">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
      />

      <p className="logo">{logo}</p>
      <div className="social">
        {socialIcons.map((icon, index) => (
          <i key={index} className={icon} />
        ))}
      </div>
      <hr className="line" />
    </div>
  );
};

export default Header;
