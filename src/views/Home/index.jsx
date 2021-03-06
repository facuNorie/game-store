import React, { useEffect, useState } from 'react';
import { Card, Main, GridGames } from './styles';
import { getGames } from '../.././apis/getGames';
import { useLocation } from 'wouter';

function Home() {
  const [, setLocation] = useLocation();
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);
  return (
    <Main>
      <div style={{ textAlign: 'center', marginBottom: '2rem ' }}>
        <button
          onClick={() => {
            getGames('racing').then((data) => setGames(data));
          }}
        >
          Racing
        </button>
        <button
          onClick={() => {
            getGames('zombie').then((data) => setGames(data));
          }}
        >
          Zombie
        </button>
      </div>
      <GridGames>
        {games?.map((game) => {
          const urlGame = game.freetogame_profile_url.split('/')[3];
          return (
            <Card
              title={game.title}
              key={game.id}
              onClick={() => setLocation(`/game/${urlGame}-${game.id}`)}
            >
              <img src={game.thumbnail} alt='ads' />
              <div className='containerPrimaryCards'>
                <p className='gameTitle'>{game.title}</p>
                <div className='containerSecondaryCards'>
                  <div>
                    <p className='gameGenre'>{game.genre}</p>
                    {game.platform === 'PC (Windows)' ? (
                      <i className='fab fa-windows'></i>
                    ) : game.platform === 'Web Browser' ? (
                      <i className='fas fa-globe'></i>
                    ) : game.platform === 'PC (Windows), Web Browser' ? (
                      <>
                        <i className='fab fa-windows'></i>
                        <i className='fas fa-globe'></i>
                      </>
                    ) : (
                      <span></span>
                    )}
                  </div>

                  <i className={`far fa-bookmark`}></i>
                </div>
              </div>
            </Card>
          );
        })}
      </GridGames>
    </Main>
  );
}

export default Home;
