import React from 'react';
import styled from 'styled-components';
import { IoReorderTwo } from 'react-icons/io5';
import logo from '../../images/617fa55008f302348b1f7703_logo.svg';
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div className="left">
        <img src={logo} alt="main-logo" />
      </div>
      <div className="right">
        <button type="button" className="toggle-btn" onClick={openSidebar}>
          <IoReorderTwo className="toggle-icon" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-btn {
  }
`;
export default Navbar;
