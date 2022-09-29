const router = require('express').Router()
const Client = require('../models/Client')
const client = require("../models/Client")

// CREATE client 
router.get('/create', async (req, res) => {
    const client = await new Client({
        clientName: "Dennis van den Berg",
        cpf: 6843043925,
        phoneNumber:41995300613,
        gender: "M",
        birthDate:new Date("1990-06-08"),
        district: "Centro",
        cityCode: "123"
    })

    await client.save()
    res.send("ok")
})

module.exports = router