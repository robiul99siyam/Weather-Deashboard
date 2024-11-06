import { useEffect, useRef } from "react";

const useDebounce = (callback, deley) => {
  const timeOut = useRef(null);

  useEffect(() => {
    return () => {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    };
  }, []);
  const debounceCallback = (...agrs) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    timeOut.current = setTimeout(() => {
      callback(...agrs);
    }, deley);
  };

  return debounceCallback;
};

export default useDebounce;
