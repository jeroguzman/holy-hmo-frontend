import Link from "next/link";
import React from "react";

const BlogMasonryArea = () => {
  return (
    <>
      <section className="blog-area pt-110 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-65 text-center">
                <h2 className="tp-section-title mb-20">Lugares de Interés</h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            
              <div className="col-lg-4 col-md-6">
                <div
                  className="tp-blog mb-40"
                >
                  <div className="tp-blog__thumb p-relative">
                    <div className="fix blog-round">
                      <Link href="/blog-details">
                        <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="blog-img" />
                      </Link>
                    </div>
                  </div>
                  <div className="tp-blog__content blog-box p-relative">
                    <h3 className="tp-blog__title mb-15 mt-20">
                      <Link href="/blog-details">Nombre del lugar</Link>
                    </h3>
                    <p>Descripción del lugar</p>
                    <span>
                      <p>Dirección</p>
                    </span>
                  </div>
                </div>
              </div>
         
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMasonryArea;
