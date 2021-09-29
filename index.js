const app = require("./app.js");
const port = 4000;

/**
 * The server will listen on port http://localhost:4000/
 * But I need my device IP to share with my colleague so he/she can use the app
 */
const server = app.listen(port, async () => {
  console.log(`Server running on web: /***** THE LINK **********/`);
});

module.exports = server;
