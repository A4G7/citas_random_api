const fs = require("fs");
const path = require("path");

const citasFile = path.join(__dirname, "../data/citas.json");

const leerCitas = () => {
  return JSON.parse(fs.readFileSync(citasFile, "utf-8"));
};

const guardarCitas = (citas) => {
  fs.writeFileSync(citasFile, JSON.stringify(citas, null, 2));
};

module.exports = {
  leerCitas,
  guardarCitas,
};
