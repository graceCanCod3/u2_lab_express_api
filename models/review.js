const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Review = new Schema(
    {
        movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
        score: { type: Number, min: 0, max: 100, required: true },
        comment: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('reviews', Review)