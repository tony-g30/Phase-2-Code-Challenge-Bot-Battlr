import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => removeFromArmy(bot)}
            handleDischarge={() => dischargeBot(bot)}
            isInArmy
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
