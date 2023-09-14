const mongoose = require('mongoose')
// const validator = require('validator')

const Note = mongoose.model('Note',{
    description:{
        type: String,
        required: [true,"Why no task?"],
        trim: true
    }
})

module.exports = Note

