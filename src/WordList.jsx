import { useAppContext } from "./AppContext";
import { textStyle, textBox } from "./styles/styles";

const WordList = () => {
  const { wordList } = useAppContext();

  return (
    <div style={textBox}>
      {wordList.map((word, index) => (
        <p style={textStyle} key={index}>
          {word}
        </p>
      ))}
    </div>
  );
};

export default WordList;
