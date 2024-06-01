const  { Schema } = require('mongoose')

const Actor = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        alive: { type: Boolean, required: true }
    },
    { timestamps: true },
)

module.exports = Actor