import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home/counter-area";
import CourseListArea from "./course-list-area";

const CourseList = () => {
  return (
    <>
      <Breadcrumb title="Eventos" subtitle="Eventos" />
      <CourseListArea />
    </>
  );
};

export default CourseList;
