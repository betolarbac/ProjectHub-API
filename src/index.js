const express = require("express");
const routes = require("./routes/router");
const conn = require("./db/conn");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

conn();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use("/api", routes);
