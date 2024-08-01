import blog_data_2 from "@/src/data/blog-data-2";
import Link from "next/link";
import React from "react";

const BlogArea = () => {
  return (
    <>
      <section
        className="blog-area pt-115 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-65 text-center">
                <span className="tp-sub-title-box mb-15">Noticias</span>
                <h2 className="tp-section-title mb-20">Últimas Noticias</h2>
              </div>
            </div>
          </div>
          <div className="row">
           
              <div className="col-lg-4 col-md-6">
                <div className="tp-blog mb-60">
                  <div className="tp-blog__thumb p-relative">
                    <div className="fix blog-round">
                      <Link href="/blog-details">
                        <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="blog" />
                      </Link>
                    </div>
                    <div className="tp-blog__meta-ab">
                      <Link href="/blog-details">Categoria</Link> <span>-</span>
                    </div>
                  </div>
                  <div className="tp-blog__content blog-box p-relative">
                    <h3 className="tp-blog__title mb-15 mt-20">
                      <Link href="/blog-details">Titulo</Link>
                    </h3>
                    <p>Descripcion</p>
                    <span>
                      <i className="fi fi-rr-clock"></i> Fecha y hora
                    </span>
                  </div>
                </div>
              </div>
        
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-btn text-center">
                <Link href="/noticias" className="tp-btn">
                  Ir a Noticias
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
