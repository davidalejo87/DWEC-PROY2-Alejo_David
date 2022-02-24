import React, { useState } from "react";
import Option from "./Option";
import Result from "./Result";
import "./Utility.css";

export const Utility = () => {
    const [choicePlayer, setChoicePlayer] = useState({});
    const [choiceMachine, setChoiceMachine] = useState({});
  
    // Array de objetos con las posibles opciones a elegir y a quien vence
    const options = [
        {
            choice: "piedra",
            losed: "tijeras",
            losed2: "lagarto",
        },
        {
            choice: "papel",
            losed: "piedra",
            losed2: "Spock",
        },
        {
            choice: "tijeras",
            losed: "papel",
            losed2: "lagarto",
        },
        {
            choice: "lagarto",
            losed: "Spock",
            losed2: "papel",
        },
        {
            choice: "Spock",
            losed: "tijeras",
            losed2: "piedra",
        },
    ];
  
    const chooseOption = (event) => {
        const player = options.find(
            (e) => e.choice === event.target.textContent
        );
        setChoicePlayer(player);
        choiceRival();
    };
  
    const choiceRival = () => {
        const choice = options[Math.floor(Math.random() * options.length)];
  
        setChoiceMachine(choice);
    };
  
    return (
        <div className="utility-container">
            <div className="utility-tittle">
                <h2>Piedra, papel, tijeras, lagarto, Spock</h2>
                <p>Recreamos el famoso juego de Big Bang Theory</p>
                <p>Instrucciones: </p> 
                <p>- Tijeras cortan papel, papel tapa a piedra, piedra aplasta a lagarto, lagarto envenena a Spock,
                 Spock rompe tijeras, tijeras decapitan a lagarto, lagargo devora papel, papel desautoriza a Spock, Spock vaporiza
                 piedra y piedra aplasta tijeras.</p>
            </div>
                <Result player={choicePlayer} machine={choiceMachine} />
                <main>
                    <section>
                        <div className="player">Jugador</div>
                        <div className="choice">{choicePlayer.choice}</div>
                </section>
                <section>
                        <div className="machine">Maquina</div>
                        <div className="choice">{choiceMachine.choice}</div>
                </section>
                </main>
                <div className="options">
                    {options.map((e) => (
                        <Option choose={chooseOption} value={e} />
                    ))}
                </div>
        </div>
    );
    }

export default Utility;