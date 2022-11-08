const utils = require("../utilities");

module.exports = {
    GET: {
        handler : (req, res) => {
            utils.sendJson(res, {msg: "Test", method: req.method});
        }
    }
}