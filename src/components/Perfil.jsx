import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { hotels } from "../data/hotels.json";
import "./Perfil.css";

const Perfil = () => {
  const hotel = hotels[1];
  const hotelOne = hotels[2];
  const hotelTwo = hotels[3];

  const [userProfile, setUserProfile] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    correo: "",
    telefono: "",
    biografia: "",
    foto_perfil: "",
    fondo_perfil: "",
  });

  const [backupProfile, setBackupProfile] = useState(null); // Copia de respaldo
  const [isEditing, setIsEditing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  //Para actualizar la foto y fondo de perfil que cargue al nomas cambiarla
  const [updatePerfil, setUpdatePerfil] = useState(false);
  const [updateBackgroundPerfil, setUpdateBackgroundPerfil] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      axios
        .get(`http://localhost:5000/api/users/profile/${userId}`)
        .then((response) => {
          setUserProfile(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener el perfil", error);
        });
    }
    setUpdatePerfil(false);
    setUpdateBackgroundPerfil(false);
  }, [updatePerfil, updateBackgroundPerfil]);

  // Manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  //Tratando de agregar la imagen al perfil
  const handleSave = () => {
    const userId = localStorage.getItem("userId");

    // Crear un FormData para enviar la imagen y los datos
    const formData = new FormData();
    formData.append("id_usuario", userId);

    // Solo añadir los campos que no están vacíos
    if (userProfile.nombre) {
      formData.append("nombre", userProfile.nombre);
    }
    if (userProfile.apellido) {
      formData.append("apellido", userProfile.apellido);
    }
    if (userProfile.direccion) {
      formData.append("direccion", userProfile.direccion);
    }
    if (userProfile.correo) {
      formData.append("correo", userProfile.correo);
    }
    if (userProfile.telefono) {
      formData.append("telefono", userProfile.telefono);
    }
    if (userProfile.biografia) {
      formData.append("biografia", userProfile.biografia);
    }
    if (userProfile.foto_perfil) {
      formData.append("foto_perfil", userProfile.foto_perfil);
    }
    if (userProfile.fondo_perfil) {
      formData.append("fondo_perfil", userProfile.fondo_perfil);
    }

    axios
      .post("http://localhost:5000/api/users/editUser", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Perfil actualizado con éxito");
        setIsEditing(false); // Salir del modo edición
        setUpdatePerfil(true);
      })
      .catch((error) => {
        console.error("Error al actualizar el perfil", error);
      });
  };

  const selectedHandler = (e) => {
    if (e.target.name === "foto_perfil") {
      setUserProfile({
        ...userProfile,
        foto_perfil: e.target.files[0],
      });
    } else if (e.target.name === "fondo_perfil") {
      setUserProfile({
        ...userProfile,
        fondo_perfil: e.target.files[0],
      });
    }
  };

  // Para entrar en modo edición y hacer copia de respaldo del perfil
  const handleEdit = () => {
    setBackupProfile({ ...userProfile }); // Hacer una copia del perfil actual
    setIsEditing(true);
  };

  // Cancelar la edición y restaurar la copia de respaldo
  const handleCancel = () => {
    setUserProfile(backupProfile); // Restaurar la copia del perfil
    setIsEditing(false);
  };

  //Manejar el cambio de estado de seguimiento
  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
  };

  if (!userProfile) {
    return <div>Cargando...</div>; // Mostrar mientras se cargan los datos
  }

  return (
    <>
      <Navbar />
      <div>
        <section className="FondoPerfil">
          <img
            src={
              userProfile.fondo_perfil
                ? `http://localhost:5000/${userProfile.fondo_perfil}`
                : "https://q-xx.bstatic.com/xdata/images/hotel/840x460/590620459.jpg?k=58c33c7be261eb2ce7870de19941b86fc9ebef9f6cac036391304917e91aa09d&o="
            }
            alt="Fondo de perfil"
            className="FondoPerfil profile-picture w-100"
          />
        </section>
        <div className="infoPerfil d-md-flex justify-content-around align-items-center p-3">
          <div className="col-12 col-md-6">
            <img
              src={
                userProfile.foto_perfil
                  ? `http://localhost:5000/${userProfile.foto_perfil}`
                  : "https://statusenergy.ca/wp-content/uploads/2018/12/no-image.png"
              }
              alt="Foto de perfil"
              className="profile-picture"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />

            <div>
              {!isEditing ? (
                <>
                  <p className="fw-bold fs-3">
                    {userProfile.nombre} {userProfile.apellido}
                  </p>
                  <p>
                    <i className="bi bi-file-person-fill me-1"></i>
                    Sobre mi:{" "}
                    <span className="fw-bold">{userProfile.biografia}</span>
                  </p>
                  <p>
                    <i className="bi bi-geo-alt-fill me-1"></i>
                    Vive en:{" "}
                    <span className="fw-bold">{userProfile.direccion}</span>
                  </p>
                  <p>
                    <i className="bi bi-phone-fill me-1"></i>
                    Teléfono:{" "}
                    <span className="fw-bold">{userProfile.telefono}</span>
                  </p>
                  <p>
                    <i className="bi bi-person-lines-fill me-1"></i>
                    Más de <span className="fw-bold">400</span> contactos
                  </p>
                  <button className="btn btn-success" onClick={handleEdit}>
                    Editar perfil
                  </button>
                </>
              ) : (
                <>
                  <p className="mb-1 fw-bold">Nombre(s):</p>
                  <input
                    type="text"
                    name="nombre"
                    value={userProfile.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="form-control mb-2"
                  />
                  <p className="mb-1 fw-bold">Apellido(s):</p>
                  <input
                    type="text"
                    name="apellido"
                    value={userProfile.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    className="form-control mb-2"
                  />
                  <p className="mb-1 fw-bold">Dirección:</p>
                  <input
                    type="text"
                    name="direccion"
                    value={userProfile.direccion}
                    onChange={handleChange}
                    placeholder="Dirección"
                    className="form-control mb-2"
                  />
                  <p className="mb-1 fw-bold">Teléfono:</p>
                  <input
                    type="text"
                    name="telefono"
                    value={userProfile.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className="form-control mb-2"
                  />
                  <p className="mb-1 fw-bold">Biografía:</p>
                  <textarea
                    name="biografia"
                    value={userProfile.biografia}
                    onChange={handleChange}
                    placeholder="Biografía"
                    className="form-control mb-2"
                  />

                  {/* para agregar img al perfil */}
                  <div className="container mb-2">
                    <div className="card p-3">
                      <div className="">
                        <div className="col-9">
                          <p className="m-0 p-0 fw-bold">Foto de perfil</p>
                          <input
                            id="fileInput"
                            name="foto_perfil"
                            onChange={selectedHandler}
                            className="form-control"
                            type="file"
                          />
                          <p className="m-0 p-0 fw-bold">Fondo de perfil</p>
                          <input
                            id="fileInput"
                            name="fondo_perfil"
                            onChange={selectedHandler}
                            className="form-control"
                            type="file"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary me-2" onClick={handleSave}>
                    Guardar
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancelar
                  </button>
                </>
              )}
            </div>
            <div className="text-center mt-3">
              <button
                className={`btn ${
                  isFollowing ? "btn-info" : "btn-primary"
                } me-2`}
                onClick={handleFollowToggle}
              >
                {isFollowing ? "Siguiendo" : "Seguir"}
              </button>
              <button className="btn btn-secondary">Más...</button>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-center">Reservas recientes</h3>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <div className="me-4 w-sm-50 w-md-auto text-center">
                <img
                  className="img-hotel rounded-circle"
                  src={hotel.photo1}
                  alt=""
                />
                <p className="text-success fw-bold">{hotel.hotel_name}</p>
              </div>
              <div className="me-4 w-sm-50 w-md-auto text-center">
                <img
                  className="img-hotel rounded-circle"
                  src={hotelOne.photo1}
                  alt=""
                />
                <p className="text-success fw-bold">{hotelOne.hotel_name}</p>
              </div>
              <div className="me-4 w-sm-50 w-md-auto text-center">
                <img
                  className="img-hotel rounded-circle"
                  src={hotelTwo.photo1}
                  alt=""
                />
                <p className="text-success fw-bold">{hotelTwo.hotel_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ir a las imagenes compartidas */}
      <div className="m-auto w-50 shadow p-3 mb-5 bg-primary rounded bg-opacity-25">
        <section className="text-center">
          <h3>
            Te gustaría compartir fotografías de tu diversión con{" "}
            <span className="text-primary">Traveluxe</span>
          </h3>
          <Link
            to="/pictures"
            className="btn btn-link text-decoration-none text-light"
          >
            <button type="button" className="btn btn-primary">
              Compartir
            </button>
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Perfil;
