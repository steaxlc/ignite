//Base URL

const base_url = "https://api.rawg.io/api/"

//Getting the date

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentMonth();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games

const key = 'e1347f35d01f4979b52bdf64192766f7';

const popular_games = `games?key=${key}&dates${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${key}&dates=${lastYear},${currentYear}&ordering=-released&page_size=10`;

export const newGamesURL =() => `${base_url}${new_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const popularGamesURL = () => `${base_url}${popular_games}`;

//game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${key}`
//screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${key}`
