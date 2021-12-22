import React from 'react';
import styled from 'styled-components';
import logo from '../images/617fa55008f302348b1f7703_logo.svg';
import { IoReorderTwo } from 'react-icons/io5';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="left">
        <img src={logo} alt="main-logo" />
      </div>
      <div className="right">
        <button type="button" className="toggle-btn">
          <IoReorderTwo className="toggle-icon" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-btn {
    width: 32px;
    height: 32px;
    line-height: 0;
    padding: 0;
    background: var(--primary-color);
    color: var(--secondary-color);
  }

  .toggle-icon {
    font-size: 26px;
  }
`;
export default Navbar;
