
const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req,res) => {
    res.status(200).json({message: "Welcome to Dennis aplication!"})
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))