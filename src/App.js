import { useEffect } from 'react';
import {
  Sidebar,
  FindPassion,
  Categories,
  Skills,
  Reviews,
  ContactFooter,
  NavBar,
  SmallNav,
  BigNav,
} from './sections';

import { transformNav, fixedNav } from './utlis/gsapActions';

function App() {
  // const [preloader, setPreloader] = useState(true);
  // const [timer, setTimer] = useState(1);
  // const id = useRef(null);

  // const clear = () => {
  //   window.clearInterval(id.current);
  //   setPreloader(false);
  // };

  // // run when we mount the component
  // useEffect(() => {
  //   id.current = window.setInterval(() => {
  //     setTimer((timer) => timer - 1);
  //   }, 100);
  // }, []);

  // // run when the timer is done
  // useEffect(() => {
  //   if (timer === 0) {
  //     clear();
  //   }
  // }, [timer]);

  // create small Nav and big Nav
  // fix form

  useEffect(() => {
    transformNav();
    fixedNav();
  });

  return (
    <>
      <Sidebar />
      <SmallNav />
      <BigNav />
      <FindPassion />
      <Categories />
      <Skills />
      <Reviews />
      <ContactFooter />
    </>
  );
}

export default App;
