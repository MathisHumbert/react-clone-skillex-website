import styled from 'styled-components';

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
  return (
    <>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <FindPassion />
        <Categories />
        <Skills />
        <Reviews />
        <ContactFooter />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  padding-bottom: 20rem;
`;
export default App;
