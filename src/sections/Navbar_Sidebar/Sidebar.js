import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Wrapper>
      <ul className="top">
        <li>Find passion</li>
        <li>Categories</li>
        <li>Skilss</li>
        <li>Customer</li>
      </ul>
      <footer className="bottom">
        <button className="connect-btn white">Login</button>
        <span className="hover-btn">
          <button className="connect-btn">Free Trial</button>
        </span>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  width: 0;
  height: 100vh;
  top: 0;
  z-index: 10;
  background: var(--secondary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  &.active {
    width: 100%;
    padding: 100px 24px 24px 24px;
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

  .bottom {
    padding: 24px;
    border-top: 1px solid rgba(30, 30, 47, 0.1);
  }

  .white {
    box-shadow: unset;
    background: transparent;
    border: 1px solid rgba(30, 30, 47, 0.1);
    color: var(--primary-color);
    margin-right: 1rem;
  }
`;
export default Sidebar;
