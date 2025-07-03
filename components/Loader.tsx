'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const loadingRef = useRef(null);

  const [isAnimationFinished, setIsAnimationFinished] = useState<boolean>(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimationFinished(true);
      },
    });
    tl.to('.counter', 0.01, {
      delay: 1.1,
      opacity: 0,
    });
    tl.to('.line', 1.5, {
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: 'power4.inOut',
    });
  }, []);

  const [count, setCount] = useState(1990);
  const [intervalDelay, setIntervalDelay] = useState(100); // initial delay
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    // Clear previous interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up new interval with current delay
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 2024) {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
          }
          return prevCount;
        }
        if (prevCount > 2010 && intervalDelay !== 20) {
          // Change delay to 20ms when crossing 2010
          setIntervalDelay(20);
        }
        // Increment logic
        return prevCount + (prevCount >= 2010 ? 1 : 10);
      });
    }, intervalDelay);

    // Cleanup on unmount or delay change
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [intervalDelay]);

  return (
    <div ref={loadingRef} aria-hidden="true">
      {!isAnimationFinished && (
        <>
          <div className="fixed counter w-screen h-screen z-[10000] inset-0 bg-black p-10 flex items-center justify-center text-[7rem] font-bold text-accentColor">
            {count}
          </div>
          <div className="fixed w-screen h-screen z-[9999] flex">
            {[...new Array(11)].map((_, index) => (
              <div key={index} className="line w-full h-full bg-black" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Loader;
