const JLogger = require("../../utils/logger");

/**
 * secureServerListen function starts the server and listens on the specified port
 * @param PORT - the port number or string to listen on
 * @param server - the server object to start
 * @param RETRY_TIMEOUT - the time in milliseconds to wait before retrying the connection
 * @param MAX_RETRIES - the maximum number of retries before giving up
 */
const secureServerListen = (
  PORT,
  server,
  RETRY_TIMEOUT = 5000,
  MAX_RETRIES = 5
) => {
  let retries = 0;
  const connect = () => {
    server
      .listen(PORT, () => {
        JLogger(`Server is up on port ${PORT}😎`);
      })
      .on("error", (err) => {
        console.error(err);
        if (retries < MAX_RETRIES) {
          retries++;
          JLogger(
            `Retrying connection in ${RETRY_TIMEOUT}ms...`,
            "Warning"
          );

          setTimeout(connect, RETRY_TIMEOUT);
        } else {
          JLogger(
            `Maximum retries (${MAX_RETRIES}) exceeded. Giving up peace out✌️.`,
            "Error"
          );
        }
      });
  };
  connect();
};

module.exports = secureServerListen;
