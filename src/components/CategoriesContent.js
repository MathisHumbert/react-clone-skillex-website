import React from 'react';
import styled from 'styled-components';
import { categoriesImages } from '../utlis/data';

const CategoriesContent = () => {
  return (
    <Wrapper>
      {categoriesImages.map((item) => {
        const { id, title, date, img } = item;
        return (
          <article key={id}>
            <div className="img-container">
              <img src={img} alt="title" />
              <span></span>
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
  grid-template-columns: 1fr 1fr;

  img {
    width: 100%;
  }
`;
export default CategoriesContent;
