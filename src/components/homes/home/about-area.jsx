import Link from "next/link";
import React from "react";


// about  data
const about_two_bg ={
    img_1: "/assets/img/about/about-2-img.png",
    img_2: "/assets/img/about/about-2-shape.png",
    img_3: "/assets/img/about/shape-2-img.png",
    title: "Explore Thousands of Creative Classes.",
    des: <> Dramatically supply transparent deliverables beforese
    backward comp internal or "organic" sources. Comp
    transparent leverage other.</>
}

const {img_1, img_2, img_3, title, des} = about_two_bg

// about circle data
const about_circle = [
  {
    id: 1,
    icon: "fi fi-rr-music-alt",
    text: "Eventos",
  },
  {
    id: 2,
    icon: "fi fi-rr-laptop",
    text: "Noticias",
  },
  {
    id: 3,
    icon: "fi fi-rr-book-alt",
    text: "Enseñanzas",
  },
  {
    id: 4,
    icon: "fi fi-rr-user",
    text: "Testimonios",
  },
];

const AboutArea = () => {
  return (
    <>
      <section
        className="about--area pt-120 pb-60 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-12 col-12">
              <div className="tp-ab-circle-img p-relative mb-60">
                <img src={img_1} alt="about-img" />
                <div className="ab-circle-shape">
                  <img
                    src={img_2}
                    alt="about-shape"
                    className="ab-circle-one"
                  />
                  <img
                    src={img_3}
                    alt="about-shape"
                    className="ab-circle-two"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-12">
              <div className="tp-abcircle-content ml-65 mb-60">
                <div className="section-title mb-35">
                  <span className="tp-sub-title-box mb-15">Nosotros</span>
                  <h2 className="tp-section-title mb-20">
                    Bienvenidos a Holy HMO
                  </h2>
                  <p>
                  Holy HMO es una comunidad en línea dedicada a apoyar, inspirar y conectar a jóvenes cristianos en la ciudad de Hermosillo. Nuestro objetivo es proporcionar un espacio donde puedas crecer en tu fe, encontrar recursos útiles y establecer relaciones significativas con otros jóvenes que comparten tus creencias.
                  </p>
                </div>
                <div className="about-circle-list mb-40">
                  <ul>
                    {about_circle.map((item) => (
                      <li key={item.id}>
                        <i className={item.icon}></i>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tp-ab-circle-btn">
                  <Link href="/nosotros" className="tp-btn">
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
