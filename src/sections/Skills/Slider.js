import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Slider = () => {
  const first = useRef(null);
  const second = useRef(null);
  let trigger = true;

  const slider = () => {
    if (window.innerWidth >= 998) return;
    const firstY = first.current.getBoundingClientRect().y;
    const secondY = second.current.getBoundingClientRect().y;

    if (firstY > secondY) {
      second.current.style.opacity = 1;
      first.current.style.transform = 'translateY(100%)';
      second.current.style.transform = 'translateY(0%)';

      setTimeout(() => {
        first.current.style.opacity = 0;
        first.current.style.transform = 'translateY(-100%)';
        trigger = !trigger;
      }, 1000);
    } else {
      first.current.style.opacity = 1;
      first.current.style.transform = 'translateY(0%)';
      second.current.style.transform = 'translateY(100%)';

      setTimeout(() => {
        second.current.style.opacity = 0;
        second.current.style.transform = 'translateY(-100%)';
        trigger = !trigger;
      }, 1000);
    }
  };

  useEffect(() => {
    let sliderTimeout = setInterval(() => {
      slider();
    }, 3000);
    return () => clearInterval(sliderTimeout);
    // eslint-disable-next-line
  }, [trigger]);

  return (
    <Wrapper className='content'>
      <div className='container'>
        <div className='first' ref={first}>
          <h2>10</h2>
          <p>
            years <br /> experiences
          </p>
        </div>
        <div className='second' ref={second}>
          <h2>250</h2>
          <p>
            types of <br /> course
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    height: 70px;
    width: 162px;
    background: var(--green-color);
    position: relative;
    overflow: hidden;
  }

  .first,
  .second {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: transform 0.2s linear;

    h2 {
      font-size: 28px;
    }
    p {
      font-size: 12px;
      text-transform: uppercase;
      line-height: 12px;
    }
  }

  .second {
    transform: translateY(-100%);
    opacity: 0;
  }

  @media (min-width: 998px) {
    display: none;
  }
`;

export default Slider;
