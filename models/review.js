const  { Schema } = require('mongoose')

const Review = new Schema(
    {
        movieId: { type: Schema.Types.ObjectId, ref: 'Movie' },
        rottenTomattoeScore: { type: Number, min: 0, max: 100, required: true },
        comment: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = Review