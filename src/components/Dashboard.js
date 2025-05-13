import React, { useState } from 'react';

function Dashboard() {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState("");

  const addTeam = () => {
    if (newTeam.trim()) {
      setTeams([...teams, newTeam.trim()]);
      setNewTeam("");
    }
  };

  return (
    <div>
      <input 
        value={newTeam}
        onChange={e => setNewTeam(e.target.value)}
        placeholder="Enter new team name"
      />
      <button onClick={addTeam}>Add Team</button>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
