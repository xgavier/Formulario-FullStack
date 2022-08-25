import React from "react";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import axios from "axios";

import Navbar from "./Navbar";

const Reporte = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/prueba/edades")
      .then((res) => {
        setUsuarios(res.data.UsuariosEdad);
        if (res.data.UsuariosEdad.length === 0) {
          Swal.fire({
            title: "Error",
            text: "No hay datos",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <MDBTable className="tabla">
        <MDBTableHead>
          <tr className="table-light">
            <th scope="col">#Id</th>
            <th scope="col">Nombres</th>
            <th scope="col">Edad</th>
            <th scope="col">Carrera</th>

            <th scope="col">Fecha de registro</th>
          </tr>
        </MDBTableHead>
        {usuarios.map((users) => {
          return (
            <MDBTableBody key={users._id}>
              <tr className="table table-dark table-striped">
                <td>{users.carnet}</td>
                <th scope="row">{users.nombre}</th>
                <td>{users.edad}</td>
                <td>{users.carrera}</td>
                <td>{users.inscripcion}</td>
              </tr>
            </MDBTableBody>
          );
        })}
      </MDBTable>
    </>
  );
};

export default Reporte;
