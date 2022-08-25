import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import axios from "axios";
import Swal from "sweetalert2";

import Navbar from "./Navbar";

const ReporteCarrera = () => {
  const [usuarios, setUsuarios] = useState([]);
  const valores = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/prueba/carreras/" + valores.carrera)
      .then((res) => {
        setUsuarios(res.data.UsuariosCarrera);
        if (res.data.UsuariosCarrera.length === 0) {
          Swal.fire({
            title: "Erorr",
            text: "No hay datos",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [valores.carrera]);

  return (
    <>
      <Navbar />
      <MDBTable className="tabla">
        <MDBTableHead>
          <tr className="table-light">
            <th scope="col">Carnet</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Edad</th>
            <th scope="col">Fecha de registro</th>
          </tr>
        </MDBTableHead>
        {/* Retorno implicito */}
        {usuarios.map((users) => (
          <MDBTableBody key={users._id}>
            <tr className="table table-dark table-striped">
              <td>{users.carnet}</td>
              <th>{users.nombre}</th>
              <td>{users.carrera}</td>
              <td>{users.edad}</td>
              <td>{users.inscripcion}</td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
    </>
  );
};

export default ReporteCarrera;
