import { useEffect } from "react";

const useKeyStroke = (key, method) => {
  const handleKeyPress = (event) => {
    if (event.key === key) method();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
};

export default useKeyStroke;
