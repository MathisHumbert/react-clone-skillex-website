import styled from 'styled-components';
import { Categories, FindPassion, Navbar, Sidebar } from './sections';
import Skills from './Skills/SkillsPage';

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
