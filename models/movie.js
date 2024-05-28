const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: Number, require: true},
        rating: { type: String, require: true},
        yearReleased: { type: Number, require: true},
        description: { type: String, required: true },
        reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)