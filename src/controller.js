const utils = require("./utilities");

module.exports = (req, res) => {

    utils.logger(req, res);

    const incoming = new URL(req.url, "http://localhost:3003");

    const endpoint = incoming.pathname;

    if (endpoint === "/") {
        utils.redirect(res, "html/index.html");
        return;
    }

    //jex.im for rout diagram
    //regex101 for test
    const regex = /^\/(html|css|img|js)\/\w+\.(html|js|css|png|jpe?g|gif|tiff|bmp)$/;
    //const rx = new RegExp("/^\\/(html|css|img|js)\\/\\w+\\.(html|js|css|png|jpe?g|gif|tiff|bmp)$/");

    const match = endpoint.match(regex);
    if (match) {
        //Hvis jeg er her er der fundet et match
        utils.sendFile(res, "public" + match[0]);
        return;
    }

    //Hvis jeg er her er der ikke fundet et match
    utils.sendJson(res, { "message": `Resourcen '${endpoint}' findes ikke`}, 404);
}