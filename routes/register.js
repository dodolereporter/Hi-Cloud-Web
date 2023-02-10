const express = require("express");
const bodyParser = require('body-parser');
const axios = require("axios");
const router = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

router.get("/", (req, res) => {
    res.render("register");
    console.log("Page Index chargée avec succès")
})
    router.use(express.json());
router.post("/", async (req, res) => {
    axios.post('http://localhost:4000/api/users/', {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    res.redirect("/login")

})
module.exports = router;
