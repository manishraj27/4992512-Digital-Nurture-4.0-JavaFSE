import React from 'react';

const ListofPlayers = () => {
  // Array with 11 players and their details
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 92 },
    { name: "KL Rahul", score: 65 },
    { name: "Hardik Pandya", score: 78 },
    { name: "MS Dhoni", score: 55 },
    { name: "Rishabh Pant", score: 88 },
    { name: "Ravindra Jadeja", score: 45 },
    { name: "Jasprit Bumrah", score: 25 },
    { name: "Mohammed Shami", score: 15 },
    { name: "Yuzvendra Chahal", score: 30 },
    { name: "Shikhar Dhawan", score: 75 }
  ];

  // Filter players with scores below 70 using arrow functions
  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      
      <h3>All Players (using map()):</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - Score: {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with scores below 70 (using arrow functions):</h3>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            {player.name} - Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
