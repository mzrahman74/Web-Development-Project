import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Yusuf is the best employee.<h1>");
});

app.get("/contact", (req, res) => {
  res.send("<p>phone number: 214-973-0438</p>");
});

app.get("/about", (req, res) => {
  res.send("<p>about this page </p>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
