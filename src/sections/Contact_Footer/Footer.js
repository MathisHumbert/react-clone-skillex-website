import React from 'react';
import styled from 'styled-components';
import { icons } from '../../utlis/data';

const Footer = () => {
  return (
    <Wrapper>
      <hr />
      <ul>
        {icons.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.article``;
export default Footer;
