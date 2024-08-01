import React, {useState} from "react";
import SEO from "../../../common/seo";
import CourseDetails from "../../../components/course-details";
import WrapperFour from "../../../layout/wrapper-4";

const index = () => {

  const [evento, setEvento] = useState(null);

  return (
    <WrapperFour>
      <SEO pageTitle={evento} />
      <CourseDetails setEvento={setEvento}/>
    </WrapperFour>
  );
};

export default index;
