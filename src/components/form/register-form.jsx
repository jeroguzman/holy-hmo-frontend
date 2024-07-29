import api from "@/src/pages/api/api";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

const RegisterhtmlForm = () => {

  const [form, setForm] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const register = async (e) => {
    e.preventDefault();
    if (form.username === "" || form.first_name === "" || form.last_name === "" || form.email === "" || form.password === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios",
      });
      return;
    }
    await api.post("/register/", form)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Usuario registrado",
            text: "Usuario registrado con éxito",
          }).then(() => {
            window.location.href = "/iniciar-sesion";
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error al registrar el usuario",
        });
      });
  };


  return (
    <>
      <section
        className="login-area pt-100 pb-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Registro</h3>
                <form onSubmit={(e) => register(e)}>
                  <label htmlFor="name">
                    Nombre de Usuario <span>*</span>
                  </label>
                  <input id="username" type="text" placeholder="Usuario" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
                  <label htmlFor="first_name">
                    Nombre<span>*</span>
                  </label>
                  <input id="first_name" type="text" placeholder="Nombre" value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
                  <label htmlFor="last_name">
                    Apellidos <span>*</span>
                  </label>
                  <input id="last_name" type="text" placeholder="Apellidos" value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
                  <label htmlFor="email">
                    Correo Electronico <span>*</span>
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Correo Electronico"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <label htmlFor="password">
                    Contraseña <span>*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <div className="mt-10"></div>
                  <button className="tp-btn w-100" type="submit">
                    Registrarse
                  </button>
                  <div className="or-divide">
                    <span>o</span>
                  </div>
                  <Link href="/iniciar-sesion" className="tp-border-btn w-100">
                    Iniciar Sesión
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterhtmlForm;
