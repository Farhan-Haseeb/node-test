# Productbox Node and JS test

## Pre requisites
Set configurations to run server

`app.js`
Set up basic node app structure. For that you will have to configure the following packages.
 * expressLogger
 * cors
 * bodyParser (since its deprecating what will you use to replace it)

### Settings for static file
The `/api` route will  serve APIs what should we do to serve static files when `/` is hit, e.g (`/home`)


### Get device IP and console it when server starts
`index.js`
 * The server will listen on port http://localhost:4000/
 * But I need my device IP to share with my colleague so he/she can use the app
 
# Create app structure
`./routes/api/index` 
## Pre requisites
Fix the problem in the test route.

Lets say the route is http://localhost:4000/api/test

What seems to be the problem when sending the response back
 */

```
router.get("/test", (response, request, next) => {
  response.send("Am I here?");
});
```

## From this point create an app structure of best practice and complete the following tasks:

Use https://public-apis.io/nasa-api to use in your up coming tasks.
 * Lay app structure to get the image from https://api.nasa.gov/planetary/apod
 * If user hits your server '/image-of-the-day', you should show the picture with some data e.g credits, description (in browser)
 * If user hits your server 'api/image-of-the-day', you should show filter and return the data (in JSON)
 * Save every result(JSON) of your response in a db https://m3o.com/db/overview
 * If user wants to see or delete the history you should get it from the db.
