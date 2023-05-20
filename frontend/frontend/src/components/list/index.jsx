import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../profile";

const List = (props) => {
  const [showOrHide, setShowOrHide] = useState([]);
  const { characters, setCount } = props;
  async function deleteCharacter(id) {
    await axios.delete(`http://localhost:3000/api/characters/${id}`);
    setCount((count) => count + 1);
  }

  useEffect(() => {
    for (let x = 0; x < characters.length; x++) {
      console.log(x);
      console.log(characters[x]);
      setShowOrHide([...showOrHide, false]);
    }
  }, [characters]);

  return (
    <ul>
      {characters.map((character, index) => (
        <li key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <span onClick={() => deleteCharacter(character.id)}>Eliminar</span>
          {showOrHide[index] ? (
            <Profile {...character} showOrHide={showOrHide[index]} />
          ) : (
            <button
              onClick={() =>
                setShowOrHide([
                  ...showOrHide.slice(0, index),
                  true,
                  ...showOrHide.slice(index + 1),
                ])
              }
            >
              Ver datos
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
