import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection.jsx";
import YourBotArmy from "./components/YourBotArmy.jsx";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      setArmy(army.filter((b) => b.id !== bot.id));
    });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <div className="container">
        <BotCollection bots={bots} addToArmy={addToArmy} />
        <YourBotArmy bots={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
      </div>
    </div>
  );
}

export default App;
