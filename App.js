let team = "";
let roster = [];

function addTeam() {
  const teamInput = document.getElementById("teamName");
  team = teamInput.value.trim();
  if (team) {
    alert(`Team "${team}" created!`);
    teamInput.value = "";
  }
}

function addPlayer() {
  const name = document.getElementById("playerName").value.trim();
  const number = document.getElementById("playerNumber").value.trim();
  const position = document.getElementById("playerPosition").value.trim();

  if (name && number && position) {
    roster.push({ name, number, position });
    displayRoster();
    document.getElementById("playerName").value = "";
    document.getElementById("playerNumber").value = "";
    document.getElementById("playerPosition").value = "";
  }
}

function displayRoster() {
  const list = document.getElementById("rosterList");
  list.innerHTML = "";
  roster.forEach(player => {
    const item = document.createElement("li");
    item.textContent = `#${player.number} - ${player.name} (${player.position})`;
    list.appendChild(item);
  });
}
