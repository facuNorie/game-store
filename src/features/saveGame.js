const lsData = JSON.parse(localStorage.getItem('savedGames'));
const games = lsData !== null ? [...lsData] : [];

export const saveGame = async (game) => {
  games.push(game);
  localStorage.setItem('savedGames', JSON.stringify([...games]));
};
