import React from "react";
import { useRoute, useLocation, Route } from "wouter";
import Nav from "../components/Nav";
import GameDetails from "../views/GameDetails";
import Home from "../views/Home";

export default function Routes() {
  return (
    <>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:game">
        <GameDetails />
      </Route>
    </>
  );
}
