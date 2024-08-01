import our_course_data from "@/src/data/our-course-data.js";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import api from "../../pages/api/api";
import moment from 'moment';
import Swal from "sweetalert2";
import esLocale from "moment/locale/es";


const InstructorPortfolioArea = () => {

  const [modal, setModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [roles, setRoles] = useState([]);
  const [churches, setChurches] = useState([]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    username: "",
    church: "",
    role: "",
    birthdate: "",
    photo: "",
    events: [],
  });

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      window.location.href = "/iniciar-sesion";
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getChurches();
      getRoles();
      getUser();
    }
  }, []);

  const getUser = async () => {
    await api.get("/user/", {
        params: {
          email: localStorage.getItem("email"),
        },
    })
    .then((response) => {
      setForm(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const getRoles = async () => {
    try {
      const response = await api.get("/roles/");
      setRoles(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getChurches = async () => {
    try {
      const response = await api.get("/churches/");
      setChurches(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append("first_name", form.first_name);
    formData.append("last_name", form.last_name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("username", form.username);
    formData.append("church", form.church);
    formData.append("role", form.role);
    formData.append("birthdate", form.birthdate);
    if (photo) {
      formData.append("photo", photo);
    }
    
    await api.put(`/edit/`, formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "Perfil actualizado correctamente",
        showConfirmButton: true,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#f96332",
      }).then(() => {
        setModal(!modal);
        getUser();
      });
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Ha ocurrido un error al actualizar el perfil",
        showConfirmButton: true,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#f96332",
      });
    });
  };


  return (
    console.log(form),
      <section
        className="instructor-portfolio pt-40 pb-80"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  <img
                    src={form.photo || "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"}
                    alt="instructor-thumb"
                  />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      {form.first_name} {form.last_name}
                    </h4>
                    <p>
                      {form.role !== 'null' ? roles.find(role => role.id === form.role)?.name : "N/A"} en {form.church !== 'null' ? churches.find(church => church.id === form.church)?.name : "N/A"}
                    </p>
                  </div>
                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Usuario</label>{" "} <span>@{form.username}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Telefono</label> <span>{form.phone !== 'null' ? form.phone : "N/A"}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Correo</label> <span>{form.email}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-calendar"></i>{" "}
                        <label>Edad</label> <span>{form.birthdate !== 'null' ? new Date().getFullYear() - new Date(form.birthdate).getFullYear()+" años" : "N/A"}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="instruc-side-btn text-center mb-40">
                    <a className="ins-btn2" onClick={() => setModal(!modal)}>
                      Editar Perfil
                    </a>
                  </div>
                  <div className="instruc-side-btn text-center mb-40">
                    <a className="ins-btn" onClick={logout}>
                      Cerrar Sesión
                    </a>
                  </div>
                  {/* <div className="c-details-social">
                    <h5 className="cd-social-title mb-25">Follow More:</h5>
                    <Link href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instructor-tp-course">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="instruc-biography">
                        <h2 className="ins-bio-title mb-35">Eventos que me interesan</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {form.events ? form.events.map((event, i) => (
                      <div className="col-xl-6 col-lg-12 col-md-6">
                        <div className="tpcourse mb-40">
                          <div className="tpcourse__thumb p-relative w-img fix">
                            <Link href={`/eventos/${event.id}/${event.name.replace(/ /g, "-").toLowerCase()}`}>
                              <img src={event.image || "https://archive.org/download/placeholder-image/placeholder-image.jpg"} alt="course-thumb" />
                            </Link>
                          </div>
                          <div className="tpcourse__content-2">
                            <div className="tpcourse__ava-title mb-15">
                              <h4 className="tpcourse__title">
                                <Link href={`/eventos/${event.id}/${event.name.replace(/ /g, "-").toLowerCase()}`}>
                                  {event.name}
                                </Link>
                              </h4>
                            </div>
                            <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                              <ul className="d-flex align-items-center">
                                <li>
                                  <span>{moment(event.datetime).format('LL')} a las {moment(event.datetime).format('LT')} horas</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )) : 
                    <div>
                      <h3>No hay eventos</h3>
                    </div>
                    }
                  </div>
                  <div className="basic-pagination">
                    <nav>
                      <ul>
                        <li>
                          <Link href="/blog">
                            <i className="far fa-angle-left"></i>
                          </Link>
                        </li>
                        <li>
                          <span className="current">1</span>
                        </li>
                        <li>
                          <Link href="/blog">2</Link>
                        </li>
                        <li>
                          <Link href="/blog">3</Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="far fa-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className={modal ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 mt-20 overflow-y-auto" : "hidden"}>
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 mb-4">
                          
                          <div className="flex items-center space-x-2">
                            <img src={photoURL || form.photo || "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"} alt="profile" className="sm:w-32 sm:h-32 w-28 h-28 rounded-full mr-4" />
                            <h3 className="text-xl font-semibold text-gray-900">
                              Editar Perfil
                            </h3>
                          </div>
                          <button 
                            type="button" 
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                            onClick={() => {
                              setModal(!modal);
                              getUser();
                            }}
                          >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                      </div>
                      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 mb-4">
                          <label className="block">
                            <span className="text-gray-700 dark:text-gray-400">Nombres</span>
                            <input
                              type="text"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              placeholder="Nombre"
                              value={form.first_name}
                              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                            />
                          </label>
                          <label className="block">
                            <span className="text-gray-700 dark:text-gray-400">Apellidos</span>
                            <input
                              type="text"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              placeholder="Apellidos"
                              value={form.last_name}
                              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                            />
                          </label>
                          <label className="block">
                            <span className="text-gray-700 dark:text-gray-400">Correo</span>
                            <input
                              type="email"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              placeholder="Correo"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                          </label>
                          <label className="block">
                            <span className="text-gray-700 dark:text-gray-400">Telefono</span>
                            <input
                              type="text"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              placeholder="Telefono"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            />
                          </label>
                          <label className="block">
                            <span className="text-gray-700 dark:text-gray-400">Foto de Perfil</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              onChange={(e) => {
                                setPhotoURL(URL.createObjectURL(e.target.files[0]));
                                setPhoto(e.target.files[0]);
                              }}
                            />
                          </label>
                          <label className="block">
                            <span className="text-gray-700 dark:text-gray-400">Usuario</span>
                            <input
                              type="text"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              placeholder="Usuario"
                              value={form.username}
                              onChange={(e) => setForm({ ...form, username: e.target.value })}
                            />
                          </label>
                          <label className="block">
                            <span className="text-gray-700 dark:text-gray-400">Iglesia</span>
                            <select
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              value={form.church}
                              onChange={(e) => setForm({ ...form, church: e.target.value })}
                            >
                              <option value="">Selecciona una iglesia</option>
                              {churches.map((church, i) => (
                                <option key={i} value={church.id}>
                                  {church.name}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label className="block">
                            <span className="text-gray-700 dark:text-gray-400">Rol</span>
                            <select
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              value={form.role}
                              onChange={(e) => setForm({ ...form, role: e.target.value })}
                            >
                              <option value="">Selecciona un rol</option>
                              {roles.map((role, i) => (
                                <option key={i} value={role.id}>
                                  {role.name}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label className="block">
                            <span className="text-gray-700 dark:text-gray-400">Fecha de Nacimiento</span>
                            <input
                              type="date"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              placeholder="Fecha de Nacimiento"
                              value={form.birthdate}
                              onChange={(e) => setForm({ ...form, birthdate: e.target.value })}
                            />
                          </label>
                      </div>
                      <div className="flex justify-end mt-4">
                        <button
                          type="button"
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
                          onClick={() => {
                            handleSubmit();
                          }}
                        >
                          Guardar
                        </button>

                        <button
                          type="button"
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none ms-2"
                          onClick={() => {
                            setModal(!modal);
                            getUser();
                          }}
                        >
                          Cancelar
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default InstructorPortfolioArea;
