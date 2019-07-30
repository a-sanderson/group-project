const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    favorites: {
        type: Array,
        default: []
    },
    cart: {
        type: Array,
        default: []
    }
})