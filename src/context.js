import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const navbar = document.querySelector('#navbar');
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
    const navbar = document.querySelector('#navbar');
    const element = document.querySelector(id);
    const navHeight = navbar.getBoundingClientRect().height;

    if (element.id === 'findPassion') {
      window.scrollTo({
        left: 0,
        top: 0,
      });
      navbar.classList.remove('fixed');
      return;
    }

    let position = element.offsetTop;

    if (navbar.classList.contains('big')) {
      position -= navHeight;
      navbar.classList.add('fixed');
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  };

  const handleWindowWidth = () => {
    if (window.innerWidth > 998) {
      document.querySelector('#navbar').classList.add('big');
    } else {
      document.querySelector('#navbar').classList.remove('big');
    }
  };

  const handleWindowHeight = () => {
    const navbar = document.querySelector('#navbar');
    if (window.scrollY > 300 && navbar.classList.contains('big')) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  };
  useEffect(() => {
    handleWindowWidth();
    window.addEventListener('resize', handleWindowWidth);
    return () => window.removeEventListener('resize', handleWindowWidth);
  }, []);

  useEffect(() => {
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
