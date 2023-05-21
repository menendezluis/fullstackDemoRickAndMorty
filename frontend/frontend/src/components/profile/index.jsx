import { useState } from "react";
import Swal from "sweetalert2";
const Profile = (character) => {
  Swal.fire({
    title: character.name,
    text: character.status,
    background:
      character.gender == "Male"
        ? "lightblue"
        : character.gender == "Female"
        ? "pink"
        : "lightgreen",
    imageUrl: character.image,
    imageWidth: 300,
    imageHeight: 150,
    imageAlt: character.name,
    html: ` <p>${character.status}</p>
    <p>${character.species}</p>
    <p>${character.gender}</p>
    <p>${character.type}</p>
    <p>${character.created}</p>
    <p>${character.origin.name}</p>
    <p>${character.location.name}</p>
    <p>${character.episode}</p>
    <p>${character.url}</p>`,
  });

  return <div></div>;
};

export default Profile;
