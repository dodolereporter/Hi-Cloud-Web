const express = require("express");
const bodyParser = require('body-parser');
const axios = require("axios");
const router = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())
router.get("/", (req, res) => {
    res.render("connect");
    console.log("Page Index chargée avec succès")
})

router.post("/", async (req, res) => {
    let password = encrypt(req.body.password);
    axios.post('http://localhost:4000/api/users/isCorrect/'+req.body.username+'/'+password+'/', {

    })
        .then(function (response) {
            if (response.data == true) {
                res.redirect("/account/"+req.body.username);
                return;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    res.redirect("/login")

})
module.exports = router;
