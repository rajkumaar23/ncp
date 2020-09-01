const players = [
  {
    name: "Player 1",
    role: "Captain",
  },
  {
    name: "Player 2",
    role: "Wicket Keeper",
  },
  {
    name: "Player 3",
    role: "Batsman",
  },
  {
    name: "Player 4",
    role: "Bowler",
  },
  {
    name: "Player 5",
    role: "All-rounder",
  },
];

function generatePlayers() {
  const table = document.getElementById("playersTable");
  let content = "";
  const freqMap = {};
  for (let index = 1; index <= 10; index++) {
    const position = Math.floor(Math.random() * 5 + 1);
    if (freqMap[players[position - 1].name]) {
      freqMap[players[position - 1].name]++;
    } else {
      freqMap[players[position - 1].name] = 1;
    }
  }
  Object.keys(freqMap).forEach(it => {
    content += `<tr>`;
    content += `<td class='has-text-centered'>${it}</td>`;
    content += `<td class='has-text-centered'>${players.find(i => i.name == it).role}</td>`;
    content += `<td class='has-text-centered'>${freqMap[it]}</td>`;
    content += `</tr>`;
  })
  table.innerHTML = content;
}
