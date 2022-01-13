import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    const navbar = document.querySelector('#big-navbar');
    const element = document.querySelector(id);
    const navHeight = navbar.getBoundingClientRect().height;

    if (element.id === 'findPassion') {
      window.scrollTo({
        left: 0,
        top: 0,
      });
      return;
    }

    let position = element.offsetTop;
    console.log(window.innerWidth);
    if (navbar.classList.contains('big')) {
      position -= navHeight;
      navbar.classList.add('fixed');
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  };

  const handleWindowHeight = () => {
    document.querySelectorAll('.scroll-link').forEach((link) => {
      link.classList.remove('active');
    });

    if (window.scrollY > 596 && window.scrollY <= 1437) {
      document.getElementById('categories-link').classList.add('active');
    } else if (window.scrollY > 1437 && window.scrollY <= 2235) {
      document.getElementById('skills-link').classList.add('active');
    } else if (window.scrollY > 2235) {
      document.getElementById('customer-link').classList.add('active');
    } else {
      document.getElementById('findPassion-link').classList.add('active');
    }
  };

  useEffect(() => {
    console.log(document.getElementById('categories').offsetTop);
    console.log(document.getElementById('skills').offsetTop);
    console.log(document.getElementById('customer').offsetTop);
    window.addEventListener('scroll', handleWindowHeight);

    return () => window.removeEventListener('scroll', handleWindowHeight);
  });

  useEffect(() => {});

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
        handleScroll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
