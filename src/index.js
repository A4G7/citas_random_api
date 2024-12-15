const express = require("express");
const app = express();
const citaRouter = require("./routes");

PORT = 3000;
app.use(express.json());

app.use("/citas", citaRouter);

app.listen(PORT, () => {
  console.log(`Server activo en http://localhost:${PORT}`);
});
