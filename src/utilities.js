const fs = require("fs");
const mimetypes = require("./mimetypes.json");
const path = require("path"); 
const { resolve } = require("path");
const { rejects } = require("assert");

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

exports.logger = (req, res) => {
    let fs = require('fs')
    let logStr = new Date().toISOString();
    let startTimer = process.hrtime.bigint();
    logStr += ` ${req.method} ${req.url}`;
    res.on("finish", () => {
        logStr += ` ${res.statusCode} ${res.statusMessage} ${Number(process.hrtime.bigint() - startTimer) / 1000000 + "ms"}`;
        fs.appendFile('log.txt', logStr + "\n", function (err) {
        if (err) {
            console.log("appendFile failed");
            }
            else {
                // done
            }
        })
        console.log(logStr);
    })
}

exports.redirect = (res, url) => {
    res.statusCode = 308;
    res.setHeader("Location", url);
    res.end();
} 

exports.getBody = (req) => {
    let body = "";
    return new Promise((resolve, reject) => {
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            try {
                body = JSON.parse(body);
                resolve(body);
            } catch (error) {
                reject(error);
            }
        });
        req.on("error", () => {
            reject("Fejl");
        });
    });
}