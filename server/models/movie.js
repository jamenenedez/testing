var mongoose = require('mongoose');

const { Schema } = mongoose;

var movieSchema = new Schema({
    title: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: [true, 'A category must be named'] }, //Just one
    genders: [{ type: Schema.Types.ObjectId, ref: 'Gender', required: [true, 'A gender must be named'] }], //At least one
    year: { type: String },
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    duration: { type: Number },
    calification: { type: Number, default: 0 },
    scores: [{ user: { type: Schema.Types.ObjectId, ref: 'User' }, score: { type: Number } }], //User average qualifications  
    director: { type: Schema.Types.ObjectId, ref: 'Director', required: [true, 'A director must be named'] }, //At least one
    actors: [{ type: Schema.Types.ObjectId, ref: 'Actor', required: [true, 'An actor must be named'] }],   //At least one
});

module.exports = mongoose.model('Movie', movieSchema);