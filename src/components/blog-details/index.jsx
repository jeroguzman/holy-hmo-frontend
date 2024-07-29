
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home/counter-area";
import PostboxBlogDetails from "./postbox-blog-details";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title="Nombre noticia" subtitle="Nombre noticia" isDbbl="Noticias" />
      <PostboxBlogDetails />
      <CounterArea />
    </>
  );
};

export default BlogDetails;
