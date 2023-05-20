import { useState } from "react";

const Profile = (character) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <p>{character.type}</p>
      <p>{character.created}</p>
      <p>{character.origin.name}</p>
      <p>{character.location.name}</p>
      <p>{character.episode}</p>
      <p>{character.url}</p>
    </div>
  );
};

export default Profile;
