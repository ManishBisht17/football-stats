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
  console.log(`Server running on http://localhost:${port}`);
});
