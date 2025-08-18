import { useState, useEffect } from "react";

export const useScrolledPastThreshold = (threshold: number): boolean => {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than the threshold.
      if (window.scrollY > threshold) {
        setScrolledPast(true);
      } else {
        setScrolledPast(false);
      }
    };

    // Add scroll event listener.
    window.addEventListener("scroll", handleScroll);

    // Check scroll position on mount in case the user is already scrolled.
    handleScroll();

    // Cleanup the event listener on component unmount.
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolledPast;
};
