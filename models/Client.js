const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    clientName: {
        type: String, 
        require: true, 
        min: 3, 
        max: 50, 
    },
    cpf: {
        type: Number,
        required: true, 
    }, 
    phoneNumber: {
        type: Number, 
        required: true,
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