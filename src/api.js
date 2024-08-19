const BASE_URL = 'http://localhost:8001/bots';

const fetchBots = () => {
  return fetch(BASE_URL).then(res => res.json());
};

const deleteBot = (botId) => {
  return fetch(`${BASE_URL}/${botId}`, { method: 'DELETE' }).then(res => res.json());
};

export default { fetchBots, deleteBot };
