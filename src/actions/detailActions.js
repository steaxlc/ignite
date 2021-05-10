import axios from 'axios';
import {gameDetailsURL, gameScreenshotURL} from '../api'

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL",
    })

    const proxyurl = "";
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