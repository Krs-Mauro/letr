import { useRef, useState, useEffect } from "react";
import { useAppContext } from "./AppContext";
import useKeyStroke from "./hooks/useKeyStroke";
import { inputStyles } from "./styles/styles";

const Input = () => {
  const [inputString, setInputString] = useState("");
  const { wordList, setWordList } = useAppContext();
  const textInput = useRef();
  const buttonInput = useRef();

  const handleClick = () => setWordList([inputString, ...wordList]);

  useEffect(() => setInputString(""), [wordList]);

  useKeyStroke("Enter", () => buttonInput.current.click());

  return (
    <>
      <input
        type="text"
        placeholder="..."
        style={inputStyles}
        ref={textInput}
        onChange={(e) => setInputString(e.target.value)}
        value={inputString}
      />
      <button
        ref={buttonInput}
        onClick={() => handleClick()}
        style={{ display: "none" }}
      />
    </>
  );
};

export default Input;
