import React from 'react';
import styled from 'styled-components';

const Block = () => {
  return (
    <Wrapper>
      <div className='first'>
        <h2>10</h2>
        <p>
          years <br /> experiences
        </p>
      </div>
      <div className='bar'></div>
      <div className='second'>
        <h2>250</h2>
        <p>
          types of <br /> course
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 124px;
  display: none;
  align-items: center;
  justify-content: center;
  background: var(--green-color);
  width: 544px;
  gap: 52px;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  right: calc(4vw - 24px);

  .first,
  .second {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .bar {
    width: 1px;
    height: 40px;
    background: var(--primary-color);
  }

  h2 {
    font-size: 52px;
  }

  p {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media (min-width: 998px) {
    display: flex;
  }
`;

export default Block;
