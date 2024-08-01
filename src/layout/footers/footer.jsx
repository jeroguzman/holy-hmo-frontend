import Link from "next/link";
import React from "react";

// footer two content data
const footer_two_content = [
  {
    id: 1,
    title: "About",
    cls: "col-xl-3",
    footer_col: "footer-2-col-2",
    ml: "ml-90",
    links: [
      { name: "About Us", link: "/about" },
      { name: "Blog", link: "/blog" },
      { name: "Careers", link: "/" },
      { name: "Jobs", link: "/about" },
      { name: "In Press", link: "/" },
      { name: "Payments", link: "/" },
    ],
  },
  {
    id: 2,
    title: "Support",
    cls: "col-xl-2",
    footer_col: "footer-2-col-3",
    ml: "",
    links: [
      { name: "Contact us", link: "/contact" },
      { name: "Online Chat", link: "/contact" },
      { name: "Whatsapp", link: "/" },
      { name: "Telegram", link: "/" },
      { name: "In Press", link: "/" },
      { name: "Ticketing", link: "/" },
    ],
  },
];

// social_links
const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://www.youtube.com/",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  }
];

// footer bottom data
const footer_bottom = [
  { name: "About us", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Privacy policy", link: "/" },
  { name: "Courses", link: "/" },
  { name: "Terms of Use", link: "/" },
];


const FooterTwo = () => {
  return (
    <>
      <footer>
        <div
          className="footer-bg theme-bg-secondary"
          style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
        >
          <div className="f-border-bottom pt-115 pb-60">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <div className="footer-widget footer-widget-white footer-2-col-1 mb-55">
                    <div className="footer-widget__text mb-35">
                      <h3 className="footer-widget__title">
                        <Link href="/">
                          <img src="/assets/img/logo/logo.png"
                            alt="logo"
                            width="350px"
                          />
                        </Link>
                      </h3>
                    </div>
                    <p>
                      Somos una comunidad de jovenes en hermandad en Cristo, que
                      busca crecer en la fe.
                    </p>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 col-10">
                  <div className="footer-widget footer-widget-white footer-2-col-4 ml-30 mb-55">
                    <div className="footer-widget__text mb-35">
                      <h3 className="footer-widget__title">Redes Sociales</h3>
                    </div>
                    <p>
                      Puedes seguirnos en nuestras redes sociales para estar al
                      tanto de nuestras actividades.
                    </p>
                    <div className="footer-widget__social d-flex align-items-center">
                      {social_links.map((link, i) => (
                        <a key={i} href={link.link} target={link.target}>
                          <i className={link.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f-copyright pt-60 pb-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="f-copyright__dom">
                    <span>
                      Holy HMO© {new Date().getFullYear()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
