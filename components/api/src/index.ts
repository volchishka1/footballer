import axios from "axios";

const {REACT_APP_BASE_URL, REACT_APP_APIKEY} = process.env;


export const usersAPI = () => {

  const instance = axios.create({
    baseURL: `https://v3.football.api-sports.io`,
    headers: {
      'x-apisports-key': `${REACT_APP_APIKEY}`,
    }
  });

  const getMatches = instance.get(`${REACT_APP_BASE_URL}`)

  return {getMatches}
}
