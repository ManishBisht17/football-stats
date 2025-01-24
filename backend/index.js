import  express from'express';
import cors from 'cors'

const app = express();
const port = 3000;
app.use(cors());

// Mock match stats
const matchStats = {
  "1": {
    matchId: "1",
    date: "03-05-2023",
    stats: {
      teamA: {
        goals: "1",
        possession: "50%",
        passes: "50",
        shots: "5",
        shotsOnTarget: "3",
        corners: "6",
      },
      teamB: {
        goals: "1",
        possession: "50%",
        passes: "50",
        shots: "5",
        shotsOnTarget: "3",
        corners: "6",
      },
    },
  },
  "2": {
    matchId: "2",
    date: "04-05-2023",
    stats: {
      teamA: {
        goals: "2",
        possession: "60%",
        passes: "100",
        shots: "10",
        shotsOnTarget: "6",
        corners: "4",
      },
      teamB: {
        goals: "1",
        possession: "40%",
        passes: "80",
        shots: "6",
        shotsOnTarget: "3",
        corners: "5",
      },
    },
  },
  "3": {
    matchId: "3",
    date: "05-05-2023",
    stats: {
      teamA: {
        goals: "3",
        possession: "55%",
        passes: "90",
        shots: "12",
        shotsOnTarget: "7",
        corners: "8",
      },
      teamB: {
        goals: "2",
        possession: "45%",
        passes: "85",
        shots: "10",
        shotsOnTarget: "5",
        corners: "6",
      },
    },
  },
  "4": {
    matchId: "4",
    date: "06-05-2023",
    stats: {
      teamA: {
        goals: "0",
        possession: "48%",
        passes: "70",
        shots: "4",
        shotsOnTarget: "2",
        corners: "3",
      },
      teamB: {
        goals: "0",
        possession: "52%",
        passes: "85",
        shots: "5",
        shotsOnTarget: "1",
        corners: "4",
      },
    },
  },
};

// Define the route to get match stats
app.get('/getMatchStats', (req, res) => {
  const matchId = req.query.matchId;
  const data = matchStats[matchId];
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Match not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on=> http://localhost:${port}`);
});
