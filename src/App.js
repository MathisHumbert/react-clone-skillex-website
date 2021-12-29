import { useEffect } from 'react';
import {
  Sidebar,
  Navbar,
  FindPassion,
  Categories,
  Skills,
  Reviews,
  ContactFooter,
} from './sections';

import useLocalScroll from './utlis/useLocalScroll';

function App() {
  useLocalScroll(true);
  return (
    <>
      <Navbar />
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
