const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:username", (req, res) => {
    axios.get('http://localhost:4000/api/users/'+req.params.username)
        .then(response => {
            res.render("account", {
                username: response.data.username,
                email: response.data.email
            });
            console.log("Page Account chargée avec succès")
        })

})
module.exports = router;
