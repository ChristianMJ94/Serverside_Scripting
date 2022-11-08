const utils = require("../utilities");

module.exports = {
    GET: {
        handler : (req, res, param) => {
            if (param) {
                param = param.replace("/", "");
            }
            utils.sendJson(res, {msg: "Test", method: req.method, param: param});
        }
    },
    POST: {
        handler : (req, res, param) => {
            if (param) {
                utils.sendJson(res, {msg: "Parameter not allowed here"}, 400);
                return;
            }
            utils.sendJson(res, {msg: "Test", method: req.method});
        }
    },
    PUT: {
        handler : (req, res, param) => {
            if (param) {
                param = param.replace("/", "");
                utils.sendJson(res, {msg: "Test", method: req.method, param: param});
                return;
            }
            utils.sendJson(res, {msg: "Parameter required"}, 400);
        }
    },
    DELETE: {
        handler: (req, res, param) => {
            if (!param) {
                utils.sendJson(res, {msg: "Parameter required"}, 400);
                return;
            }
            param = param.replace("/", "");
            utils.sendJson(res, {msg: "Test", method: req.method, param});
        }
    }
}