import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

gsap.registerPlugin(ScrollTrigger);

export default function useLocalScroll(start) {
  useEffect(() => {
    if (!start) return;
    let localScroll = null;

    const scrollEl = document.querySelector('#main-container');

    localScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
    });

    localScroll.on('scroll', () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (localScroll) {
          return arguments.length
            ? localScroll.scrollTo(value, 0, 0)
            : localScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (localScroll) {
          return arguments.length
            ? localScroll.scrollTo(value, 0, 0)
            : localScroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (localScroll) {
        localScroll.update();
      }
    };

    ScrollTrigger.addEventListener('refresh', lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (localScroll) {
        ScrollTrigger.removeEventListener('refresh', lsUpdate);
        localScroll.destroy();
        localScroll = null;
        console.log('Kill', localScroll);
      }
    };
  }, [start]);
}
