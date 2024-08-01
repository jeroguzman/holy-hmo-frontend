
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home/counter-area";
import BlogMasonryArea from "./blog-masonry-area";

const BlogMasonry = () => {
  return (
    <>
      <Breadcrumb title="Lugares" subtitle="Lugares" />
      <BlogMasonryArea />
    </>
  );
};

export default BlogMasonry;
