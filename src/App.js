import { useEffect, useState, useRef } from 'react';
import useLocalScroll from './utlis/useLocalScroll';

import {
  Sidebar,
  Navbar,
  FindPassion,
  Categories,
  Skills,
  Reviews,
  ContactFooter,
} from './sections';

function App() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(1);
  const id = useRef(null);

  // locomotive scroll
  useLocalScroll(!preloader);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  // run when we mount the component
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  // run when the timer is done
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <main id="main-container" data-scroll-container>
          <Navbar />
          <Sidebar />
          <FindPassion />
          <Categories />
          <Skills />
          <Reviews />
          <ContactFooter />
        </main>
      )}
    </>
  );
}

export default App;
