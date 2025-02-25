'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';

function SmoothScrolling() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
}

export default SmoothScrolling;
