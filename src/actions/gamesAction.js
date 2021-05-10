import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from '../api'

//Action Creator

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const proxyurl = "";
    const popularData = await axios.get(proxyurl + popularGamesURL());
    const upcomingData = await axios.get(proxyurl + upcomingGamesURL());
    const newData = await axios.get(proxyurl + newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newData.data.results,
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGames.data.results,
        }
    })
}