import React from 'react';

const IndianPlayers = () => {
  // T20 players array
  const T20players = ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya", "MS Dhoni"];
  
  // Ranji Trophy players array
  const RanjiTrophyPlayers = ["Ajinkya Rahane", "Cheteshwar Pujara", "Shreyas Iyer", "Sanju Samson", "Ishan Kishan"];

  // Merge arrays using ES6 Spread operator
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  // Destructuring - get players at different positions
  const [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth] = mergedPlayers;
  
  // Odd Team Players (positions 1, 3, 5, 7, 9)
  const oddTeamPlayers = [first, third, fifth, seventh, ninth].filter(player => player);
  
  // Even Team Players (positions 2, 4, 6, 8, 10)
  const evenTeamPlayers = [second, fourth, sixth, eighth, tenth].filter(player => player);

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>T20 Players:</h3>
      <ul>
        {T20players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Ranji Trophy Players:</h3>
      <ul>
        {RanjiTrophyPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Merged Players (using Spread Operator):</h3>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{index + 1}. {player}</li>
        ))}
      </ul>

      <h3>Odd Team Players (using Destructuring):</h3>
      <ul>
        {oddTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Team Players (using Destructuring):</h3>
      <ul>
        {evenTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
