const express = require("express");
const router = express.Router();
const axios = require("axios")

router.get("/", (req, res) => {

    let data;

    const response =  axios.get('http://localhost:4000/api/weather/lastMean').then(response => {
        data = response.data;

        res.render("stations", {
            temp : data.temps.substring(0, 4),
            humidity : data.humids.substring(0, 5),
        });

        console.log(data);
    });
    console.log("Page Stations chargée avec succès");
})
module.exports = router;
