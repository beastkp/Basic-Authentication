const express = require('express')
const { dashboard,login } = require('../controllers/main')
const authMiddleware = require('../middleware/auth.js')
const router = express.Router()


router.route('/dashboard').get(authMiddleware,dashboard) // here we only need authentication for dashboard so we are using the aithentication middleware in routes folder

router.route('/login').post(login)
module.exports =router