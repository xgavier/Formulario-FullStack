const Poesias = require("../models/poesia.model");



function Generos(req, res) {
  Poesias.findOne({ nombre: "Lírica" }, (error, generosExistentes) => {
    if (error)
      return res.status(200).send({ Error: "Error" });
    if (generosExistentes) {
      console.log("Creados");
    } else {
      Poesias.create(
        { nombre: "Lírica" },
        { nombre: "Épica" },
        { nombre: "Dramática" },
        (error, generosCreados) => {
          if (error)
            return res
              .status(500)
              .send({ Error: "Error" });
          console.log("Generos creados");
        }
      );
    }
  });
}


function verGeneros(req, res) {
  Poesias.find((error, generos) => {
    if (error)
      return res.status(500).send({ Error: "Error." });
    return res.status(200).send({ Generos: generos });
  });
}


module.exports = {
  verGeneros,
  Generos,
};
