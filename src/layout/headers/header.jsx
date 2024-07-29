import useSticky from '@/hooks/use-sticky';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import NavMenu from './nav-menu';
import Sidebar from './sidebar';


// category_data
const category_data = [
    {title: "Bangla Medium"},
    {title: "English Medium"},
    {title: "Video Edition"},
    {title: "Logo Design"},
    {title: "Francy Medium"},
  
  ]

const HeaderTwo = () => {

   const {sticky} = useSticky()
   const [isActive, setIsActive] = useState(false);
   const [username, setUsername] = useState("");

   useEffect(() => {
      if (typeof window !== "undefined") {
         setUsername(localStorage.getItem("username") || "");
      }
   }, []);

   return (
        <>
    <header className="header_white_area d-none d-xl-block">
      <div className="header__area pt-40 pb-5">
         <div className="main-header">
            <div className="container">
               <div className="row align-items-center justify-content-between">
                  <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-5 col-6">
                     <div className="logo-area d-flex align-items-center">
                        <div className="logo">
                           <Link href="/">
                              <h1 className="text-black">Holy HMO</h1>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className={`header-menu-area ${sticky ? "header-sticky" : ""}`} id="header-sticky">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-xl-9 col-lg-6 text-start">
                  <div className="main-menu main-menu-white">
                     <nav id="mobile-menu">
                        <NavMenu />
                     </nav>
                  </div>
               </div>
               <div className="col-xxl-3 col-xl-3 col-lg-6 d-flex align-items-center justify-content-end">
                  <div className="header-meta-green">
                     <ul style={{display: "flex", alignItems: "center", justifyContent: "center", listStyle: "none"}}>
                        {username !== '' ? <li><Link href="/mi-perfil"><i className="fi fi-rr-user"></i></Link></li> : <li><Link href="/iniciar-sesion"><i className="fi fi-rr-user"></i></Link></li>}
                        <li 
                           style={{padding:8, paddingTop: 8}}
                        >
                           <span>{username !== '' ? '@'+username : "Iniciar Sesión"}</span>
                        </li>
                        <li><a href="#" className="tp-menu-toggle d-xl-none"><i className="icon_ul"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>

   <div id="header-mob-sticky" className={`mobile-header-area mob-white-sticky d-xl-none ${sticky ? "header-sticky" : ""}`}>
      <div className="container">
         <div className="row align-items-center">
            <div className="col-md-6 col-5">
               <div className="logo">
                  <Link href="/">
                     <h1 className="text-black">Holy HMO</h1>
                  </Link>
               </div>
            </div>
            <div className="col-md-6 col-7 d-flex align-items-center justify-content-end">
               <div className="header-meta-green text-end">
                  <ul>
                     <li><p>{username !== "" ? username : "Iniciar Sesión"}</p></li>
                     <li><Link href="/sign-in"><i className="fi fi-rr-user"></i></Link></li>
                     <li><a href="#"  onClick={() => setIsActive(true)} className="tp-menu-toggle d-xl-none"><i className="icon_ul"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>

   <Sidebar isActive={isActive} setIsActive={setIsActive}  />
        </>
    );
};

export default HeaderTwo;