import React from 'react';
import { Main, Card, GridGames } from '.././Home/styles';
const lsData = JSON.parse(localStorage.getItem('savedGames'));

export default function Saved() {
  return (
    <Main>
      <GridGames>
        {lsData?.map((game) => {
          return (
            <Card key={game.id}>
              <img src={game.thumbnail} alt='Ashe' />
              <h2>{game.title}</h2>
            </Card>
          );
        })}
      </GridGames>
    </Main>
  );
}
