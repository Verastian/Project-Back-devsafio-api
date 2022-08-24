const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');

const authenticateSession = (req, res, next) => {
  req.userSession = undefined;
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, process.env.SECRET, function(err, decoded){
    if(err) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: "Authentication failed",
        data: ""
      });
    }

    req.userSession = {
      id: decoded.id,
      name: decoded.name
    };
    next();
  });
};

module.exports = authenticateSession;
