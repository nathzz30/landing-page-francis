/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import * as styles from './Header';

const Header = ({ socialIcons, logo }) => {
  return (
    <div css={styles.header}>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
      />

      <a
        href="https://html5up.net/uploads/demos/editorial/index.html"
        css={styles.logo}
      >
        <span>Editorial</span> by {logo}
      </a>
      <div css={styles.social}>
        {socialIcons.map((icon, index) => (
          <a
            href="https://html5up.net/uploads/demos/editorial/index.html"
            key={`${index + 1}A`}
            className={icon.iconClass}
            aria-label={icon.social}
          >
            {' '}
            <span css={styles.reader}>{icon.social}</span>
          </a>
        ))}
      </div>
      <hr css={styles.line} />
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
