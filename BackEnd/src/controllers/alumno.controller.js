const Usuarios = require("../models/alumno.model");

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
var dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function registro(req, res) {
  var datos = req.body;

  if (
    datos.nombre == "" ||
    datos.direccion == "" ||
    datos.genero == "" ||
    datos.telefono == "" ||
    datos.nacimiento == "" ||
    datos.carrera == "" ||
    datos.generoPoesia == "" ||
    datos.carnet == ""
  ) {
    return res.status(400).send({ Error: "Agregar todos los datos " });
  }

  if (
    (datos.carnet[0] == "A" &&
      datos.carnet[2] == "5" &&
      datos.carnet[5] == "1") ||
    datos.carnet[5] == "3" ||
    datos.carnet[5] == "9"
  ) {
    Usuarios.findOne({ carnet: datos.carnet }, (error, usuarioExistente) => {
      if (usuarioExistente) {
        return res.status(500).send({ Error: "Usa otro carnet no existente" });
      } else {
        Usuarios.create(
          {
            nombre: datos.nombre,
            direccion: datos.direccion,
            genero: datos.genero,
            telefono: datos.telefono,
            nacimiento: datos.nacimiento,
            edad: calcularEdad(datos.nacimiento),
            carrera: datos.carrera,
            tipoCarrera: tipoCarrera(datos.carrera),
            generoPoesia: datos.generoPoesia,
            inscripcion: calcularInscripcion(),
            fechaDeclamar: Fechas(datos.carnet[5], datos.generoPoesia),
            carnet: datos.carnet,
          },
          (error, usuarioRegistrado) => {
            if (error) {
              return res.status(500).send({
                message: "Error",
              });
            } else {
              return res.status(200).send({
                usuario: usuarioRegistrado,
              });
            }
          }
        );
      }
    });
  } else {
    return res.status(500).send({
      Error: "El carnet de ir (A*5**1,3,9)",
    });
  }
}

function reporte(req, res) {
  Usuarios.find((error, usuariosEncontrados) => {
    if (error) return res.status(500).send({ Error: "Error" });
    return res.status(200).send({ UsuariosEdad: usuariosEncontrados });
  }).sort({ edad: -1 });
}

function Fechas(Final, genero) {
  var fecha = new Date();
  var fechaActual = fecha.getDate();
  let lastDay;

  if (Final == "1" && genero == "Dramática") {
    switch (dias[fecha.getDay()]) {
      case "Sabado":
        fecha = Number(fecha);
        fecha = fecha + 6 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);

        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();

        return fecha;
      case "Domingo":
        fecha = Number(fecha);
        fecha = fecha + 5 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);
        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();
        return fecha;
      default:
        fecha = Number(fecha);
        fecha = fecha + 7 * 60 * 60 * 1000;
        fecha = new Date(fecha);
        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();
        return fecha;
    }
  } else if (Final == "3" && genero == "Épica") {
    const ultimoDia = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDay();

    switch (dias[ultimoDia]) {
      case "Sabado":
        fecha = Number(fecha);
        fecha = fecha + 2 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);

        if (fechaActual > fecha.getDate()) {
          fecha = Number(fecha);
          fecha = fecha + 9 * 24 * 60 * 60 * 1000;
          fecha = new Date(fecha);
          return (lastDay = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 2,
            0
          ).toLocaleDateString());
        }
        return fecha.toLocaleString();
      case "Domingo":
        fecha = Number(fecha);
        fecha = fecha + 1 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);
        if (fechaActual > fecha.getDate()) {
          fecha = Number(fecha);
          fecha = fecha + 9 * 24 * 60 * 60 * 1000;
          fecha = new Date(fecha);
          return (lastDay = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 2,
            0
          ).toLocaleDateString());
        }
        return fecha.toLocaleDateString();
      default:
        fecha = new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          0
        ).toLocaleDateString();
    }
  } else {
    switch (dias[fecha.getDay()]) {
      case "Sabado":
        fecha = Number(fecha);
        fecha = fecha + 6 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);

        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();

        return fecha;
      case "Domingo":
        fecha = Number(fecha);
        fecha = fecha + 5 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);
        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();
        return fecha;
      case "Lunes":
        fecha = Number(fecha);
        fecha = fecha + 4 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);
        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();
        return fecha;
      case "Martes":
        fecha = Number(fecha);
        fecha = fecha + 3 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);
        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();
        return fecha;
      case "Miercoles":
        fecha = Number(fecha);
        fecha = fecha + 2 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);
        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();
        return fecha;
      case "Jueves":
        fecha = Number(fecha);
        fecha = fecha + 1 * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);
        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();
        return fecha;
      case "Viernes":
        fecha = Number(fecha);
        fecha = fecha * 24 * 60 * 60 * 1000;
        fecha = new Date(fecha);
        fecha =
          dias[fecha.getDay()] +
          " , " +
          fecha.getDate() +
          " de " +
          meses[fecha.getMonth()] +
          " de " +
          fecha.getFullYear();
        return fecha;
    }
  }
}

