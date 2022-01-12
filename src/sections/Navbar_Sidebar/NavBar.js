import { useEffect } from 'react';
import styled from 'styled-components';
import { IoReorderTwo } from 'react-icons/io5';
import { slideInTopNav } from '../../utlis/gsapActions';
import logo from '../../images/617fa55008f302348b1f7703_logo.svg';
import { useGlobalContext } from '../../context';
import { links } from '../../utlis/data';

const NavBar = () => {
  const { openSidebar, handleScroll } = useGlobalContext();

  useEffect(() => {
    slideInTopNav('#navbar');
  }, []);

  return (
    <Wrapper id='navbar'>
      <div className='nav-container'>
        <div className='left'>
          <img src={logo} alt='main-logo' />
          <ul>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <a href={`#${url}`} onClick={handleScroll}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='right'>
          <button type='button' className='toggle-btn' onClick={openSidebar}>
            <IoReorderTwo className='toggle-icon' />
          </button>
          <div className='connect-container'>
            <li>
              <p>Login</p>
            </li>
            <button className='connect-btn'>Free Trial</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  padding: 20px 24px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  z-index: 2;
  background: var(--secondary-color);

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
  }

  img {
    cursor: pointer;
  }

  ul {
    display: none;
  }

  .connect-container {
    display: none;
  }

  .toggle-btn {
    display: block;
  }

  @media (min-width: 998px) {
    padding: 38px 80px;

    &.fixed {
      padding: 18px 80px;
      position: fixed;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 60px;
      width: 100%;
      flex: 3;
    }

    .right {
      width: fit-content;
    }

    .connect-container {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    ul {
      display: flex;
      gap: 22px;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
    }

    li {
      box-shadow: inset 0 0 0 0 var(--green-color);
      transition: box-shadow 0.2s ease-in-out;

      &:hover {
        box-shadow: inset 0 -9px 0 0 #97c680;
      }

      &.active {
        box-shadow: inset 0 -9px 0 0 #97c680;
      }
    }

    .toggle-btn {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    .left {
      gap: 120px;
    }
  }
`;
export default NavBar;