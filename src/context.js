import React, { useState, useContext, useEffect, useRef } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const findPassion = useRef(null);
  const categories = useRef(null);
  const skills = useRef(null);
  const customer = useRef(null);
  const links = { categories, skills, customer, findPassion };

  const scrollLinks = (url) => {
    const link = links[url].current;
    let position = link.offsetTop;

    if (url !== 'findPassion' && window.innerWidth >= 998) {
      position -= 81;
    }

    window.scrollTo(0, position);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
        findPassion,
        scrollLinks,
        skills,
        findPassion,
        categories,
        customer,
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
