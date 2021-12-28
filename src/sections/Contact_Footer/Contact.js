import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import logo from '../../images/617fa55008f302348b1f7703_logo.svg';
import { links } from '../../utlis/data';

const Contact = () => {
  const { scrollLinks } = useGlobalContext();
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <img src={logo} alt="main-logo" />
      <ul>
        {links.map((item) => {
          return (
            <li key={item.id} onClick={() => scrollLinks(item.url)}>
              {item.text}
            </li>
          );
        })}
      </ul>
      <div className="form-container">
        <h3>Join our community</h3>
        <form
          className="contact"
          onSubmit={(e) => {
            e.preventDefault();
            setValue('');
          }}
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="contact-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;

  img {
    width: 124px;
  }

  ul {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: baseline;
    max-width: 310px;
    gap: 24px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  form {
    height: 64px;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    padding: 8px 12px 8px 25px;
    border: 1px solid rgba(30, 30, 47, 0.2);
    transition: border 0.3s ease-in-out;

    &:hover {
      border: 1px solid rgba(30, 30, 47, 0.4);
    }

    &:focus {
      border: 1px solid var(--green-color);
    }
  }

  button {
    min-width: 64px;
    height: 64px;
    font-size: 14px;
    box-shadow: inset 0 64px 0 0 var(--green-color);

    &:hover {
      box-shadow: inset 0 0 0 0 var(--green-color);
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 56px;

    .form-container {
      margin-top: 24px;
    }

    h3 {
      font-size: 20px;
    }

    button {
      font-size: 16px;
    }
  }

  @media (min-width: 998px) {
    flex-direction: row;
    gap: 0;
    align-items: center;
    justify-content: space-between;

    ul {
      column-gap: 4rem;
    }
  }
`;
export default Contact;
