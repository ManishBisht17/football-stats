document.getElementById('fetchStats').addEventListener('click', async function () {
    const matchId = document.getElementById('matchId').value;

    if (!matchId) {
        alert('Please enter a Match ID!');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/getMatchStats?matchId=${matchId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch match stats');
        }

        const data = await response.json();
        displayMatchStats(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch match stats!');
    }
});

function displayMatchStats(data) {
    const statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = `
        <h2>Match ID: ${data.matchId}</h2>
        <h3>Date: ${data.date}</h3>
        <table>
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Goals</th>
                    <th>Possession</th>
                    <th>Passes</th>
                    <th>Shots</th>
                    <th>Shots on Target</th>
                    <th>Corners</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Team A</td>
                    <td>${data.stats.teamA.goals}</td>
                    <td>${data.stats.teamA.possession}</td>
                    <td>${data.stats.teamA.passes}</td>
                    <td>${data.stats.teamA.shots}</td>
                    <td>${data.stats.teamA.shotsOnTarget}</td>
                    <td>${data.stats.teamA.corners}</td>
                </tr>
                <tr>
                    <td>Team B</td>
                    <td>${data.stats.teamB.goals}</td>
                    <td>${data.stats.teamB.possession}</td>
                    <td>${data.stats.teamB.passes}</td>
                    <td>${data.stats.teamB.shots}</td>
                    <td>${data.stats.teamB.shotsOnTarget}</td>
                    <td>${data.stats.teamB.corners}</td>
                </tr>
            </tbody>
        </table>
    `;
}
