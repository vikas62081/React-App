import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    heigth: undefined,
  });

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const handleSize = () => {
    setWindowSize({ width: window.innerWidth, heigth: window.innerHeight });
  };
  return windowSize;
};

export default useWindowSize;
