const utils = require("./utilities");

module.exports = (req, res) => {

    const incoming = new URL(req.url, "http://localhost:3003");

    const endpoint = incoming.pathname;

    //jex.im for rout diagram
    //regex101 for test
    ^\/(?<folder>html|css|img|js)\/\w+\.(?<text>html|js|css|png|jpe?g|gif|tiff|bmp)$

    console.log(incoming);

    //utils.sendText(res, "Hilsen fra serveren");
    utils.sendJson(res, { "message": "Okay...."});

    //res.write("Hallo verden");
    //res.end();
}