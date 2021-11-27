import React from "react";
import styled from "styled-components";
import './NavBar.css'
import BuildGame from "./BuildGame";
import SubTitle from "./SubTitle";
import Trailer from "./Traier";


const Header = styled.header`
    padding-right: 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 3px;
`;
const Font = styled.a`
    color: #8f97aa;
    font-weight: 500;
    text-decoration: none;
`;
const Media = styled.section`
    font-size: 2rem;
    color: #8f97aa;
    display: flex;
    justify-content: space-between;
    width: 250px;
    font-weight: 100;
`;

const A = styled.a`
    color: white;
    font-weight: 700;
    text-decoration: none;
    padding-left: 20px;
`;

const Settings = styled.section`
    width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`;

const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
`;
const NavBar = (params) => {
    return(
    <div>
        <Header>
            <Media>
                <A href="/#">Games</A>
                <Font href="/#">Media</Font>
            </Media>
            <Settings>
                <span className="icon">
                    <i className="fa fa-search"></i>
                </span>
                <span className="icon">
                    <i className="fa fa-cog"></i>
                </span>
                <span className="icon">
                    <img
                    className="user"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Perfil"
                    >
                    </img>
                </span>
                <span className="time"> 10: 10 AM</span>
            </Settings>
        </Header>
        <Container>
            <section className="game-nav">
                <div className="game active">
                    <i className="fa fa-location-arrow"></i>
                </div>
                <BuildGame/>
            </section>
            <SubTitle/>
            <Trailer/>
        </Container>
    </div>
    );
}

export default NavBar;
