import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home/counter-area";
import CourseArea from "./course-area";

const CourseGrid = () => {
  return (
    <>
      <Breadcrumb title="Testimonios" subtitle="Testimonios" isDbbl="Comunidad" />
      <CourseArea />
    </>
  );
};

export default CourseGrid;
