import React, { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import { getGameById } from '../.././apis/getGameById';
import { saveGame } from '../../features/saveGame';
import {
  GameContainer,
  GameHeader,
  GameSection,
  ButtonsContainer,
  ButtonPlayNow,
  ButtonSave,
  GameTitleContainer,
  GameDescriptionContainer,
  GameScreenshotsContainer,
  GameAdditionalInfoContainer,
  AdditionalInfo,
  GameRequirementsContainer,
  Main,
} from './styles';
export default function GameDetails() {
  const [gameDetails, setGameDetails] = useState([]);
  const [readMore, setReadMore] = useState(true);
  const [, params] = useRoute('/game/:game');
  let idGame = params.game.split('-').pop();

  useEffect(() => {
    getGameById(idGame).then((data) => setGameDetails(data));
  }, []);
  return (
    <Main>
      <GameContainer className='row'>
        <GameHeader className='col-sm-4'>
          {gameDetails.length !== 0 ? (
            <div>
              <img src={gameDetails.thumbnail} alt='asd' />
              <ButtonsContainer>
                <ButtonSave onClick={() => saveGame(gameDetails)}>
                  <i className='far fa-bookmark'></i>
                </ButtonSave>
                <ButtonPlayNow href={gameDetails.game_url} target='_BLANK'>
                  PLAY NOW <i className='fas fa-sign-out-alt'></i>
                </ButtonPlayNow>
              </ButtonsContainer>
            </div>
          ) : (
            <span></span>
          )}
        </GameHeader>
        <GameSection className='col-sm-8'>
          {gameDetails.length !== 0 ? (
            <>
              <GameTitleContainer>
                <h2>{gameDetails.title}</h2>
                <p>{gameDetails.publisher}</p>
              </GameTitleContainer>
              <GameDescriptionContainer>
                <h2>About {gameDetails.title}</h2> <hr />
                {readMore ? (
                  <p>{gameDetails.description}</p>
                ) : (
                  <p>{gameDetails.short_description}</p>
                )}
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? ' Read less -' : 'Read more +'}
                </button>
              </GameDescriptionContainer>
              <GameScreenshotsContainer>
                <h2>{gameDetails.title} Screenshots</h2> <hr />
                <div>
                  {gameDetails.screenshots.map((screenshot) => {
                    return (
                      <img
                        src={screenshot.image}
                        key={screenshot.id}
                        alt='asd'
                      />
                    );
                  })}
                </div>
              </GameScreenshotsContainer>
              <GameAdditionalInfoContainer>
                <h2>Additional Information</h2> <hr />
                <AdditionalInfo>
                  <div>
                    <span>Developer</span>
                    <p>{gameDetails.developer}</p>
                  </div>
                  <div>
                    <span>Publisher</span>
                    <p>{gameDetails.publisher}</p>
                  </div>
                  <div>
                    <span>Genre</span>
                    <p>{gameDetails.genre}</p>
                  </div>
                  <div>
                    <span>Release Date</span>
                    <p>{gameDetails.release_date}</p>
                  </div>
                  <div>
                    <span>Platform</span>
                    <p>{gameDetails.platform}</p>
                  </div>
                  <div>
                    <span>Status</span>
                    <p>{gameDetails.status}</p>
                  </div>
                </AdditionalInfo>
              </GameAdditionalInfoContainer>
              <GameRequirementsContainer>
                <h2>
                  Minimum System Requirements <span>(Windows)</span>
                </h2>
                <hr />
                <AdditionalInfo Requirements>
                  <div>
                    <span>OS</span>
                    <p>{gameDetails.minimum_system_requirements.os}</p>
                  </div>
                  <div>
                    <span>Processor</span>
                    <p>{gameDetails.minimum_system_requirements.processor}</p>
                  </div>
                  <div>
                    <span>Memory</span>
                    <p>{gameDetails.minimum_system_requirements.memory}</p>
                  </div>
                  <div>
                    <span>Graphics</span>
                    <p>{gameDetails.minimum_system_requirements.graphics}</p>
                  </div>
                  <div>
                    <span>Storage</span>
                    <p>{gameDetails.minimum_system_requirements.storage}</p>
                  </div>
                </AdditionalInfo>
              </GameRequirementsContainer>
            </>
          ) : (
            <span></span>
          )}
        </GameSection>
      </GameContainer>
    </Main>
  );
}
