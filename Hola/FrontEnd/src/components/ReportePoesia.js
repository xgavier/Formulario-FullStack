import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import axios from "axios";
import Swal from "sweetalert2";

import Navbar from "./Navbar";

const ReportePoesia = () => {
  const [usuarios, setUsuarios] = useState([]);
  const valores = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/prueba/poesia/" + valores.poesia)
      .then((res) => {
        setUsuarios(res.data.UsuariosPoesia);
        console.log(valores.poesia);
        if (res.data.UsuariosPoesia.length === 0) {
          Swal.fire({
            title: "Error",
            text: "No hay datos",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [valores.poesia]);

  return (
    <>
      <Navbar />
      <br />
      <MDBTable className="tabla">
        <MDBTableHead>
          <tr className="table-light">
            <th scope="col">Carnet</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Edad</th>
          </tr>
        </MDBTableHead>
        {usuarios.map((users) => {
          return (
            <MDBTableBody key={users._id}>
              <tr className="table table-dark table-hover">
                <td>{users.carnet}</td>
                <th>{users.nombre}</th>
                <td>{users.carrera}</td>
                <td>{users.edad}</td>
              </tr>
            </MDBTableBody>
          );
        })}
      </MDBTable>
    </>
  );
};

export default ReportePoesia;
