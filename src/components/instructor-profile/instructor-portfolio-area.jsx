import our_course_data from "@/src/data/our-course-data.js";
import Link from "next/link";
import React, {useEffect, useState} from "react";


const InstructorPortfolioArea = () => {

  const [user, setUser] = useState({
    username: "",
    photo: "https://t3.ftcdn.net/jpg/07/95/95/14/240_F_795951406_h17eywwIo36DU2L8jXtsUcEXqPeScBUq.jpg",
    name: "",
    email: "",
    phone: "",
    church: "",
    role: "",
  });

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      window.location.href = "/iniciar-sesion";
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser({
        ...user,
        username: localStorage.getItem("username"),
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        church: localStorage.getItem("church"),
        role: localStorage.getItem("role"),
      });
    }
  }, []);

  return (
    <>
      <section
        className="instructor-portfolio pt-120 pb-80"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  <img
                    src={user.photo}
                    alt="instructor-thumb"
                  />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      {user.name}
                    </h4>
                    <p>
                      {user.role !== 'null' ? user.role : "N/A"} en {user.church !== 'null' ? user.church : "N/A"}
                    </p>
                  </div>
                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Usuario</label>{" "} <span>@{user.username}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Telefono</label> <span>{user.phone !== 'null' ? user.phone : "N/A"}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Correo</label> <span>{user.email}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="instruc-side-btn text-center mb-40">
                    <a className="ins-btn2">
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
                    {our_course_data.slice(0, 4).map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                        <div className="tpcourse mb-40">
                          <div className="tpcourse__thumb p-relative w-img fix">
                            <Link href="/course-details">
                              <img src={item.img} alt="course-thumb" />
                            </Link>
                            <div className="tpcourse__tag">
                              <Link href="#">
                                <i className="fi fi-rr-heart"></i>
                              </Link>
                            </div>
                            <div className="tpcourse__img-icon">
                              <img src={item.icon} alt="course-avata" />
                            </div>
                          </div>
                          <div className="tpcourse__content-2">
                            <div className="tpcourse__category mb-10">
                              <ul className="tpcourse__price-list d-flex align-items-center">
                                <li>
                                  <Link
                                    className={item.ct_color}
                                    href="/course-details"
                                  >
                                    {item.course_title}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={item.cn_color}
                                    href="/course-details"
                                  >
                                    {item.course_name}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="tpcourse__ava-title mb-15">
                              <h4 className="tpcourse__title">
                                <Link href="/course-details">{item.title}</Link>
                              </h4>
                            </div>
                            <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                              <ul className="d-flex align-items-center">
                                <li>
                                  <img
                                    src="/assets/img/icon/c-meta-01.png"
                                    alt="meta-icon"
                                  />
                                  <span>{item.cls_text}</span>
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icon/c-meta-02.png"
                                    alt="meta-icon"
                                  />
                                  <span>{item.st_text}</span>
                                </li>
                              </ul>
                            </div>
                            <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                              <div className="tpcourse__rating-icon">
                                <span>4.7</span>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <p>(125)</p>
                              </div>
                              <div className="tpcourse__pricing">
                                <h5 className="price-title">$29.99</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorPortfolioArea;
