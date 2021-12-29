import { useEffect, useState } from 'react';
import useLocalScroll from './utlis/useLocalScroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import {
  Sidebar,
  Navbar,
  FindPassion,
  Categories,
  Skills,
  Reviews,
  ContactFooter,
} from './sections';

const slideInTop = (elem, delay, duration) => {
  gsap.to(elem, {
    background: 'red',
    duration: duration || 0.6,
    delay: delay || 0.4,
    scrollTrigger: {
      trigger: elem,
      start: '300px',
      end: '302px',
    },
  });
  ScrollTrigger.refresh();
};

const enter = (elem) => {
  gsap.fromTo(
    elem,
    { y: 200, opacity: 0 },
    {
      duration: 3,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
      scrollTrigger: {
        trigger: elem,
        scroller: '#main-container',
        start: '-=400px',
      },
    }
  );
  ScrollTrigger.refresh();
};

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    });
  }, [loader]);

  useLocalScroll(loader);

  useEffect(() => {
    slideInTop('#main-container');
  });

  useEffect(() => {
    enter('#test h1');
  });

  useEffect(() => {
    enter('#title');
  });

  return (
    <>
      {/* <Navbar /> */}
      <main id="main-container" data-scroll-container>
        <Sidebar />
        <FindPassion />
        <Categories />
        <Skills />
        <Reviews />
        <ContactFooter />
      </main>
    </>
  );
}

export default App;
