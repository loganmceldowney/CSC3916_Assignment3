var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Movie schema
var MovieSchema = new Schema({
    title: { type: String, required: true },
    release_date: { type: Date, required: true },
    genre: { type: String },
    actors: [{ type: String }],
});

// return the model
module.exports = mongoose.model('Movie', MovieSchema);
