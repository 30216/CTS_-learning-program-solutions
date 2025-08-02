import React from "react";

const ListOfPlayers = () => {
  const players = [
    { name: "Rohit", score: 88 },
    { name: "Virat", score: 95 },
    { name: "Dhoni", score: 60 },
    { name: "Jadeja", score: 77 },
    { name: "Shami", score: 68 },
    { name: "Gill", score: 91 },
    { name: "Hardik", score: 85 },
    { name: "Bumrah", score: 50 },
    { name: "Ashwin", score: 73 },
    { name: "Surya", score: 99 },
    { name: "Rahul", score: 65 },
  ];

 const lowScorers = players.filter(player => player.score < 70);
 const uniqueScores = new Set(players.map(p => p.score));
  const playerMap = new Map(players.map(p => [p.name, p.score]));

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Unique Scores (Set)</h2>
      <p>{[...uniqueScores].join(", ")}</p>

      <h2>Player Scores (Map)</h2>
      <ul>
        {[...playerMap].map(([name, score], index) => (
          <li key={index}>{name}: {score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
