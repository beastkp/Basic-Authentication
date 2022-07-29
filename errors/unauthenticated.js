const CustomAPIError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");

class unauthenticated extends CustomAPIError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
    // this.statusCode = 401;
  }
}

module.exports =unauthenticated ;
