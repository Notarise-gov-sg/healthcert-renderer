import { useState, useEffect } from "react";
import { debounce } from "lodash";

interface WindowDimension {
  width: number;
  height: number;
}

const getWindowDimensions = (): WindowDimension => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = (): WindowDimension => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    const debouncedHandleResize = debounce(handleResize, 500);

    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  return windowDimensions;
};
