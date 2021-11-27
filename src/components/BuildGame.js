import React,{Fragment} from "react";
import styled from "styled-components";

const Img = styled.div`
    width: 100px;
    height: 100px;
    background-size: cover;
`;
const BuildGame = (params) => {
    return (
        <Fragment>
            <div className="game">
                <Img
                    className="img"
                    style={{
                        background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}>
                </Img>        
            </div>
            <div className="game">
                <Img
                    className="img"
                    style={{
                        background: "url('https://tecnogaming.com/wp-content/uploads/2013/04/GTA-V-portada.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}>
                </Img>        
            </div>
            <div className="game">
                <Img
                    className="img"
                    style={{
                        background: "url('https://i.blogs.es/d4d988/460742-crash-bandicoot-n-sane-trilogy-playstation-4-front-cover/450_1000.jpeg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}>
                </Img>        
            </div>
            <div className="game">
                <Img
                    className="img"
                    style={{
                        background: "url('https://i.blogs.es/d38a17/503190-ratchet-clank-going-commando-playstation-3-front-cover/450_1000.jpeg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}>
                </Img>        
            </div>
            <div className="game">
                <Img
                    className="img"
                    style={{
                        background: "url('https://www.neoteo.com/wp-content/uploads/2009/04/far-cry.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}>
                </Img>        
            </div>
            <div className="game">
                <Img
                    className="img"
                    style={{
                        background: "url('https://static1-es.millenium.gg/articles/9/38/04/9/@/178853-halo-infinite-2020-video-game-4k-hd-poster-2560x1440-article_m-1.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}>
                </Img>        
            </div>
            <div className="game">
                <Img
                    className="img"
                    style={{
                        background: "url('https://sm.ign.com/ign_es/screenshot/default/castle-of-illusion-starring-mickey-mouse-cover_zzan.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        transform: "scale(1.5)",
                    }}>
                </Img>        
            </div>
        </Fragment>
        
        
    );
}

export default BuildGame;
