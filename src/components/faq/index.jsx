import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home/counter-area";
import FaqArea from "./faq-area";

const FAQ = () => {
  return (
    <>
      <Breadcrumb title="Enseñanzas"  subtitle="Enseñanzas"  isDbbl="Comunidad"/>
      
      <FaqArea />
    </>
  );
};

export default FAQ;
