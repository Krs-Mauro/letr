import Input from "./Input";
import WordList from "./WordList";
import { h1Styles, mainContainer } from "./styles/styles";

function App() {
  return (
    <div style={mainContainer}>
      <h1 style={h1Styles}>LETR</h1>
      <Input />
      <WordList />
    </div>
  );
}

export default App;
