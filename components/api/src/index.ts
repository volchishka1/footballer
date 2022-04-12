import axios from "axios";


export const usersAPI = (baseURL: string, apikey: string) => {

  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      'x-apisports-key': apikey,
    }
  });

  const getMatches = () => instance.get(`/timezone`)

  return {getMatches}
}
