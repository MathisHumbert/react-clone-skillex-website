import React from 'react';
import styled from 'styled-components';

const Form = () => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper
      className='contact'
      id='form'
      onSubmit={(e) => {
        e.preventDefault();
        setValue('');
      }}
    >
      <input
        type='text'
        placeholder='Find your passion'
        className='contact-input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit'>Go</button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: absolute;
  left: 24px;
  bottom: 36px;
  height: 86px;
  width: 340px;
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
    box-shadow: inset 0 86px 0 0 var(--green-color);

    &:hover {
      box-shadow: inset 0 0 0 0 var(--green-color);
    }
  }

  @media (min-width: 998px) {
    font-size: 20px;
    left: 80px;
    bottom: 64px;
    height: 120px;
    width: 450px;

    input {
      padding: 8px 12px 8px 50px;
    }

    button {
      min-width: 120px;
      height: 120px;
      font-size: 34px;
      box-shadow: inset 0 120px 0 0 var(--green-color);
    }

    input::placeholder {
      font-size: 20px;
    }
  }
`;
export default Form;
