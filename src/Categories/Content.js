import React from 'react';
import styled from 'styled-components';
import { categoriesImages } from '../utlis/data';
import { ImArrowUpRight2 } from 'react-icons/im';

const Content = () => {
  return (
    <Wrapper>
      {categoriesImages.map((item) => {
        const { id, title, date, img } = item;
        return (
          <article key={id}>
            <div className="img-container">
              <img src={img} alt="title" />
              <span>
                <ImArrowUpRight2 />
              </span>
            </div>

            <h3>{title}</h3>
            <p>{date}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  padding: 0 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 32px;

  article {
    height: 90%;
    display: grid;
    grid-template-rows: 70% 15% 15%;
    cursor: pointer;

    &:hover {
      h3 {
        color: var(--green-color);
      }
    }
  }

  .img-container {
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    object-fit: cover;
  }

  span {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--secondary-color);
    right: 10px;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 15px;
  }

  h3,
  p {
    align-self: flex-end;
    color: var(--primary-color);
  }

  h3 {
    font-size: 14px;
    transition: color 0.2s ease-in-out;
  }

  p {
    font-size: 12px;
  }
`;
export default Content;
