import {
  Sidebar,
  FindPassion,
  Categories,
  Skills,
  Reviews,
  ContactFooter,
  SmallNav,
  BigNav,
} from './sections';

function App() {
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
