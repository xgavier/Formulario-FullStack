import Navbar from "./Navbar";
import React from "react";

const Inicio = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="p-5 text-center bg-image">
          <div>
            <div className="d-flex justify-content-center align-items-center ">
              <div>
              <h1 style={{ color: "White" }}>Bienvenido al concurso de Poemas</h1>
                <br></br>
                <br></br>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Que se puede hacer
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">
                        <strong>Que se puede hacer?</strong> En esta pagina
                        puedes Inscribirte para poder participar en las
                        declamaciones, donde tambien podras ver a los
                        estudiantes inscritos por carrera, edad, género de
                        poesía y la fecha en la cual declamara.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Cual es la Finalidad
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body">
                        <strong>La Universidad de Guatemala</strong> Tiene como
                        motivo fomentar a los estudiantes de todo el país la
                        estética, ritmo, creatividad, imaginación y
                        conocimiento. La poesía no solo entretiene a los niños
                        sino que estimula su desarrollo. Algunas de las ventajas
                        de leerles poemas a las personas son: Favorece el
                        desarrollo del lenguaje ya que suele utilizar frases más
                        complejas y elaboradas que los cuentos.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="App"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Inicio;
