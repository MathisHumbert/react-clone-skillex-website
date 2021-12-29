import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import Footer from './Footer';

const ContactFooter = () => {
  return (
    <Wrapper className="section" data-scroll-section data-scroll>
      <Contact />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding-bottom: 24px;

  .animation-block {
    opacity: 0;
  }

  &.is-reveal {
    .animation-block {
      opacity: 1;
      transition: all 0.4s linear;
      transition-delay: 0.2s;
    }
  }
`;
export default ContactFooter;
