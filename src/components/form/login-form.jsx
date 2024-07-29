import Link from 'next/link';
import React, { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../pages/api/constants";
import api from "../../pages/api/api";

const LoginForm = () => {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();

      try {
            const res = await api.post('/login/', { username, password })
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('email', res.data.email);
            localStorage.setItem('name', res.data.name);
            localStorage.setItem('phone', res.data.phone);
            localStorage.setItem('church', res.data.church);
            localStorage.setItem('role', res.data.role);
            window.location.href = "/";
         } catch (error) {
            alert(error)
      } finally {
         setLoading(false)
      }
   };

   return (
        <>
        <section className="login-area pt-100 pb-100">
         <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                           <h3 className="text-center mb-60">Inicio de Sesión</h3>
                           <form onSubmit={(e) => handleSubmit(e)}>
                              <label htmlFor="name">Usuario</label>
                              <input id="name" type="text" placeholder="Ingrese su usuario..." value={username} onChange={(e) => setUsername(e.target.value)} />
                              <label htmlFor="pass">Contraseña</label>
                              <input id="pass" type="password" placeholder="Ingrese su contraseña..." value={password} onChange={(e) => setPassword(e.target.value)} />
                              <div className="mt-10"></div>
                              <button className="tp-btn w-100">Iniciar Sesión</button>
                              <div className="or-divide"><span>o</span></div>
							         <Link href="/registro" className="tp-border-btn w-100">Registrarse</Link>
                           </form>
                     </div>
                  </div>
               </div>
         </div>
      </section>
        </>
    );
};

export default LoginForm;