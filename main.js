const express = require("express");
const bodyParser = require('body-parser');

const app = express()
const port = 8080

const indexRoute = require("./routes/index")
const stationsRoute = require("./routes/stations")
const statsRoute = require("./routes/stats")
const teamRoute = require("./routes/team")
const contactRoute = require("./routes/contact")
const loginRoute = require("./routes/login")
const registerRoute = require("./routes/register")


const YAML = require('yamljs');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');



app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use("/", indexRoute)
app.use("/stations", stationsRoute)
app.use("/stats", statsRoute)
app.use("/team", teamRoute)
app.use("/contact", contactRoute)
app.use("/login", loginRoute)
app.use("/register", registerRoute)

app.use("/css", express.static(__dirname + "/css/"));
app.use("/js", express.static(__dirname + "/js/"));
app.use("/assets", express.static(__dirname + "/assets/"));
// app.use(favicon(__dirname + '/favicon/favicon.ico'));
//
app.listen(port, () => {  console.log("Application démarée sur le port : " + port)});
