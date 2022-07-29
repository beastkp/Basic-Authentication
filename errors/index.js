const CustomAPIError  =require('./custom-error')
const badAPIError  =require('./bad-requests')
const unauthenticated  =require('./unauthenticated')

module.exports = {
    CustomAPIError,
    badAPIError,
    unauthenticated
}