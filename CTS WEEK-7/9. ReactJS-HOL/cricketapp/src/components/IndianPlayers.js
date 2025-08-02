import React from "react";

const IndianPlayers = () => {
  const team = ["Rohit", "Virat", "Dhoni", "Jadeja", "Gill", "Hardik"];

  const oddTeam = team.filter((_, index) => index % 2 !== 0);
  const evenTeam = team.filter((_, index) => index % 2 === 0);

  const [first, second, third, ...rest] = team;

  const T20Players = ["Surya", "Bumrah", "Kohli"];
  const RanjiPlayers = ["Jaiswal", "Sarfaraz", "Shubman"];
  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>Destructured Team Members</h2>
      <p>First: {first}, Second: {second}, Third: {third}</p>

      <h2>Merged T20 & Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
