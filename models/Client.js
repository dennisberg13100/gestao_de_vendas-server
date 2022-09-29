const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    clientName: {
        type: String, 
    },
    cpf: {
        type: Number,
    }, 
    phoneNumber: {
        type: Number, 
    },
    gender: {
        type: String, 
    }, 
    district: {
        type: String, 
    }, 
    cityCode: {
        type: String 
    }
},{ timestamps: true }
)

module.exports = mongoose.model("client", ClientSchema)