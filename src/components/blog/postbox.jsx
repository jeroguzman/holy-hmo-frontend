import blog_page_data from "@/src/data/blog-page-data";
import VideoPopup from "@/src/modals/video-popup";
import Link from "next/link";
import { useState, useRef } from "react";
import Slider from "react-slick";
import BlogSearch from "./blog-search";
import Category from "./category";
import RecentPost from "./recent-post";
import Tags from "./tags";

const setting = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const Postbox = () => {
  const sliderRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div
        className="postbox__area pt-120 pb-120"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="postbox__wrapper pr-20">
                  <article
                    className="postbox__item format-image mb-60 transition-3"
                  >
                    <div className="postbox__thumb w-img mb-30">
                      <Link href="/blog-details">
                        <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" />
                      </Link>
                    </div>
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>
                          <i className="fi fi-rr-calendar"></i> Fecha
                        </span>
                        <span>
                          <Link href="#">
                            <i className="fi fi-rr-user"></i> Autor
                          </Link>
                        </span>
                        <span>
                          <Link href="#">
                            <i className="fi fi-rr-comments"></i>{" "}
                            Comentarios
                          </Link>
                        </span>
                      </div>
                      <h3 className="postbox__title">
                        <Link href="/blog-details">Titulo</Link>
                      </h3>
                      <div className="postbox__text">
                        <p>Descripcion</p>
                      </div>
                      <div className="postbox__read-more">
                        <Link href="/blog-details" className="tp-btn">
                          Leer mas
                        </Link>
                      </div>
                    </div>
                  </article>
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
    </>
  );
};

export default Postbox;
