import React from 'react';
import SEO from '../common/seo';
import Home from '../components/homes/home';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Inicio"} />
            <Home />
        </Wrapper>
    );
};

export default index;