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
  padding-top: 118px;
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
      transform: translateX(20px);
      transition: transform 0.1s ease-in-out;
    }

    h3:last-child {
      position: absolute;
      transform: translateX(-400%);
      transition: transform 0.4s ease-in-out;
    }

    .right-header {
      position: absolute;
      right: 0;
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
      position: unset;
      transform: translateX(0);
    }

    h3:first-child {
      transform: translateX(0);
    }

    h3:last-child {
      position: unset;
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

  @media (min-width: 998px) {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    height: 715px;
    gap: 0;
    padding-bottom: 64px;
    padding-top: 125px;

    .left {
      padding-top: 56px;
      width: 450px;
      height: 590px;
    }

    .right {
      width: calc(100vw - 580px);
      max-width: 880px;
      max-height: none;
      height: 590px;
      margin-left: -60px;
      flex-direction: row;
      gap: 20px;
    }

    .image-container {
      width: 100%;
      height: 100%;
      flex: 1;
      transition: flex 0.4s ease-in-out;
      overflow: hidden;

      &.active {
        height: 100%;
        flex: 4;
      }
    }

    footer {
      bottom: 56px;
      transform: translateY(-56px);
      overflow: unset;

      .left-header {
        width: 100%;
      }

      h3:first-child {
        transform: rotate(270deg);
      }
    }

    .active footer {
      transform: translateY(-56px);
    }

    .image-container:first-child {
      &.active {
        h3:first-child {
          opacity: 1;
        }
      }
      h3:first-child {
        opacity: 0;
      }
      .left-header {
        margin-left: 60px;
      }
    }
  }

  @media (min-width: 1220px) {
    h3 {
      font-size: 34px;
    }

    .image-container:first-child {
      .left-header {
        margin-left: 80px;
      }
    }

    footer {
      transform: translateY(-46px);
    }

    .active footer {
      transform: translateY(-46px);
    }
  }
`;
export default FindPassion;
