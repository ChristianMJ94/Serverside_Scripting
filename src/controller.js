const utils = require("./utilities");

module.exports = (req, res) => {

    const incoming = new URL(req.url, "http://localhost:3003");

    const endpoint = incoming.pathname;    

    //console.log(endpoint);

    //jex.im for rout diagram
    //regex101 for test
    const regex = /^\/(html|css|img|js)\/\w+\.(html|js|css|png|jpe?g|gif|tiff|bmp)$/;

    //utils.sendText(res, "Hilsen fra serveren");
    utils.sendJson(res, { "message": "Okay...."});

    //res.write("Hallo verden");
    //res.end();
}