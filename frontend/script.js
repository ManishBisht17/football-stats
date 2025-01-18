document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("stats-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const matchId = document.getElementById("match-id").value;
      const table = document.getElementById("stats-table");
      const matchDate = document.getElementById("match-date");
  
      try {
        const response = await fetch(`http://localhost:3000/getMatchStats?matchId=${matchId}`);
        if (!response.ok) throw new Error("Match not found!");
        const data = await response.json();
  
        // Populate the table
        matchDate.textContent = data.date;
        document.getElementById("teamA-goals").textContent = data.stats.teamA.goals;
        document.getElementById("teamB-goals").textContent = data.stats.teamB.goals;
        document.getElementById("teamA-possession").textContent = data.stats.teamA.possession;
        document.getElementById("teamB-possession").textContent = data.stats.teamB.possession;
        document.getElementById("teamA-passes").textContent = data.stats.teamA.passes;
        document.getElementById("teamB-passes").textContent = data.stats.teamB.passes;
        document.getElementById("teamA-shots").textContent = data.stats.teamA.shots;
        document.getElementById("teamB-shots").textContent = data.stats.teamB.shots;
        document.getElementById("teamA-shotsOnTarget").textContent = data.stats.teamA.shotsOnTarget;
        document.getElementById("teamB-shotsOnTarget").textContent = data.stats.teamB.shotsOnTarget;
        document.getElementById("teamA-corners").textContent = data.stats.teamA.corners;
        document.getElementById("teamB-corners").textContent = data.stats.teamB.corners;
  
        table.hidden = false; // Show table
      } catch (error) {
        alert(error.message);
        table.hidden = true; // Hide table if error occurs
      }
    });
  });
  