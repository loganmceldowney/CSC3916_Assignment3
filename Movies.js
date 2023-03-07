var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Movie schema
var MovieSchema = new Schema({
    title: { type: String, required: true, index: { unique: true }},
    releaseYear: { type: String, required: true},
    genre: { type: String, required: true, enum: ['Horror', 'Action', 'Drama', 'Comedy', 'Romance', 'Sci-fi', 'Documentary', 'Musical', 'Thriller']},
    actors: { type: [{actorName: String, characterName: String}], required: true },
    imageURL: String
});

// return the model
module.exports = mongoose.model('Movie', MovieSchema);
