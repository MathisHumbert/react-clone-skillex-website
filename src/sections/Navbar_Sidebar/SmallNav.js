import React from 'react';
import styled from 'styled-components';
import { IoReorderTwo } from 'react-icons/io5';
import logo from '../../images/617fa55008f302348b1f7703_logo.svg';
import { useGlobalContext } from '../../context';

const SmallNav = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <Wrapper data-scroll-section>
      <div className="nav-container" data-scroll>
        <img src={logo} alt="main-logo" />
        <button type="button" className="toggle-btn" onClick={openSidebar}>
          <IoReorderTwo className="toggle-icon" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .nav-container {
    padding: 20px 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    transform: translateY(-100px);
  }

  .nav-container.is-reveal {
    transform: translateY(0);
    transition: all 0.4s linear;
    transition-delay: 0.4s;
  }

  img {
    cursor: pointer;
  }
`;
export default SmallNav;
