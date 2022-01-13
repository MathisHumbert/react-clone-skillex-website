import { useEffect } from 'react';
import styled from 'styled-components';
import { IoReorderTwo } from 'react-icons/io5';
import logo from '../../images/617fa55008f302348b1f7703_logo.svg';
import { useGlobalContext } from '../../context';
import { slideInTopNav } from '../../utlis/gsapActions';

const SmallNav = () => {
  const { openSidebar } = useGlobalContext();

  // useEffect(() => {
  //   slideInTopNav('#small-nav');
  // }, []);

  return (
    <Wrapper id='small-nav'>
      <div className='nav-container'>
        <img src={logo} alt='main-logo' />
        <button type='button' className='toggle-btn' onClick={openSidebar}>
          <IoReorderTwo className='toggle-icon' />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  padding: 20px 24px;
  margin: 0 auto;
  background: var(--secondary-color);
  position: absolute;
  top: 0;
  z-index: 2;

  .nav-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    cursor: pointer;
  }

  .toggle-btn {
    cursor: pointer;
  }

  @media (min-width: 998px) {
    display: none;
  }
`;
export default SmallNav;
