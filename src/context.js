import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

// old code
// const findPassion = useRef(null);
// const categories = useRef(null);
// const skills = useRef(null);
// const customer = useRef(null);
// const navbar = React.useRef(null);
// const links = { categories, skills, customer, findPassion };

// const scrollLinks = (url) => {
//   const link = links[url].current;
//   let position = link.offsetTop;

//   if (url !== 'findPassion' && window.innerWidth >= 998) {
//     position -= 81;
//   }

//   window.scrollTo(0, position);
// };

// const handleScroll = () => {
//   const nav = navbar.current;
//   const windowHeight = window.scrollY;
//   const windowHeightFixed = windowHeight + 81;
//   if (window.innerWidth <= 998) {
//     nav.style.position = 'absolute';
//     nav.style.paddingTop = '20px';
//     nav.style.paddingBottom = '20px';
//     return;
//   }

//   if (windowHeightFixed < categories.current.offsetTop) {
//     setActiveLink('findPassion');
//   } else if (
//     windowHeightFixed >= categories.current.offsetTop &&
//     windowHeightFixed < skills.current.offsetTop
//   ) {
//     setActiveLink('categories');
//   } else if (
//     windowHeightFixed >= skills.current.offsetTop &&
//     windowHeightFixed < customer.current.offsetTop
//   ) {
//     setActiveLink('skills');
//   } else {
//     setActiveLink('customer');
//   }

//   if (windowHeight > 130) {
//     nav.style.position = 'fixed';
//     nav.style.paddingTop = '18px';
//     nav.style.paddingBottom = '18px';
//   } else {
//     nav.style.position = 'absolute';
//     nav.style.paddingTop = '38px';
//     nav.style.paddingBottom = '38px';
//   }
// };

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);
