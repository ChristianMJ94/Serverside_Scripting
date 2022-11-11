const config = require("./config/serverconfig.json");
const utils = require("./utilities");
const api = { "test" : require("./api/api") }

module.exports = (req, res) => {
    utils.logger(req, res);
    const incoming = new URL(req.url, `${config.host}:${config.port}`);
    const endpoint = incoming.pathname;
    if (endpoint === "/") {
        utils.redirect(res, config.default_doc);
        return;
    }

    //jex.im for rout diagram
    const regex = /^\/(html|css|img|js)\/\w+\.(html|js|css|png|jpe?g|gif|tiff|bmp)$/;

    let match = endpoint.match(regex);
    if (match) {
        utils.sendFile(res, config.public_root + match[0]);
        return;
    }
    const regEx = /^\/api\/(?<route>\w+)(?<param>\/\d+)?$/;
    match = endpoint.match(regEx);
    if (match) {
        if (api[match.groups.route]) {
            if (api[match.groups.route][req.method]) {
                api[match.groups.route][req.method].handler(req, res, match.groups.param);
                return;
            }
            utils.sendJson(res, {msg: `Method ${req.method} not allowed`}, 405);
            return;
        }
    }
    utils.sendJson(res, { "message": `Resourcen '${endpoint}' findes ikke`}, 404);
}