const express = require("express");
const router = express.Router();

/**
 * Lets say the route is http://localhost:4000/api/test
 * What seems to be the problem when sending the response back
 */

router.get("/test", (response, request, next) => {
  response.send("Am I here?");
});

/**
 * From this point create an app structure of best practice and complete the following tasks:
 * Use https://public-apis.io/nasa-api to use in your up coming tasks.
 * Lay structure to get the image from https://api.nasa.gov/planetary/apod
 * If user hits your server '/image-of-the-day', you should show the picture with some data e.g credits, description
 * If user hits your server 'api/image-of-the-day', you should show filter and return the data
 * 
 * Save every result(data) of your response in a db https://m3o.com/db/overview
 * If user wants to see or delete the history you should get it from the db.
 */

module.exports = router;
