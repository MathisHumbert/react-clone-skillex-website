import { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../images/617fa55008f302348b1f7703_logo.svg';
import { slideInTopNav } from '../../utlis/gsapActions';
import { useGlobalContext } from '../../context';
import { links } from '../../utlis/data';

const NavBar = () => {
  const { handleScroll } = useGlobalContext();

  useEffect(() => {
    slideInTopNav('#big-navbar');
  }, []);

  return (
    <Wrapper id='big-navbar'>
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
          <li>
            <p>Login</p>
          </li>
          <button className='connect-btn'>Free Trial</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  padding: 38px 80px;
  margin: 0 auto;
  display: none;
  justify-content: center;
  z-index: 2;
  background: var(--secondary-color);
  position: absolute;
  top: 0;
  transition: transform 0.4s ease-in-out;

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

  .left {
    display: flex;
    align-items: center;
    gap: 60px;
    width: 100%;
    flex: 3;
  }

  .right {
    width: fit-content;
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

  @media (min-width: 998px) {
    display: flex;
  }

  @media (min-width: 1200px) {
    .left {
      gap: 120px;
    }
  }
`;
export default NavBar;
