import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const slideInTop = (elem) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,

      scrollTrigger: {
        trigger: elem,
        start: 'top center',
        end: 'bottom center',
      },
    }
  );
};

export const slideInTopTop = (elem) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,

      scrollTrigger: {
        trigger: elem,
        start: 'top top+=800px',
        end: 'top top',
      },
    }
  );
};

export const slideInTopDelay = (elem, elemTrig) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,

      scrollTrigger: {
        trigger: elemTrig,
        start: 'top center-=100px',
        end: 'bottom center-=200px',
      },
    }
  );
};

export const slideInTopPassion = (elem) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,

      scrollTrigger: {
        trigger: elem,
        start: 'top center',
        end: 'bottom center',
      },
    }
  );
};

export const slideInTopNav = (elem) => {
  gsap.fromTo(
    elem,
    {
      y: -200,
    },
    {
      y: 0,
      duration: 0.8,
      delay: 1,

      scrollTrigger: {
        trigger: elem,
        start: 'top center',
        end: 'bottom center',
      },
    }
  );
};

export const slideInTopHeader = (elem) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: '-100%',
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.4,

      scrollTrigger: {
        trigger: elem,
        start: 'top center',
        end: 'bottom center',
      },
    }
  );
};

export const fixedNav = () => {
  gsap.to('#navbar', {
    scrollTrigger: {
      onLeave: () => {
        document.querySelector('#navbar').style.transform = 'translateY(-100%)';
      },
      onEnterBack: () => {
        document.querySelector('#navbar').style.position = 'absolute';
        document.querySelector('#navbar').style.transform = 'translateY(0)';
      },
      trigger: '#navbar',
      start: '+=240px',
      end: '+=240px',
    },
  });
  ScrollTrigger.refresh();
};

export const transformNav = () => {
  gsap.to('#navbar', {
    scrollTrigger: {
      onLeave: () => {
        document.querySelector('#navbar').style.transform = 'translateY(0)';
        document.querySelector('#navbar').style.position = 'fixed';
      },
      onEnterBack: () =>
        (document.querySelector('#navbar').style.transform =
          'translateY(-100%)'),
      trigger: '#navbar',
      start: '+=300px',
      end: '+=300px',
    },
  });
  ScrollTrigger.refresh();
};
