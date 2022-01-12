import { useEffect } from 'react';
import styled from 'styled-components';
import {
  slideInTopTrig,
  slideInTopDelay,
  slideInTopTop,
} from '../../utlis/gsapActions';
import Contact from './Contact';
import Footer from './Footer';

const ContactFooter = () => {
  useEffect(() => {
    slideInTopTop('#contact-footer');
  });
  return (
    <Wrapper className='section' id='contact-footer'>
      <Contact />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding-bottom: 24px;
`;
export default ContactFooter;
