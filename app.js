const express = require("express");
const app = express();
const path = require("path");
const moment = require("moment");
app.use(express.json());

app.get("/api", (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const currentDay = moment().utc().format("dddd");

  // Get the current UTC time within a +/- 2 minute window
  const currentUtcTime = moment()
    .utc()
    .format("YYYY-MM-DDTHH:mm:ss[Z]");

  // Define GitHub file and repo URLs
  const githubFileUrl =
    "https://github.com/Dubjay18/hg-one/blob/main/index.js";
  const githubRepoUrl =
    "https://github.com/Dubjay18/hg-one";

  // Create the response JSON
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUtcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});
module.exports = app;
