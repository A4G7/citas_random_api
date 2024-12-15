const { leerCitas, guardarCitas } = require("../utils/fileManager");

const citas = leerCitas();

const obtenerCitas = (req, res) => {
  try {
    res.status(200).json(citas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener las citas." });
  }
};

const obtenerCitaRandom = (req, res) => {
  try {
    const citaRandom = citas[Math.floor(Math.random() * citas.length)];
    res.status(200).json(citaRandom);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener la cita random." });
  }
};

const guardarCita = (req, res) => {
  const { cita, autor } = req.body;
  if (!cita || !autor || cita.trim() === "" || autor.trim() === "") {
    return res
      .status(400)
      .json({ mensaje: "La cita y el autor son obligatorios." });
  }
  const nuevaCita = { id: citas.length + 1, cita, autor };
  citas.push(nuevaCita);
  guardarCitas(citas);
  res.status(201).json(nuevaCita);
};

const actualizarCita = (req, res) => {
  const id = parseInt(req.params.id);
  if (!citas[id - 1]) {
    return res.status(404).json({ mensaje: "Cita no encontrada." });
  }
  const { cita, autor } = req.body;
  if (!cita || !autor || cita.trim() === "" || autor.trim() === "") {
    return res
      .status(400)
      .json({ mensaje: "La cita y el autor son obligatorios." });
  }
  const citaActualizada = { id, cita, autor };
  citas[id - 1] = citaActualizada;
  guardarCitas(citas);
  res.status(200).json(citaActualizada);
};

module.exports = {
  obtenerCitas,
  obtenerCitaRandom,
  guardarCita,
  actualizarCita,
};
