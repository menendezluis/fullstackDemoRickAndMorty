import { Router } from "express";
import { characters } from "../data.js";

const router = Router();
let myTempCharacters = characters;

router.get("/", (req, res) => {
  res.json(myTempCharacters);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const myIndex = myTempCharacters.findIndex((character) => character.id == id);
  if (myIndex == -1)
    res.json({
      message: "Personaje no encontrado",
    });

  const character = myTempCharacters.find((character) => character.id == id);

  res.json(character);
});

router.post("/", (req, res) => {
  const myCharacter = req.body;
  myCharacter.id = myTempCharacters.length + 1;
  myTempCharacters.push(myCharacter);
  res.json({
    message: "Personaje agregado",
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const myNewCharacter = req.body;
  const myIndex = myTempCharacters.findIndex((character) => character.id == id);

  if (myIndex == -1) res.json({ message: "Personaje no encontrado" });
  myTempCharacters[myIndex] = myNewCharacter;

  res.json({
    message: "Personaje actualizado",
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const myIndex = myTempCharacters.findIndex((character) => character.id == id);
  if (myIndex == -1)
    res.json({
      message: "Personaje no encontrado",
    });
  myTempCharacters.splice(myIndex, 1);

  res.json({
    message: "Personaje eliminado",
  });
});

export default router;
