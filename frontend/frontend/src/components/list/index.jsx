import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../profile";
import Edit from "../edit";

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

  const isPrime = (num) => {
    if (num % 2 === 0) return false;
    else return true;
  };

  const renderPosition = (index) => {
    if (isPrime(index)) {
      return "flex-start";
    } else {
      return "flex-end";
    }
  };

  const renderColor = (character) => {
    if (character.gender === "Male") {
      return "lightblue";
    } else if (character.gender == "Female") {
      return "pink";
    } else {
      return "lightgreen";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        listStyle: "none",
      }}
    >
      <ul>
        {characters.map((character, index) => (
          <li
            style={{
              backgroundColor: renderColor(character),
              display: "flex",
              flexDirection: "column",
              width: "500px",
              alignItems: renderPosition(index),
            }}
            key={character.id}
          >
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
            <Edit character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
