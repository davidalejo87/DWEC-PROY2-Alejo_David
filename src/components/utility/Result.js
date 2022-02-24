import React from "react";

const Result = (props) => {
  let score = <h3>Resultado: </h3>;

  if (
    props.player.losed === props.machine.choice &&
    props.player.choice
  ) {
    score = <h3>Ganador: Jugador =D</h3>;
  } 
  else if (
    props.machine.losed === props.player.choice &&
    props.player.choice
  ) {
    score = <h3>Ganador: La Máquina =(</h3>;
  } 
  else if (
    props.player.choice === props.machine.choice &&
    props.player.choice
  ) {
    score = <h3>Empate</h3>;
  } 
  else if (
    props.player.losed2 === props.machine.choice &&
    props.player.choice
  ) {
    score = <h3>Ganador: Jugador =D</h3>;
  } 
  else if (
    props.machine.losed2 === props.player.choice &&
    props.player.choice
  ){
    score = <h3>Ganador: La Máquina =(</h3>;
  }

  return <h3>{score}</h3>;
};

export default Result;