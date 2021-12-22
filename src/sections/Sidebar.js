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
        <button className="connect-btn">Login</button>
        <button className="connect-btn">Free Trial</button>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 10;
  background: var(--secondary-color);
  padding: 100px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    font-size: 14px;
    padding: 24px 0;
    border-bottom: 1px solid rgba(30, 30, 47, 0.1);
  }

  .bottom {
    padding: 24px;
    border-top: 1px solid rgba(30, 30, 47, 0.1);
  }
`;
export default Sidebar;
