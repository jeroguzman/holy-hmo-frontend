import React from "react";
import SEO from "../common/seo";
import SignIn from "../components/sign-in";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Inicio de Sesión"} />
      <SignIn />
    </WrapperFour>
  );
};

export default index;
