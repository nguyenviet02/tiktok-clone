import { useState, useEffect } from "react";

function useViewPort() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    })
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      })
    }
  }, [])
  return { width };
};

export default useViewPort;