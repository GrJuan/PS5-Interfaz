import React, {Fragment} from "react";
import styled from "styled-components";


const Info = styled.div`
    width: 50%;
    margin-bottom: 3rem;
`;

const Sub = styled.span`
    font-weight: 300;
    font-size: 1.2rem;
    color: #8f97aa;
`;
const H1 = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    color: white;
`;

const P = styled.p`
    font-size: 2rem;
    font-weight: 300;
    color: #8f97aa;
`;
const SubTitle = (params) => {
    return (
        <Fragment>
            <Info>
                <Sub>
                    Official new from PlayStation | 27/11/2021
                </Sub>
                <H1>Ready for a PS5 Adventure?</H1>
                <P>
                    ASTRO's PLAYROOM is pre-loaded and waiting for you!
                    explore the new capabilities of PS5 and feel the world...
                </P>
            </Info>
        </Fragment>
    );
}

export default SubTitle;
