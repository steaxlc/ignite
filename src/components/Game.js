import React from 'react'
//styling and animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailActions'
import { Link } from 'react-router-dom'

import {pop} from '../animations'

const Game = ({ name, released, image,id }) => {
    const stringPathId = id.toString();
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }

    return (
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}
        variants={pop} initial="hidden" animate="show"
        >
            <Link to={`/ignite/game/${id}`}>
                <motion.h3 >{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name}/>
            </Link>
        </StyledGame>
    )
}
 
const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 30px rgba(0,0,0,.2);
text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow: hidden;
    img{
        width:100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game
