import React,{Fragment} from "react";
import styled from "styled-components";

const Video = styled.section`
    white-space: nowrap;
    overflow-x: scroll;
    padding-left: 5%;
`;

const Trailers = styled.div`
    position: relative;
    display: inline-block;
    white-space: nowrap;
    width: 350px;
    height: 200px;
    background: linear-gradient(60deg, rgba(16,25,37,1) 0%, rgba(0,0,0,1) 50%, rgba(16,25,37,1) 100%);
    margin-right: 20px;
    opacity: 1;
    cursor: pointer;
`;

const Img = styled.img`
    transition: opacity .4s ease-in-out;
    opacity: .5;
    width: 350px;
    height: 200px;
    object-fit: cover;

    &::hover {
        opacity: 1;
    }
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    color: white;
    padding: 1rem;
`;

const Player = styled.div`
    background: white;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 60%;
    margin-bottom: 1.5rem;
`;

const Trailer = (params) => {
    return (
        <Fragment>
            <Video>
                <Trailers>
                    <Img
                        src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
                    >
                    </Img>
                    <Info>
                        <Player>
                            <i className="fa fa-play"
                            style={{color: '#000'}}
                            ></i>
                        </Player>
                        <span className="title">
                            Grand theft Auto 6
                        </span>
                    </Info>
                </Trailers>
                <Trailers>
                    <Img
                        src="https://images6.alphacoders.com/102/thumb-1920-1020775.jpg"
                    >
                    </Img>
                    <Info>
                        <Player>
                            <i className="fa fa-play"
                            style={{color: '#000'}}
                            ></i>
                        </Player>
                        <span className="title">
                            Spiderman 4
                        </span>
                    </Info>
                </Trailers>
                <Trailers>
                    <Img
                        src="https://images3.alphacoders.com/108/thumb-1920-1087064.jpg"
                    >
                    </Img>
                    <Info>
                        <Player>
                            <i className="fa fa-play"
                            style={{color: '#000'}}
                            ></i>
                        </Player>
                        <span className="title">
                            Farcry 6
                        </span>
                    </Info>
                </Trailers>
                <Trailers>
                    <Img
                        src="https://images7.alphacoders.com/932/thumb-1920-932703.jpg"
                    >
                    </Img>
                    <Info>
                        <Player>
                            <i className="fa fa-play"
                            style={{color: '#000'}}
                            ></i>
                        </Player>
                        <span className="title">
                            FIFA 22
                        </span>
                    </Info>
                </Trailers>
                <Trailers>
                    <Img
                        src="https://lh3.googleusercontent.com/proxy/WmKDrvhs_xPT7akNynVJk76sUYiu_dtVFxsVwvergiCugcT2JAhcaGiyeZieoN6F7Du3tzS6qL8qnLrALMl3EB1Pm8oEFtBz5oxg-5RHHrgMtVeBgvju1G3jUAbzTTeon1slk3jKcg"
                    >
                    </Img>
                    <Info>
                        <Player>
                            <i className="fa fa-play"
                            style={{color: '#000'}}
                            ></i>
                        </Player>
                        <span className="title">
                           DeathLoop
                        </span>
                    </Info>
                </Trailers>
            </Video>
        </Fragment>
    );
}

export default Trailer;
