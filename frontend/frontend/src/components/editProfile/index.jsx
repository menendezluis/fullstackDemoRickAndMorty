import React, { useState } from "react";
import axios from "axios";

const EditProfile = (props) => {
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    type: "",
    created: "",
    episode: "",
    url: "",
  });

  const { character } = props;

  const handleChange = (e) => {
    setNewCharacter({
      ...newCharacter,
      [e.target.name]: e.target.value,
    });
  };

  const sendEdit = async () => {
    await axios.put(
      `http://localhost:3000/api/characters/${character.id}`,
      newCharacter
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newCharacter);
    sendEdit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={newCharacter.name}
          onChange={handleChange}
        />
        <label htmlFor="status">Estado</label>
        <input
          type="text"
          name="status"
          value={newCharacter.status}
          onChange={handleChange}
        />
        <label htmlFor="species">Especie</label>
        <input
          type="text"
          name="species"
          value={newCharacter.species}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          name="gender"
          value={newCharacter.gender}
          onChange={handleChange}
        />
        <label htmlFor="type">Tipo</label>
        <input
          type="text"
          name="type"
          value={newCharacter.type}
          onChange={handleChange}
        />
        <label htmlFor="created">Creado</label>
        <input
          type="text"
          name="created"
          value={newCharacter.created}
          onChange={handleChange}
        />
        <label htmlFor="episode">Episodio</label>
        <input
          type="text"
          name="url"
          value={newCharacter.url}
          onChange={handleChange}
        />
        <button type="submit">Editar</button>
      </form>
    </div>
  );
};

export default EditProfile;
