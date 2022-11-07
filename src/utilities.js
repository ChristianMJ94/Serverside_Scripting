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