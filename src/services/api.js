import axios from 'axios';

const apiUrl = (path) => `https://itc-bootcamp-19.appspot.com${path}`
// const apiUrl = (path) => `http://localhost:8080${path}`

export const fetchTweets = () => {
  return axios.get(apiUrl('/tweet'));
}

export const insertTweet = tweet => {
  return axios.post(apiUrl('/tweet'), { tweet });
}