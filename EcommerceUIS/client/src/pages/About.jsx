import athleticUis from "../assets/img/athleticUis.png";
import ecoCampus from "../assets/img/ecoCampus.png";
import uisEssentials from "../assets/img/uisEssentials.png";
import urbanSpirit from "../assets/img/urbanSpirit.png";
import portadaAbout from "../assets/img/portadaAbout.png";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  return (
    <>

      {/* About Section */}
      <section className="bg-success py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1>Sobre Nosotros</h1>
              <p>
                UIS Shop es la tienda en línea oficial de la Universidad Industrial de Santander,
                creada por estudiantes para la comunidad UIS. Nuestro objetivo es facilitar
                que todos puedan acceder a productos universitarios de calidad, desde ropa hasta accesorios,
                todos diseñados con orgullo por nuestra institución.
              </p>
            </div>
            <div className="col-md-4">
              <img src={portadaAbout}/>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5" style={{ backgroundColor: "#f1f3f5" }}>
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Nuestros Servicios</h1>
            <p>
              Vamos más allá de simplemente vender productos. Nuestra plataforma está diseñada
              para ofrecer una experiencia de compra completa, desde entregas rápidas hasta un soporte amigable.
              Esto es lo que hace que UIS Shop se destaque:
            </p>
          </div>
        </div>
        <div className="row">
          {[
            { icon: "fa-truck", title: "Servicios de Entrega" },
            { icon: "fa-exchange-alt", title: "Envíos y Devoluciones" },
            { icon: "fa-percent", title: "Promociones" },
            { icon: "fa-user", title: "Atención 24 Horas" },
          ].map((service, i) => (
            <div className="col-md-6 col-lg-3 pb-5" key={i}>
              <div className="h-100 py-5 services-icon-wap shadow">
                <div className="h1 text-success text-center">
                  <i className={`fa ${service.icon} fa-lg`}></i>
                </div>
                <h2 className="h5 mt-4 text-center">{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-5" style={{ backgroundColor: "#d6d8db" }}>

              <div className="container my-4">
                <div className="row text-center py-3">
                  <div className="col-lg-6 m-auto">
                    <h1 className="h1">Nuestras Marcas</h1>
                    <p>
                      Colaboramos con marcas de confianza que comparten nuestra pasión por la calidad,
                      la comodidad y el orgullo universitario. Descubre a algunos de nuestros socios a continuación.
                    </p>
                  </div>

                  <div className="col-lg-8 m-auto">
                    <div
                      id="templatemo-slide-brand"
                      className="carousel slide"
                      data-bs-ride="false"
                      data-bs-interval="false"
                    >
                      <div className="carousel-inner text-center">
                        <div className="carousel-item active">
                          <img
                            className="img-fluid d-block mx-auto"
                            src={athleticUis}
                            alt="Athletic UIS"
                            style={{ maxHeight: "200px" }}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="img-fluid d-block mx-auto"
                            src={ecoCampus}
                            alt="Eco Campus"
                            style={{ maxHeight: "200px" }}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="img-fluid d-block mx-auto"
                            src={uisEssentials}
                            alt="UIS Essentials"
                            style={{ maxHeight: "200px" }}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="img-fluid d-block mx-auto"
                            src={urbanSpirit}
                            alt="Urban Spirit"
                            style={{ maxHeight: "200px" }}
                          />
                        </div>
                      </div>

                      {/* Controles */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#templatemo-slide-brand"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#templatemo-slide-brand"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  );
};

export default About;
