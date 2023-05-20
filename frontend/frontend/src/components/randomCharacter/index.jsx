import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader";

const RandomCharacter = (prop) => {
  const { setCount, count } = prop;
  const url = "https://rickandmortyapi.com/api/character";

  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);

  async function generateRandomCharacter() {
    setLoading(true);
    let randomNumber = Math.floor(Math.random() * 200);
    const response = await axios.get(`${url}/${randomNumber}`);
    setCharacter(response.data);
    await axios.post("http://localhost:3000/api/characters", response.data);
    setCount((count) => count + 1);
    setLoading(false);
  }

  return (
    <button disabled={loading} onClick={() => generateRandomCharacter()}>
      {loading ? "cargando" : "Aleatorio"}
    </button>
  );
};

export default RandomCharacter;
