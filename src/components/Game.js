import React from 'react'
//styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
//redux
import { useDispatch } from 'react-redux';
import {loadDetail} from '../actions/detailActions'

const Game = ({ name, released, image,id }) => {
    
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
    }

    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img onClick={loadDetailHandler} src={image} alt={name}/>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 30px rgba(0,0,0,.2);
text-align: center;
border-radius: 1rem;
    img{
        width:100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game
