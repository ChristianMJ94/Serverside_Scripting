const fs = require("fs");
const mimetypes = require("./mimetypes.json");
const path = require("path"); 

// 200 sendes tilbage ved undefined
exports.sendText = (res, msg, status = 200) => {
    res.statusCode = status;
    res.setHeader("Content-type", "text/plain");
    res.end(msg);
}

exports.sendJson = (res, msg, status = 200) => {
    res.statusCode = status;
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(msg));
}

exports.sendFile = (res, filename) => {
    const ext = path.extname(filename);
    const mime = mimetypes[ext];
    fs.readFile(filename, (err, filecontent) => {
        if (err) {
            exports.sendJson(res, {msg: "Filen findes ikke"}, 404);
            return;
        }
        res.statusCode = 200;
        res.setHeader("Content-type", mime.type);
        res.end(filecontent);
    })
}