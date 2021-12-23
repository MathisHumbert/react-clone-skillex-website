import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import styled from 'styled-components';
import { Categories, FindPassion, Navbar, Sidebar, Skills } from './sections';

function App() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <FindPassion />
        <Categories />
        <Skills />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  padding: 0 24px;
  padding-bottom: 20rem;
`;
export default App;
