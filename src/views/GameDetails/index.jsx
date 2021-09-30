import React, { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { getGameById } from "../.././apis/getGameById";
import {
  GameContainer,
  GameHeader,
  GameSection,
  ButtonsContainer,
  ButtonPlayNow,
  ButtonSave,
  GameTitleContainer,
  GameDescriptionContainer,
} from "./styles";
export default function GameDetails() {
  const [gameDetails, setGameDetails] = useState([]);
  const [, params] = useRoute("/:game");
  let idGame = params.game.split("-").pop();

  useEffect(() => {
    getGameById(idGame).then((data) => setGameDetails(data));
    console.log(gameDetails);
  }, []);
  return (
    <div>
      <Link href="/">Home</Link>
      <GameContainer className="row">
        <GameHeader className="col-sm-4">
          {gameDetails.length !== 0 ? (
            <div>
              <img src={gameDetails.thumbnail} alt="asd" />
              <ButtonsContainer>
                <ButtonSave>
                  <i className="far fa-bookmark"></i>
                </ButtonSave>
                <ButtonPlayNow href={gameDetails.game_url} target="_BLANK">
                  PLAY NOW <i className="fas fa-sign-out-alt"></i>
                </ButtonPlayNow>
              </ButtonsContainer>
            </div>
          ) : (
            <span></span>
          )}
        </GameHeader>
        <GameSection className="col-sm-8">
          {gameDetails.length !== 0 ? (
            <>
              <GameTitleContainer>
                <h2>{gameDetails.title}</h2>
                <p>{gameDetails.publisher}</p>
              </GameTitleContainer>

              <GameDescriptionContainer>
                <h2>About {gameDetails.title}</h2> <hr />
                <p>{gameDetails.short_description}</p>
                <button>Read more +</button>
              </GameDescriptionContainer>
            </>
          ) : (
            <span></span>
          )}
        </GameSection>
      </GameContainer>
    </div>
  );
}
