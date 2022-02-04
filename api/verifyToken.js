const jwt = require("jsonwebtoken")

function verify(req, res, next) {
    const authHeader = req.headers.token;
    if(authHeader){}
}

module.exports = verify;