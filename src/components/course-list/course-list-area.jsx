import course_list_data from "@/src/data/course-list-data";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import api from "../../pages/api/api";
import moment from 'moment';
import esLocale from "moment/locale/es";

const  CourseListArea = () => {

  const [eventos, setEventos] = useState([]);
  
  useEffect(() => {
    api.get('/events/').then((res) => {
      setEventos(res.data);
    });
  }, []);

  return (
    console.log(eventos),
    <>
      <section
        className="course-list-area pb-120 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
        style={{ marginTop: "50px" }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title-box mb-15">Eventos</span>
                <h2 className="tp-section-title">Descubre los próximos eventos en tu ciudad</h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            <div className="col-lg-12 col-md-12 course-item-width">
              {eventos.map((item, i) => (
                <div key={i} className="tpcourse tp-list-course mb-40">
                  <div className="row g-0">
                    <div className="col-xl-4 course-thumb-width">
                      <div className="tpcourse__thumb p-relative w-img fix">
                        <Link href={`/eventos/${item.id}/${item.name.replace(/ /g, "-").toLowerCase()}`}>
                          <img src={item.image} alt="evento" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-8  course-text-width">
                      <div className="course-list-content">
                        <div className="tpcourse__ava-title mb-15">
                          <h4 className="font-xl">
                            <Link href={`/eventos/${item.id}/${item.name.replace(/ /g, "-").toLowerCase()}`} >
                              {item.name}
                            </Link>
                          </h4>
                        </div>
                        <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                          <ul className="d-flex align-items-center">
                            <li>
                              
                             <span>{moment(item.datetime).format('LL')} a las {moment(item.datetime).format('LT')} horas</span>
                            </li>
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-02.png"
                                alt="meta-icon"
                              />
                              <span>{item.attendance}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                          <div className="tpcourse__pricing">
                            <h6>{item.location}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="basic-pagination text-center">
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
      </section>
    </>
  );
};

export default CourseListArea;
