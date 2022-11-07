const utils = require("./utilities");

module.exports = (req, res) => {

    const incoming = new URL(req.url, "http://localhost:3003");

    const endpoint = incoming.pathname;

    //jex.im for rout diagram
    //regex101 for test
    const regex = /^\/(html|css|img|js)\/\w+\.(html|js|css|png|jpe?g|gif|tiff|bmp)$/;
    const match = endpoint.match(regex);
    if (match) {
        utils.sendFile(res, match[0]);
    }

    console.log(match);

    //utils.sendText(res, "Hilsen fra serveren");
    utils.sendJson(res, { "message": "Okay...."});

    //res.write("Hallo verden");
    //res.end();
}