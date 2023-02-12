const ROUTE = {
    Auth: 'Auth',
    Home: 'Home',
    Movie_List: 'Movie List',
    Movie_Detail: 'Movie Detail',
};

const TITLE = {
    Now_Playing: "Now Playing",
    Tranding_Now: "Tranding Now",
    Movies_By_Genre: "Movies by genre",
    Genre_Movie: "Genre Movie",
    Genre: "Genre",
    Language: "Language",
    Vote_Average: "Vote",
    Recommendation: "Recommendation",
    Empty_Movie: "There is no Movie by genre"
};

const MESSAGE = {
    Empty_Login: "Email and Password must be filled",
    Wrong_Format_Email: "Incorrect Email format",
    Wrong_Email_Password: "Incorrect Email or Password",
};

const USER_TOKEN = "USER_TOKEN";
const EMAIL = "test123@gmail.com";
const PASSWORD = "1234";
const BASE_URL = "https://api.themoviedb.org";
const TOKEN = "Bearer Paste here your credential key";

const Constants = {
    ROUTE,
    TITLE,
    USER_TOKEN,
    EMAIL,
    PASSWORD,
    MESSAGE,
    BASE_URL,
    TOKEN,
} as const;

export default Constants;