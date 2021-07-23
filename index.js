const express = require("express");
const ngrok = require("ngrok");
const app = express();
const port = 3000;
//node-express snippet
app.get("/", (req, res) => res.send("Hello World tt!"));
app.listen(port, () => {
  console.log(`Example app listening on ${port} port!`);

  ngrok.connect(port, function (err, url) {
    console.log(`Node.js local server is publicly-accessible at ${url}`);

    //type this url access ngrok
    //http://localhost:4040/
  });
});

//npm install -g localtunnel
//open a new powershell and type
//lt --port 3000
