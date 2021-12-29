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

// const enter = (elem) => {
//   gsap.fromTo(
//     elem,
//     { y: 200, opacity: 0 },
//     {
//       duration: 3,
//       y: 0,
//       opacity: 1,
//       stagger: 0.1,
//       ease: 'power2',
//       scrollTrigger: {
//         trigger: elem,
//         scroller: '#main-container',
//         start: '-=400px',
//       },
//     }
//   );
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
  //   enter('#test h1');
  // });

  // useEffect(() => {
  //   enter('#title');
  // });

  return (
    <>
      <main id="main-container" data-scroll-container>
        <Navbar />
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
