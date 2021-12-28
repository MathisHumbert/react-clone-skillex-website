import React from 'react';
import styled from 'styled-components';
import { IoReorderTwo } from 'react-icons/io5';
import logo from '../../images/617fa55008f302348b1f7703_logo.svg';
import { useGlobalContext } from '../../context';
import { links } from '../../utlis/data';

const Navbar = () => {
  const { openSidebar, scrollLinks } = useGlobalContext();
  const navbar = React.useRef(null);

  const handleScroll = () => {
    const nav = navbar.current;
    console.log(window.innerWidth);
    if (window.innerWidth <= 998) {
      nav.style.position = 'absolute';
      nav.style.paddingTop = '20px';
      nav.style.paddingBottom = '20px';
    } else if (window.scrollY > 130) {
      nav.style.position = 'fixed';
      nav.style.paddingTop = '18px';
      nav.style.paddingBottom = '18px';
    } else {
      nav.style.position = 'absolute';
      nav.style.paddingTop = '38px';
      nav.style.paddingBottom = '38px';
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper ref={navbar}>
      <div className="nav-container">
        <div className="left">
          <img src={logo} alt="main-logo" />
          <ul>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} onClick={() => scrollLinks(url)}>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right">
          <button type="button" className="toggle-btn" onClick={openSidebar}>
            <IoReorderTwo className="toggle-icon" />
          </button>
          <div className="connect-container">
            <li>
              <a href="#">Login</a>
            </li>
            <button className="connect-btn">Free Trial</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  padding: 20px 24px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  z-index: 3;
  background: var(--secondary-color);
  top: 0;
  left: 0;
  transition: transform 2s ease-in-out;

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
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
        box-shadow: inset 0 -7px 0 0 #97c680;
      }
    }

    .toggle-btn {
      display: none;
    }
  }
`;
export default Navbar;
