import styled from "styled-components";

export const Main = styled.div`
  margin-top: 50px;
`;
export const GameContainer = styled.div`
  width: 90%;
  height: 2000px;
  margin: 0 auto;
  padding-top: 50px;
`;
export const GameHeader = styled.div`
  height: 100%;
  padding: 0 10px;
  div {
    img {
      border-radius: 3px;
      width: 100%;
      margin-bottom: 10px;
    }
    position: sticky;
    top: 75px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
export const ButtonPlayNow = styled.a`
  text-decoration: none;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
  color: #eeeeee;
  background-color: #00adb5;
  border-radius: 3px;
  cursor: pointer;
  flex-grow: 8;
  margin-left: 20px;
  -webkit-box-shadow: 0px 3px 30px 0px rgba(0, 173, 181, 0.5);
  -moz-box-shadow: 0px 3px 30px 0px rgba(0, 173, 181, 0.5);
  box-shadow: 0px 3px 30px 0px rgba(0, 173, 181, 0.5);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.02);
  }
`;
export const ButtonSave = styled.div`
  color: #eeeeee;
  font-size: 1.3rem;
  border-radius: 3px;
  cursor: pointer;
  flex-grow: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.5);
`;

export const GameSection = styled.div`
  height: 100%;
  padding: 0 10px;
  color: #eeeeee;
`;

export const GameTitleContainer = styled.div`
  margin-bottom: 50px;
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 0.8rem;
    color: #bbb;
  }
`;
export const GameDescriptionContainer = styled.div`
  margin-bottom: 50px;
  h2 {
    margin-bottom: 10px;
  }
  hr {
    border: 1px solid #444;
    border-top: none;
    margin-bottom: 20px;
  }
  p {
    color: #bbb;
  }
  button {
    color: #eeeeee;
    background-color: transparent;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    padding: 10px;
    -webkit-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.5);
  }
`;
export const GameScreenshotsContainer = styled.div`
  margin-bottom: 50px;
  h2 {
    margin-bottom: 10px;
  }
  hr {
    border: 1px solid #444;
    border-top: none;
    margin-bottom: 30px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      cursor: zoom-in;
      width: 33%;
      margin-bottom: 4px;
      transition: transform 0.5s ease;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
`;
export const GameAdditionalInfoContainer = styled.div`
  margin-bottom: 50px;
  h2 {
    margin-bottom: 10px;
  }
  hr {
    border: 1px solid #444;
    border-top: none;
    margin-bottom: 20px;
  }
`;
export const AdditionalInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.Requirements ? "inherit" : "space-between"};
  div {
    width: ${(props) => (props.Requirements ? "50%" : "33%")};
    margin-bottom: 10px;
    span {
      color: #bbb;
    }
  }
`;
export const GameRequirementsContainer = styled.div`
  h2 {
    margin-bottom: 10px;
    span {
      color: #bbb;
    }
  }
  hr {
    border: 1px solid #444;
    border-top: none;
    margin-bottom: 20px;
  }
`;
