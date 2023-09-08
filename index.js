const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const utcOffset = 2 * 60 * 1000; // +/-2 minutes in milliseconds

app.use(express.json());

app.get("/api", (req, res) => {
  const { slack_name = "", track = "" } = req.query;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date(Date.now() + utcOffset);
  const response = {
    slack_name,
    current_day: daysOfWeek[now.getUTCDay()],
    utc_time: now.toISOString(),
    track,
    github_file_url:
      "https://github.com/Dubjay18/hg-one/index.js",
    github_repo_url: "https://github.com/Dubjay18/hg-one",
    status_code: 200,
  };
  res.json(response);
});

app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
