import React from 'react';
import styled from 'styled-components';

const Image = ({ mobileImg, desktopImg, title1, title2 }) => {
  return (
    <Wrapper>
      <img src={mobileImg} alt="passion-img" />
      <footer>
        <div className="left">
          <h3>{title1}</h3>
          <h3>{title2}</h3>
        </div>
        <div className="right">
          <h2>100</h2>
          <h4>topics</h4>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 240px;
  height: 376px;
  position: relative;
  cursor: pointer;
  border-radius: 20px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 200px;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 20%,
      rgba(0, 0, 0, 0.75) 100%
    );
    border-radius: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  footer {
    position: absolute;
    bottom: 25px;
    width: 100%;
    color: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      margin-left: 20px;
    }

    .right {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
    }
  }

  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 12px;
    text-transform: uppercase;
  }
`;
export default Image;
