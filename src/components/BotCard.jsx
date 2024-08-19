import React from "react";

function BotCard({ bot, handleClick, handleDischarge, isInArmy = false }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <button onClick={handleClick}>
        {isInArmy ? "Remove from Army" : "Add to Army"}
      </button>
      {isInArmy && <button onClick={handleDischarge} style={{ color: 'red' }}>Discharge</button>}
    </div>
  );
}

export default BotCard;
