const jwt = require('jsonwebtoken');
const {unauthenticated} = require('../errors')

const authenticationMiddleware = async(req,res,next)=>{
    // console.log(req.authenticationMiddleware.authorization)
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new unauthenticated("No Token Provided");
    }

    console.log(req.headers);
    const token = authHeader.split(" ")[1];
    console.log(token);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const {id,username} =decoded
      console.log(decoded);
      req.user = {id,username}
      next()
        
    } catch (error) {
      throw new unauthenticated("No authoirsed to access this route", 401);
    }
}

module.exports = authenticationMiddleware