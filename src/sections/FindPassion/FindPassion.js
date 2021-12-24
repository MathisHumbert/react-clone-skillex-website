import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import { findPassionData } from '../../utlis/data';

const FindPassion = () => {
  const [id, setId] = React.useState(1);

  return (
    <Wrapper className="section">
      <article className="left">
        <h1>Watch.</h1>
        <h1>Learn.</h1>
        <h1>Grow.</h1>
      </article>
      <article className="right" onMouseLeave={() => setId(1)}>
        {findPassionData.map((item) => {
          const { mobileImg, title1, title2 } = item;
          return (
            <div
              key={item.id}
              className={
                id === item.id ? 'active image-container' : 'image-container'
              }
              onMouseEnter={() => setId(item.id)}
            >
              <img src={mobileImg} alt="passion-img" />
              <footer>
                <div className="left-header">
                  <h3>{title1}</h3>
                  <h3>{title2}</h3>
                </div>
                <div className="right-header">
                  <h2>100</h2>
                  <h4>topics</h4>
                </div>
              </footer>
            </div>
          );
        })}
      </article>
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  gap: 30px;
  padding-bottom: 182px;
  padding-top: 0;
  position: relative;

  h1 {
    font-size: 76px;
    line-height: 76px;
  }

  .right {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 400px;
  }

  .image-container {
    width: 100%;
    height: 20%;
    position: relative;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    transition: height 0.4s ease-in-out;

    &.active {
      height: 60%;
    }

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
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  footer {
    position: absolute;
    width: 100%;
    color: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 50%;
    transform: translateY(50%);
    overflow: hidden;

    h3:first-child {
      transform: translate(20px, 50%);
      transition: transform 0.4s ease-in-out;
    }

    h3:last-child {
      transform: translateX(-400%);
      transition: transform 0.4s ease-in-out;
    }

    .right-header {
      transform: translateX(400%);
      transition: transform 0.4s ease-in-out;
    }
  }

  .active footer {
    bottom: 25px;
    transform: translate(0);

    .left-header {
      margin-left: 20px;
    }

    .right-header {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
      transform: translateX(0);
    }

    h3:first-child {
      transform: translate(0);
    }

    h3:last-child {
      transform: translateX(0);
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

  @media (min-width: 768px) {
    .right {
      max-height: 500px;
    }
  }
`;
export default FindPassion;
