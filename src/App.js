import {
  Sidebar,
  FindPassion,
  Categories,
  Skills,
  Reviews,
  ContactFooter,
  NavBar,
} from './sections';

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

  return (
    <>
      <Sidebar />
      <NavBar />
      <FindPassion />
      <Categories />
      <Skills />
      <Reviews />
      <ContactFooter />
    </>
  );
}

export default App;
