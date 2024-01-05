const axios = require("axios")

module.exports = (req, res) => {
    axios.get("https://api.day.app/e2XUcYYCKLTdiThVnVNhyT/fck")

    res.send({
        status: 200,
        message: "Hello world!!",
    });
};