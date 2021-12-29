import React, { useEffect, useState } from 'react';
import SmallNav from './SmallNav';

const Nav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowWidth < 998) {
    return <SmallNav />;
  } else {
    return <nav></nav>;
  }
};

export default Nav;
