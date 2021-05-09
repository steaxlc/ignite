import React from 'react'
//styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {useSelector} from 'react-redux'

const GamesDetail = () => {

    //data
    const {screen,game} = useSelector((state) => state.detail)

    return (
        <CardShadow>
            <Detail>
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <div className="info">
                        <h3>Plataforms</h3>
                        <div className="plataform">
                        {game.platforms.map((data) => (
                                <h3 key={data.platform.id}> {data.platform.name} </h3>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt="image"/>
                </div>
                <div className="description">
                    <p> {game.description_raw} </p>
                </div>
                <div className="gallery">
                    {screen.results.map((screen) => (
                        <img src={screen.image} key ={screen.id} alt="game"/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
    )
}

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 15rem;
    background: white;
    left: 10%;
    color: black;
    img{
        width:100%;
    }
`;

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`;

export default GamesDetail
