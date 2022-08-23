import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { DataContext } from "../context/Context";

function BasicExample() {
  const { poesias } = useContext(DataContext);
  /*   const [poesias, setPoesias] = useState([]); */
  const [carrera, setCarrera] = useState("");
  const [poesia, setPoesia] = useState();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Universidad de Guatemala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/registro">Inscribete</Nav.Link>
            <NavDropdown title="Reporte" id="basic-nav-dropdown">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalc"
                className="dropdown-item"
              >
                Por carrera
              </button>
              <NavDropdown.Item href="/reportes">Reporte General</NavDropdown.Item>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="dropdown-item"
              >
                Por género de poesía.
              </button>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/reporteFechas">
                Por Fecha
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Poesias
              </h5>
            </div>
            <div className="modal-body">
              <select
                name="generoPoesia"
                type="text"
                className="form-control"
                required
                value={poesia}
                onChange={(n) => {
                  setPoesia(n.target.value);
                }}
              >
                <option selected disabled hidden value={""}>
                  Selecciona
                </option>
                {poesias.map((p) => (
                  <option key={p._id} value={p._id}>
                    {p.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <Link to={`/reportePoesia/${poesia}`}>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-success"
                >
                  Enviar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalc"
        tabIndex="-1"
        aria-labelledby="exampleModalLabelc"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabelc">
                Selecciona una carrera
              </h5>
            </div>
            <div className="modal-body">
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
                  Selecciona tu carrera
                </option>
                <option value={"informatica"}>Informática</option>
                <option value={"electronica"}>Electrónica</option>
                <option value={"electricidad"}>Electricidad</option>
                <option value={"dibujo"}>Dibujo</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <Link to={`/reporteCarreras/${carrera}`}>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-success"
                >
                  Enviar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default BasicExample;
