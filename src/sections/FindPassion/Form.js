import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <Wrapper className="contact">
      <input
        type="text"
        placeholder="Find your passion"
        className="contact-input"
      />
      <button type="submit">Go</button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: absolute;
  left: 24px;
  bottom: 36px;
  height: 86px;
  max-width: 340px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    padding: 8px 12px 8px 32px;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 32px 36px 0 rgb(0 0 0 / 0.3);
    }

    &:focus {
      box-shadow: 0 32px 36px 0 rgb(0 0 0 / 0.3);
    }
  }

  button {
    min-width: 86px;
    height: 86px;

    &:hover {
      box-shadow: inset 0 0 0 0 var(--green-color);
    }
  }
`;
export default Form;
