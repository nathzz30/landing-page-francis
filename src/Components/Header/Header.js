/** @jsx jsx */
import { css } from '@emotion/core';
import { global } from '../../global';

export const header = css`
  display: inline-block;
  text-align: left;
  width: 90%;
  margin-top: 30px;

  @media screen and (max-width: 490px) {
    display: flex;
    flex-direction: column-reverse;
    text-align: left;
    width: 90%;
    margin: auto;
    margin-top: 10px;
  }
`;

export const logo = css`
  font-size: 9px;
  display: inline-block;
  color: ${global.colorOsloGray};
  letter-spacing: 0.1px;
  line-height: 8px;
  font-family: ${global.fonts};
  font-weight: 500;
  width: 50%;
  text-decoration: none;
  transition: 0.3s;
  margin-bottom: 15px;

  span {
    color: black;
    transition: 0.4s;

    :hover {
      color: ${global.colorCarnation};
    }
  }

  :hover {
    color: ${global.colorCarnation};
  }

  @media screen and (max-width: 490px) {
    margin-bottom: 15px;
    font-size: 11px;
  }
`;

export const line = css`
  margin-top: 7px;
  background-color: ${global.colorCarnation};
  border-color: ${global.colorCarnation};
  width: 90%;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  margin: auto;
  margin-bottom: 8px;
  content: '';
  border-style: solid;
  border-width: 1.6px;
`;

export const social = css`
  position: relative;
  display: inline-block;
  width: 50%;
  text-align: right;
  text-decoration: none;

  a {
    margin: 0;
    margin-left: 10px;
    color: ${global.colorOsloGray};
    text-align: right;
    font-size: 11px;
    text-decoration: none;
    transition: 0.3s;

    :hover {
      color: ${global.colorCarnation};
    }
  }

  @media screen and (max-width: 490px) {
    width: 100%;
    text-align: right;
    margin-bottom: 20px;
  }
`;

export const reader = css`
  display: none;
`;
