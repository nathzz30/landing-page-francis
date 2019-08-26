import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ socialIcons, logo }) => {
  function nameSocialMedia(str) {
    const nIcon = str;
    return nIcon.substring(7, str.lenght);
  }
  return (
    <div className="header">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
      />

      <a
        href="https://html5up.net/uploads/demos/editorial/index.html"
        className="logo"
      >
        <span className="blackie">Editorial</span> by {logo}
      </a>
      <div className="social">
        {socialIcons.map((icon, index) => (
          <a
            href="https://html5up.net/uploads/demos/editorial/index.html"
            key={`${index + 1}A`}
            className={icon.iconClass}
            aria-label={icon.social}
          >
            {' '}
            <span className="reader">{nameSocialMedia(icon.social)}</span>
          </a>
        ))}
      </div>
      <hr className="line" />
    </div>
  );
};

Header.propTypes = {
  socialIcons: PropTypes.arrayOf(String),
  logo: PropTypes.string
};

Header.defaultProps = {
  socialIcons: [],
  logo: 'Here Name'
};

export default Header;
