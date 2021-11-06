import styled from "styled-components";

export const Main = styled.div`
  padding: 10rem 0;
  button {
    padding: 5px 1rem;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const GridGames = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-auto-rows: 18rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
`;

export const Card = styled.div`
  color: white;
  border-radius: 5px;
  -webkit-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
  }
  .containerPrimaryCards {
    height: 40%;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .containerSecondaryCards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      i {
        margin-left: 10px;
      }
    }
  }
  .gameTitle {
    font-size: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .gameGenre {
    padding: 0 3px;
    border-radius: 5px;
    background-color: #393e46;
    color: #eeeeee;
  }
  &:hover {
    transform: scale(1.02);
  }
`;
