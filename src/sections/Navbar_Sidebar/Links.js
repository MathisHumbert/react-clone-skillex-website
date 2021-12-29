import React from 'react';
import styled from 'styled-components';
import { links } from '../../utlis/data';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useEffect } from 'react/cjs/react.development';
gsap.registerPlugin(ScrollToPlugin);

const Links = () => {
  return (
    <Wrapper>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li key={id} id={url}>
            {text}
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul``;
export default Links;
