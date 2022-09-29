const router = require('express').Router()
const Client = require('../models/Client')
const client = require("../models/Client")

// CREATE client 
router.get('/create', async (req, res) => {
    const client = await new Client({
        clientName: "Laura",
        cpf: 123456789,
        phoneNumber:123456789,
        gender: "F",
        district: "Centro",
        cityCode: "123"
    })

    await client.save()
    res.send("ok")
})

module.exports = router