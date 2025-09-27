import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Check if window width is less than 768px (md breakpoint)
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};
