import React, { useState,  useContext } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";



import "../style/styleG.css";
import { DataContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const { poesias } = useContext(DataContext);

  const [fecha, setFecha] = useState(Date);
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [genero, setGenero] = useState("");
  const [telefono, setTelefono] = useState("");
  const [carrera, setCarrera] = useState("");
  const [poesia, setPoesia] = useState("");
  const [carnet, setCarnet] = useState("");

  var navigate = useNavigate();

  const agregarUsuario = (event) => {
    var usuario = {
      nombre: nombre,
      direccion: direccion,
      genero: genero,
      telefono: telefono,
      nacimiento: fecha,
      carrera: carrera,
      generoPoesia: poesia,
      carnet: carnet,
    };
    event.preventDefault();
    axios
      .post("http://localhost:3000/prueba/registro", usuario)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Registro exitoso.",
        }).then(navigate("/"));
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.response.data.Error,
        });
      });
  };

  return (
    <>
      <Navbar />
      <form>
        {""}
        <div className="form">
          <div className="form-body">
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      required
                      placeholder="Nombre"
                      name="nombre"
                      value={nombre}
                      onChange={(n) => {
                        setNombre(n.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    name="direccion"
                    value={direccion}
                    onChange={(n) => {
                      setDireccion(n.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Dirección"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col">
                <select
                  name="generoPoesia"
                  value={poesia}
                  onChange={(n) => {
                    setPoesia(n.target.value);
                  }}
                  type="text"
                  className="form-control"
                  required
                  placeholder="Género de poesía"
                >
                  <option selected disabled hidden value={""}>
                    Elige el género de Poesía
                  </option>
                  {/*          <button>Crear nuevo genero</button> */}
                  {poesias.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.nombre}
                    </option>
                  ))}
                </select>
                <br />
              </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <select
                    name="genero"
                    value={genero}
                    onChange={(n) => {
                      setGenero(n.target.value);
                    }}
                    type="text"
                    className="form-control"
                    required
                    placeholder="Género"
                  >
                    <option value={""} disabled selected hidden>
                       Género
                    </option>
                    <option value={"Masculino"}>Masculino</option>
                    <option value={"Femenino"}>Femenino</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    name="telefono"
                    value={telefono}
                    onChange={(n) => {
                      setTelefono(n.target.value);
                    }}
                    type="text"
                    className="form-control"
                    required
                    placeholder="Teléfono"
                  />
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
            <label className="form-label">Fecha de nacimiento</label>
              <input
                type="date"
                max="2005-01-01"
                className="form-control"
                required
                name="nacimiento"
                value={fecha}
                onChange={(n) => {
                  setFecha(n.target.value);
                }}
              />
            </div>
            <div className="row mb-4">
          
              <div className="col">
                <div className="form-outline">
                  <select
                    name="carrera"
                    value={carrera}
                    onChange={(n) => {
                      setCarrera(n.target.value);
                    }}
                    className="form-control"
                    type="text"
                    required
                    placeholder="Carrera"
                  >
                    <option value={""} disabled selected hidden>
                      Cual es tu Carrera
                    </option>
                    <option value={"Informática"}>Informática</option>
                    <option value={"Electrónica"}>Electrónica</option>
                    <option value={"Electricidad"}>electricidad</option>
                    <option value={"Dibujo"}>Dibujo</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input
                name="carnet"
                value={carnet}
                onChange={(n) => {
                  setCarnet(n.target.value);
                }}
                type="text"
                className="form-control"
                required
                minLength={6}
                maxLength={6}
                placeholder="Carnet"
                formNoValidate={false}
              />
            </div>
          </div>
          <div className="footer">
            <button onClick={agregarUsuario} className="btn btn-success">
              Continuar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Registro;
