const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3001;
let agend = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/person", (req, res) => {
  res.json(agend);
});

app.get("/info", (req, res) => {
  const date = Date();
  console.log(date);
  res.send(`<h1>Phonebook has info for ${agend.length} people</h1>
               <h1>${date}</h1>`);
});

app.get("/api/person/:id", (req, res) => {
  const id = Number(req.params.id);
  person = agend.find((person) => person.id === id);
  if (!person) {
    res.status(404).end();
  }
  res.json(person);
});

app.delete("/api/person/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = agend.filter((person) => person.id !== id);
  console.log(person);
  res.status(204).end();
});

const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 101);
};

app.post("/api/person/", (req, res) => {
  const { name, number } = req.body;
  console.log(name, number);
  if (!name) {
    return response.status(400).json({
      error: "name missing",
    });
  }

  const person = {
    id: String(generarNumeroAleatorio()),
    name,
    number,
  };

  console.log(person);

  const newagend = agend.concat(person);
  res.json(newagend);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
