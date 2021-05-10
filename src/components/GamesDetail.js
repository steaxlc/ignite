import React from 'react'
//styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
//images
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'

const GamesDetail = ({pathId}) => {
    const history = useHistory();
    //exit detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    }

    //get platform images
    const getPlatform = (platform) => {
        switch (platform) {
            case "Playstation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "iOS":
                return apple;
            case "Nintendo Switch":
                return nintendo;
            default:
                return gamepad;
        }
    }

    //data
    const { screen, game, isLoading } = useSelector((state) => state.detail)
    

    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                                <motion.h3  >{game.name}</motion.h3>
                            <p>Rating: {game.rating}</p>
                        </div>
                        <Info>
                            <h3>Plataforms</h3>
                            <Platforms>
                            {game.platforms.map((data) => (
                                <img key={data.platform.id}
                                    alt={data.platform.name}
                                src={getPlatform(data.platform.name)}
                                ></img>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <motion.img  layoutId={`image ${pathId}`}  src={game.background_image} alt="image"/>
                    </Media>
                    <Description>
                        <p> {game.description_raw} </p>
                    </Description>
                    <div className="gallery">
                        {screen.results.map((screen) => (
                            <motion.img src={screen.image} key ={screen.id} alt="game"/>
                        ))}
                    </div>
                </Detail>
            </CardShadow>
            )}
        
        </>
    )
}

const Description = styled(motion.div)`
    margin: 3rem 0rem;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Stats = styled(motion.div)`
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

const Media = styled(motion.div)`
    margin-top: 3rem;
    img{
        width: 100%;
        height: 60%;
        object-fit: cover;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    left: 10%;
    color: black;
    position: absolute;
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
