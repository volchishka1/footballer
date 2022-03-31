import axios from "axios";

const {REACT_APP_BASE_URL, REACT_APP_APIKEY} = process.env;


export const usersAPI = () => {

  const instance = axios.create({
    baseURL: `${REACT_APP_BASE_URL}`,
    headers: {
      'x-apisports-key': `${REACT_APP_APIKEY}`,
    }
  });

  const getMatches = instance.get(`/timezone`)

  return {getMatches}
}
