import React from 'react';
import styled from 'styled-components';
import { links } from '../../utlis/data';
import { useGlobalContext } from '../../context';
import { IoClose } from 'react-icons/io5';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <Wrapper className={isSidebarOpen ? 'active' : null}>
      <button type="button" className="toggle-btn" onClick={closeSidebar}>
        <IoClose className="toggle-icon" />
      </button>
      <ul className="top">
        {links.map((item) => {
          return (
            <li key={item.id} onClick={closeSidebar}>
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
      <footer className="bottom">
        <button className="connect-btn white" onClick={closeSidebar}>
          Login
        </button>
        <button className="connect-btn" onClick={closeSidebar}>
          Free Trial
        </button>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  width: 100vw;
  height: 0;
  top: 0;
  z-index: 10;
  background: var(--secondary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  transition: height 0.4s ease-in-out, padding 0.4s ease-in-out;
  padding: 0 24px;

  &.active {
    height: 100vh;
    padding: 100px 24px 24px 24px;

    p {
      display: block;
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    position: absolute;
    top: 24px;
    right: 24px;
  }

  li {
    font-size: 14px;
    padding: 24px 0;
    border-bottom: 1px solid rgba(30, 30, 47, 0.1);
    transition: border-color 0.4s ease-in-out;

    &:hover {
      border-color: rgba(30, 30, 47, 0.4);
    }
  }

  p {
    transform: translateX(-100%);
    transition: transform 0.4s ease-in-out;
  }

  ul li:nth-child(2) p {
    transition-delay: 0.2s;
  }
  ul li:nth-child(3) p {
    transition-delay: 0.4s;
  }
  ul li:nth-child(4) p {
    transition-delay: 0.6s;
  }

  .bottom {
    padding-top: 24px;
    border-top: 1px solid rgba(30, 30, 47, 0.1);
  }

  .white {
    box-shadow: unset;
    background: transparent;
    border: 1px solid rgba(30, 30, 47, 0.1);
    color: var(--primary-color);
    margin-right: 1rem;
  }

  @media (min-width: 998px) {
    display: none;
  }
`;
export default Sidebar;
