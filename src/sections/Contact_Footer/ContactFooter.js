import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import Footer from './Footer';

const ContactFooter = () => {
  return (
    <Wrapper className="section">
      <Contact />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.footer``;
export default ContactFooter;
