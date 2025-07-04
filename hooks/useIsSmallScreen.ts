import { useEffect, useState } from 'react';

export function useIsSmallScreen(threshold: number = 500) {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmall(window.innerWidth < threshold);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [threshold]);

  return isSmall;
} 