const express = require('express')
const recuiterController = require('../Controller/ChangeRecuiterStatusController')
const router = express.Router()
router.post("/changeRecuiterStatus", recuiterController.recuiterStatusChangeController)
module.exports =router