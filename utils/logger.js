const JLogger = (data, severity = "Normal") => {
  const currentTime = new Date();
  const formattedTime = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
  console.log(`[${formattedTime}] [${severity}]`);
  console.log(
    data?.toString() ?? "Error: data not passed to logger"
  );
  console.log("<-arigato");
};

module.exports = JLogger;
