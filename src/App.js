import styled from 'styled-components';

import Sidebar from './Navbar_Sidebar/Sidebar';
import Navbar from './Navbar_Sidebar/Navbar';
import Skills from './Skills/SkillsPage';
import FindPassion from './FindPassion/FindPassion';
import Categories from './Categories/Categories';

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
