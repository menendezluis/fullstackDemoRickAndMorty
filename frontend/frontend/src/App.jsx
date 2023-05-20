import { useState, useEffect } from "react";
import axios from "axios";
import RandomCharacter from "./components/randomCharacter";
import List from "./components/list";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await axios.get("http://localhost:3000/api/characters");
    setCharacters(response.data);
  };
  useEffect(() => {
    getCharacters();
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <RandomCharacter setCount={setCount} count={count} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <List characters={characters} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
