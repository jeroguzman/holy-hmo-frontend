import course_data_2 from "@/src/data/course-data-2";
import Link from "next/link";
import React from "react";

const CourseArea = () => {
  return (
    <>
      <section
        className="course-wrap-area bg-bottom grey-bg pt-115 pb-60"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <div className="section-title mb-65">
                <span className="tp-sub-title-box mb-15">Eventos</span>
                <h2 className="tp-section-title mb-20">
                  Nuestros próximos eventos
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-4">
              <div className="tp-course-btn mb-40 d-flex justify-content-md-end">
                <a className="tp-btn" href="/eventos">
                  Ir a eventos
                </a>
              </div>
            </div>
          </div>
          <div className="row">

              <div className="col-lg-6 col-md-12">
                <div className="tpcourse tp-wrap-course mb-40">
                  <div className="row">
                    <div className="col-xl-4 tpcourse-thumb-w">
                      <div className="tpcourse__thumb p-relative w-img fix">
                        <Link href="/course-details">
                          <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="course-thumb" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-8 tpcourse-thumb-text">
                      <div className="tp-wrap-course__content ml-5">
                        <div className="tp-wrap-course__heading">
                          <h4 className="tp-wrap-course__title mb-20">
                            <Link href="/course-details">Titulo</Link>
                          </h4>
                        </div>
                        <div className="tpcourse__meta tp-course-line pb-20 mb-25">
                          <ul className="d-flex align-items-center">
                            <li>
                              <span>Fecha y hora</span>
                            </li>
                            <li>
                              <img
                                src="/assets/img/icon/c-meta-03.png"
                                alt="meta-icon"
                              />
                              <span>Asistentes</span>
                            </li>
                          </ul>
                        </div>
                        <div className="tpcourse__category c-price-list d-flex align-items-center justify-content-between">
                          <h5 className="tpcourse__course-price c-price-pac">
                            Lugar del evento
                          </h5>
                        </div>
                      </div>
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

export default CourseArea;
