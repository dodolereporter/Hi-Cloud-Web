const express = require("express");
const app = express()
const port = 8080

const indexRoute = require("./routes/index")

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use("/", indexRoute)

app.listen(port, () => {  console.log("Application démarée sur le port : " + port)});