import express from "express";

const app: express.Application = express();

const port: number = 3000;

app.get("/", (req, res) => {
  res.send("Typescript with Express");
});

app.listen(port, () => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
});
