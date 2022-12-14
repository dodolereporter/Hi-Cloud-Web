const express = require("express");
const app = express()
const port = 8080

const indexRoute = require("./routes/index")

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use("/", indexRoute)

app.use("/css", express.static(__dirname + "/css/"));
app.use("/js", express.static(__dirname + "/js/"));
app.use("/assets", express.static(__dirname + "/assets/"));
// app.use(favicon(__dirname + '/favicon/favicon.ico'));
//
app.listen(port, () => {  console.log("Application démarée sur le port : " + port)});
