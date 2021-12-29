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

// const slideInTop = (elem, delay, duration) => {
//   gsap.to(elem, {
//     background: 'red',
//     duration: duration || 0.6,
//     delay: delay || 0.4,
//     scrollTrigger: {
//       trigger: elem,
//       start: 'top center',
//       end: 'bottom center',
//       scroller: '#main-container',
//       pin: true,
//     },
//   });
//   ScrollTrigger.refresh();
// };

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    });
  }, [loader]);

  useLocalScroll(loader);

  // useEffect(() => {
  //   if (loader) return;
  //   setTimeout(() => {
  //     gsap.to('#findPassion', {
  //       background: 'red',
  //       duration: 0.6,
  //       delay: 0.4,
  //       scrollTrigger: {
  //         start: 'top center',
  //         end: '202px',
  //         trigger: '#findPassion',
  //         scroller: '#main-container',
  //       },
  //     });
  //     ScrollTrigger.refresh();
  //   });
  // }, [loader]);

  useEffect(() => {
    gsap.fromTo(
      '#test h1',
      { y: 200, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2',
      }
    );
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
