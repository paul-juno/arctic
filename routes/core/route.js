'use strict'

//·······················································································································································
//                                                                                                                                                MODULES
//·······················································································································································

const express = require('express')
const bodyparser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const qrcode = require('qrcode')
const nodemailer = require("nodemailer")

//·······················································································································································
//                                                                                                                                              CONSTANTS
//·······················································································································································

const router = express.Router()

router.use(cors({
  origin: [
    'https://geowaycode.com',
    'https://me.geowaycode.com'
  ],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  credentials: true
}))



router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))

//·······················································································································································
//                                                                                                                                                 ROUTES
//·······················································································································································

router.get('/', (request, response) => {
  response.status(200).set('X-XSS-Protection', '1; mode=block').json({
    test: 'data'
  })
})


//·······················································································································································
//                                                                                                                                                 EXPORT
//·······················································································································································

module.exports = router