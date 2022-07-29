const CustomAPIError = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')

class badAPIError extends CustomAPIError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
    // this.statusCode = 400;
  }
}

module.exports = badAPIError;
