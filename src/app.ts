import Express from "express";

const app = Express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`); // eslint-disable-line no-console
});
