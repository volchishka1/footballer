import axios from "axios";


export const usersAPI = () => {

  const instance = axios.create({
    baseURL: `https://v3.football.api-sports.io`,
    headers: {
      'x-apisports-key': 'e7bec7696d392143d9e3d5704ae27301',
    }
  });

  const getMatches = instance.get(`/timezone`)

  return {getMatches}
}
