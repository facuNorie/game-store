import React from "react";
import { useRoute, useLocation, Route } from "wouter";
import GameDetails from "../views/GameDetails";
import Home from "../views/Home";

export default function Routes() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:game">
        <GameDetails />
      </Route>
    </>
  );
}
