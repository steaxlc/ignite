import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api'

//Action Creator

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const proxyurl = "https://thingproxy.freeboard.io/fetch/";
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