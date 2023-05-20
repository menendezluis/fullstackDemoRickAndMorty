import express from "express";
import cors from "cors";
import routerCharacters from "./routes/character.routes.js";

const app = express();

/* metodos http
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/characters", routerCharacters);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
