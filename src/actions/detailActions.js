import axios from 'axios';
import {gameDetailsURL, gameScreenshotURL} from '../api'

export const loadDetail = (id) => async (dispatch) => {
    const proxyurl = "https://thingproxy.freeboard.io/fetch/";
    const detailData = await axios.get(proxyurl + gameDetailsURL(id));
    const screenshotData = await axios.get(proxyurl + gameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenshotData.data,
        }
    })
}