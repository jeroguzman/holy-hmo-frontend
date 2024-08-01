
import React, { useEffect, useState } from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CourseDetailsArea from "./course-details-area";

const CourseDetails = ({setEvento}) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    setEvento(event);
  }, [event]);
  
  return (  
    <>
      <Breadcrumb title={event} subtitle={event} isDbbl="Eventos" />
      <CourseDetailsArea setEvent={setEvent} />
    </>
  );
};

export default CourseDetails;
