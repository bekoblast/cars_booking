const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    uname: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)