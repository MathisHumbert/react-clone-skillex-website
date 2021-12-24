import React from 'react';
import styled from 'styled-components';
import { IoReorderTwo } from 'react-icons/io5';
import logo from '../../images/617fa55008f302348b1f7703_logo.svg';
import { useGlobalContext } from '../../context';
import { links } from '../../utlis/data';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div className="left">
        <img src={logo} alt="main-logo" />
        <ul>
          {links.map((link) => {
            const { id, text } = link;
            return (
              <li key={id}>
                <a href="#">{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <button type="button" className="toggle-btn" onClick={openSidebar}>
          <IoReorderTwo className="toggle-icon" />
        </button>
        <div className="connect-container">
          <li>
            <a href="#">Login</a>
          </li>
          <button className="connect-btn">Free Trial</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  padding: 20px 24px 60px 24px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  ul {
    display: none;
  }

  .connect-container {
    display: none;
  }

  .toggle-btn {
    display: block;
  }

  @media (min-width: 998px) {
    padding: 38px 80px;

    .left {
      display: flex;
      align-items: center;
      gap: 125px;
      width: 100%;
    }

    .connect-container {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem 2rem;
      align-items: center;
      max-width: 240px;
    }

    li {
      flex: 1;
    }

    a {
      box-shadow: inset 0 0 0 0 var(--green-color);
      transition: box-shadow 0.2s ease-in-out;

      &:hover {
        box-shadow: inset 0 -7px 0 0 #97c680;
      }
    }

    .toggle-btn {
      display: none;
    }
  }

  @media (min-width: 1220px) {
    ul {
      gap: 22px;
      max-width: none;
    }

    li {
      flex: none;
    }
  }
`;
export default Navbar;
