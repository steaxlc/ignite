import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

//Components
import Game from '../components/Game'
import GamesDetail from '../components/GamesDetail'

//styling and animation
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    },[]);

    //get the data back
    const {popular, newGames, upComing} = useSelector((state) => state.games);

    return (
        <GameList>
            <GamesDetail/>
            <h2>Upcoming Games</h2>
            <Games>
                {upComing.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
 padding: 0rem 5rem;
 h2{
     padding: 3rem 0rem;
 }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home
