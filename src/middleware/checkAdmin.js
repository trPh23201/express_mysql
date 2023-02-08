var jwt = require('jsonwebtoken')

function checkAdmin(req, res, next) {
    const token = req.cookies.token
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if(err){
            res.status(400).json(err)
        } else {
            if(decoded.role > 1){
                next()
            } else {
                res.status(400).json('You dont have permission to access this resources')
            }
        }
    });
}

module.exports = checkAdmin