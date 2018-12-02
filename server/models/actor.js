var mongoose = require('mongoose');

const { Schema } = mongoose;

var actorSchema = new Schema({
    fullname: { type: String, required: true },
    nationality: { type: Schema.Types.ObjectId, ref: 'Nationality' },
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
});

module.exports = mongoose.model('Actor', actorSchema);