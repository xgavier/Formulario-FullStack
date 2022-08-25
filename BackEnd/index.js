const mongoose = require("mongoose");
const app = require("./app");
const nuevos = require("./src/controllers/poesia.controller");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb+srv://admin:admin@pc-tips.ahdjmhl.mongodb.net/pc-tips?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Se encuentra conectado a la base de datos.");

    app.listen(3000, function () {
      nuevos.Generos();
      console.log("Funcionando en 3000.");
    });
  })
  .catch((error) => console.log(error));
