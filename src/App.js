import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import styled from 'styled-components';
import { Categories, FindPassion, Navbar, Sidebar } from './sections';

function App() {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <FindPassion />
        <Categories />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  padding: 0 24px;
`;
export default App;
