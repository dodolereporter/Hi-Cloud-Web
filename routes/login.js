const express = require("express");
const bodyParser = require('body-parser');
const axios = require("axios");
const crypto = require("crypto");

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const router = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())


router.get("/", (req, res) => {
    res.render("connect");
    console.log("Page Login chargée avec succès")
})

router.post("/", async (req, res) => {
    let password = req.body.password;
    axios.get('http://localhost:4000/api/users/isCorrect/'+req.body.username+'/'+password+'/')
        .then(response => {
            if (response.data == true || response.data == false) {
                res.redirect("/account/"+req.body.username);
                return;
            }
        })
        .catch(function (error) {
            console.log(error);
        });

})
module.exports = router;
