const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("register");
    console.log("Page Index chargée avec succès")
})
module.exports = router;
