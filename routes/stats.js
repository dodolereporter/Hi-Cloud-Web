const express = require("express");
const router = express.Router();
const axios = require("axios")

router.get("/", (req, res) => {

    let data;

    axios.get('http://localhost:4000/weather/dayMean/0').then(response0 => {
        axios.get('http://localhost:4000/weather/dayMean/1').then(response1 => {
            axios.get('http://localhost:4000/weather/dayMean/2').then(response2 => {
                axios.get('http://localhost:4000/weather/dayMean/3').then(response3 => {
                    axios.get('http://localhost:4000/weather/dayMean/4').then(response4 => {
                        axios.get('http://localhost:4000/weather/dayMean/5').then(response5 => {
                            axios.get('http://localhost:4000/weather/dayMean/6').then(response6 => {


                                if (response0.data.temps == "" || response0.data.temps == null) response0.data.temps = '0';
                                if (response0.data.humids == "" || response0.data.humids == null) response0.data.humids = '0';
                                if (response1.data.temps == "" || response1.data.temps == null) response1.data.temps = '0';
                                if (response1.data.humids == "" || response1.data.humids == null) response1.data.humids = '0';
                                if (response2.data.temps == "" || response2.data.temps == null) response2.data.temps = '0';
                                if (response2.data.humids == "" || response2.data.humids == null) response2.data.humids = '0';
                                if (response3.data.temps == "" || response3.data.temps == null) response3.data.temps = '0';
                                if (response3.data.humids == "" || response3.data.humids == null) response3.data.humids = '0';
                                if (response4.data.temps == "" || response4.data.temps == null) response4.data.temps = '0';
                                if (response4.data.humids == "" || response4.data.humids == null) response4.data.humids = '0';
                                if (response5.data.temps == "" || response5.data.temps == null) response5.data.temps = '0';
                                if (response5.data.humids == "" || response5.data.humids == null) response5.data.humids = '0';
                                if (response6.data.temps == "" || response6.data.temps == null) response6.data.temps = '0';
                                if (response6.data.humids == "" || response6.data.humids == null) response6.data.humids = '0';


                                res.render("stats", {
                                    jour0: response0.data,
                                    jour1: response1.data,
                                    jour2: response2.data,
                                    jour3: response3.data,
                                    jour4: response4.data,
                                    jour5: response5.data,
                                    jour6: response6.data,

                                });

                            });
                        });
                    });
                });
            });
        });
    });
    console.log("Page Stations chargée avec succès");
})
module.exports = router;
