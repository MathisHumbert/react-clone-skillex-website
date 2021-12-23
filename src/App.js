import styled from 'styled-components';

import {
  Sidebar,
  Navbar,
  FindPassion,
  Categories,
  Skills,
  Reviews,
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
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  padding-bottom: 20rem;
`;
export default App;
