import React from "react";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import axios from "axios";
import Swal from "sweetalert2";

import Navbar from "./Navbar";

const ReporteFechas = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/prueba/edades")
      .then((res) => {
        setUsuarios(res.data.UsuariosEdad);
        if (res.data.UsuariosEdad.length === 0) {
          Swal.fire({
            title: "Error",
            text: "No hay datos.",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar/>
      <MDBTable className="tabla">
        <MDBTableHead>
          <tr className="table-light">
            <th scope="col">Carnet</th>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha de registro</th>
            <th scope="col">Fecha de declamación</th>
          </tr>
        </MDBTableHead>
        {usuarios.map((users) => {
          return (
            <MDBTableBody key={users._id}>
              <tr className="table table-dark table-hover">
                <td>{users.carnet}</td>
                <th>{users.nombre}</th>
                <td>{users.inscripcion}</td>
                <td>{users.fechaDeclamar}</td>
              </tr>
            </MDBTableBody>
          );
        })}
      </MDBTable>
    </>
  );
};

export default ReporteFechas;
