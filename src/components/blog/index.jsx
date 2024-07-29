
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home/counter-area";
import Postbox from "./postbox";

const Blog = () => {
  return (
    <>
      <Breadcrumb title="Noticias" subtitle="Noticias" isDbbl="Comunidad" />
      <Postbox />
    </>
  );
};

export default Blog;
