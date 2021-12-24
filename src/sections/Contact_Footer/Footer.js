import React from 'react';
import styled from 'styled-components';
import { icons } from '../../utlis/data';
import logo from '../../images/619f7e9a1cc6db8ecfc33794_logo-copyright.svg';

const Footer = () => {
  return (
    <Wrapper>
      <ul>
        {icons.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="copy">
        <img src={logo} alt="company-logo" />
        <p>{new Date().getFullYear()} Hallo Lab. All rights reserved</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border-top: 1px solid rgba(30, 30, 47, 0.1);
  padding-top: 24px;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    li {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      border-radius: 50%;
      border: 1px solid rgba(30, 30, 47, 0.1);
      transition: background 0.3s ease-in-out;

      &:hover {
        background: var(--primary-color);

        a {
          color: var(--secondary-color);
        }
      }

      a {
        color: var(--primary-color);
        font-size: 20px;
        transition: color 0.2s ease-in-out;
      }
    }
  }

  .copy {
    width: 100%;
    padding-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    img {
      width: 30px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    .copy {
      padding-top: 0;
    }
  }
`;
export default Footer;