function calcularEdad(nacimiento) {
  const fechaActual = new Date();
  const anioActual = parseInt(fechaActual.getFullYear());
  const mesAcutal = parseInt(fechaActual.getMonth()) + 1;
  const diaActual = parseInt(fechaActual.getDate());

  const anioNacimiento = parseInt(String(nacimiento).substring(0, 4));
  const mesNacimiento = parseInt(String(nacimiento).substring(5, 7));
  const diaNacimiento = parseInt(String(nacimiento).substring(8, 10));

  var edad = anioActual - anioNacimiento;

  if (mesAcutal < mesNacimiento) {
    edad = edad - 1;
  } else if (mesAcutal == mesNacimiento) {
    if (diaActual < diaNacimiento) {
      edad = edad - 1;
    }
  }

  return edad;
}

function calcularInscripcion() {
  const fechaActual = new Date();

  var inscripcion =
    dias[fechaActual.getDay()] +
    " , " +
    fechaActual.getDate() +
    " de " +
    meses[fechaActual.getMonth()] +
    " de " +
    fechaActual.getFullYear();

  return inscripcion;
}

function Carreras(req, res) {
  if (req.params.Carrera == "") {
    Usuarios.find((error, usuariosEncontrados) => {
      if (error) return res.status(500).send({ Error: "Error" });
      return res.status(200).send({ UsuariosCarrera: usuariosEncontrados });
    });
  } else {
    Usuarios.find(
      { tipoCarrera: req.params.Carrera },
      (error, usuariosEncontrados) => {
        if (error) return res.status(500).send({ Error: "Error" });
        return res.status(200).send({ UsuariosCarrera: usuariosEncontrados });
      }
    );
  }
}

function reportePoesia(req, res) {
  if (req.params.Tipo == "default" || !req.params.Tipo) {
    Usuarios.find((error, usuariosEncontrados) => {
      if (error) return res.status(500).send({ Error: "Error" });
      return res.status(200).send({ UsuariosPoesia: usuariosEncontrados });
    });
  } else {
    Usuarios.find(
      { generoPoesia: req.params.Tipo },
      (error, usuariosEncontrados) => {
        if (error) return res.status(500).send({ Error: "Error" });
        return res.status(200).send({ UsuariosPoesia: usuariosEncontrados });
      }
    );
  }
}

function tipoCarrera(tipoCarrera) {
  var tipo;
  switch (tipoCarrera) {
    case "Informática":
      return (tipo = "informatica");
    case "Electrónica":
      return (tipo = "electronica");
    case "Electricidad":
      return (tipo = "electricidad");
    case "Dibujo":
      return (tipo = "dibujo");
  }
}

module.exports = {
  registro,
  Carreras,
  reporte,
  reportePoesia,
};
