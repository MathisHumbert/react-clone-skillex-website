import React from 'react';
import styled, { keyframes } from 'styled-components';
import { reviewsData } from '../../utlis/data';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';

const Reviews = () => {
  return (
    <Wrapper>
      <h1>What our customer say.</h1>
      <article className="slider">
        {reviewsData.map((item) => {
          const { id, img, job, name, text } = item;
          return (
            <div key={id} className="reviews-item">
              <p>{text}</p>
              <footer>
                <img src={img} alt={name} />
                <div className="reviews-info">
                  <h4>{name}</h4>
                  <h5>{job}</h5>
                </div>
              </footer>
            </div>
          );
        })}
      </article>
      <div className="btn-container">
        <button type="button">
          <ImArrowLeft2 />
        </button>
        <button type="button">
          <ImArrowRight2 />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
    padding: 0 24px;
  }

  .slider {
    display: flex;
    overflow: hidden;
  }

  .reviews-item {
    background: var(--secondary-color);
    min-width: 240px;
    max-width: 240px;
    height: 188px;
    max-height: 188px;
    font-size: 14px;
    padding: 1rem;
    border-radius: var(--radius);
    margin: 0 12px;

    &:first-child {
      margin-left: 24px;
    }
    &:last-child {
      margin-right: 24px;
    }

    footer {
      margin-top: 2rem;
      display: flex;
      gap: 12px;
    }

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    h4 {
      margin-bottom: 12px;
    }

    h5 {
      color: var(--green-color);
    }
  }

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 32px;
    gap: 24px;
  }

  button {
    width: 48px;
    height: 48px;
    line-height: 0;
    font-size: 20px;
    background: transparent;
    color: var(--primary-color);
    opacity: 0.8;
    border: 1px solid transparent;
    border-radius: 50%;

    &:active {
      animation: ${buttonActive} 0.6s linear 1;
    }
  }
`;

const buttonActive = keyframes`
from{
 border-color: transparent
}
to{
 border-color: rgba(30, 30, 47, 0.15)
}
`;
export default Reviews;
