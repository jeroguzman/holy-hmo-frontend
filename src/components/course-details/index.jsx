
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home/counter-area";
import CourseArea from "./course-area";
import CourseDetailsArea from "./course-details-area";

const CourseDetails = () => {
  return (
    <>
      <Breadcrumb title="Nombre evento" subtitle="Nombre evento" isDbbl="Eventos" />
      <CourseDetailsArea />
      <CourseArea />
      <CounterArea />
    </>
  );
};

export default CourseDetails;
