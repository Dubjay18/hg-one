const http = require("http");
const { PORT } = require("./config/constants");
const app = require("./app");
const secureServerListen = require("./config/server");

/**
 * The http server instance.
 */
const server = http.createServer(app);

/**
 * Starts the secure server listening on the specified port.
 */
secureServerListen(PORT, server);
