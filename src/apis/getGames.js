import axios from "axios";

export const getGames = (category = "zombie") => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: category },
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "e5ceac9625mshd86d8fef1e92d67p189e6bjsnb1a2cef8bdd9",
    },
  };
  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
};
