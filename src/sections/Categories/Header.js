import React from 'react';
import { categoriesHeading } from '../../utlis/data';
import styled from 'styled-components';

const Header = () => {
  const [id, setId] = React.useState(1);

  return (
    <Wrapper className="animation-block">
      <h1 id="title">Unlimited access to 100+ instructors.</h1>
      <ul>
        {categoriesHeading.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setId(item.id)}
              className={id === item.id ? 'active' : null}
            >
              {item.title} <span></span>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-bottom: 32px;
  h1 {
    font-size: 40px;
    padding-bottom: 40px;
    text-align: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 44px;
    row-gap: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    cursor: pointer;
    gap: 3px;

    span {
      width: 100%;
      height: 2px;
      background: var(--primary-color);
      opacity: 0;
      transform: translateY(400%);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    &:hover span {
      opacity: 0.3;
      transform: translateY(0%);
    }

    &.active {
      span {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 56px;
  }
`;
export default Header;
