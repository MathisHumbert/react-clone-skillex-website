import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { reviewsData } from '../../utlis/data';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';

const Reviews = () => {
  const slider = useRef(null);
  const review = useRef(null);
  const [sliderValue, setSliderValue] = useState(0);

  const toggleClick = (e, type) => {
    const target = e.currentTarget;
    target.classList.add('clicked');
    const value = review.current.offsetWidth + 24;
    const maxValue = -(
      reviewsData.length * value -
      slider.current.getBoundingClientRect().width +
      24
    );

    if (type === 'inc') {
      if (sliderValue - 240 <= maxValue) {
        slider.current.style.transform = `translateX(${maxValue}px)`;
        setSliderValue((oldValue) => maxValue);
      } else {
        slider.current.style.transform = `translateX(${sliderValue - value}px)`;
        setSliderValue((oldValue) => oldValue - value);
      }
    } else {
      if (sliderValue + 240 >= 0) {
        slider.current.style.transform = `translateX(${0}px)`;
        setSliderValue((oldValue) => 0);
      } else {
        slider.current.style.transform = `translateX(${sliderValue + value}px)`;
        setSliderValue((oldValue) => oldValue + value);
      }
    }

    setTimeout(() => {
      target.classList.remove('clicked');
    }, 600);
  };

  return (
    <Wrapper data-scroll-section data-scroll id="customer">
      <h1 className="animation-block">What our customer say.</h1>
      <article className="animation-block slider" ref={slider}>
        {reviewsData.map((item) => {
          const { id, img, job, name, text } = item;
          return (
            <div key={id} className="reviews-item" ref={review}>
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
      <div className="animation-block btn-container">
        <button type="button" onClick={(e) => toggleClick(e, 'dec')}>
          <ImArrowLeft2 />
        </button>
        <button type="button" onClick={(e) => toggleClick(e, 'inc')}>
          <ImArrowRight2 />
        </button>
      </div>
    </Wrapper>
  );
};

const buttonActive = keyframes`
0%{
 border: 1px solid transparent;
};
25%{
 border: 1px solid rgba(30, 30, 47, 0.15);
};
50%{
 border: 1px solid rgba(30, 30, 47, 0.15);
};
75%{
 border: 1px solid rgba(30, 30, 47, 0.15);
};
100%{
border: 1px solid transparent;
};
`;

const Wrapper = styled.section`
  padding: 36px 0;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;

  .animation-block {
    opacity: 0;
    transform: translateY(100px);
  }

  &.is-reveal {
    .animation-block {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.8s var(--transition);
      transition-delay: 0.3s;
    }
  }

  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
    padding: 0 24px;
  }

  .slider {
    display: flex;
    transform: translateX(0);
    transition: transform 0.2s linear;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:first-child {
      margin-left: 24px;
    }
    &:last-child {
      margin-right: 24px;
    }

    footer {
      display: flex;
      align-items: center;
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
    transition: border 0.2s ease-in-out;

    &.clicked {
      animation: ${buttonActive} 0.6s ease-in-out 1;
    }
  }

  @media (min-width: 768px) {
    padding: 64px 0;
    .reviews-item {
      height: 290px;
      max-height: 290px;
      padding: 24px;
    }
  }
`;

export default Reviews;
