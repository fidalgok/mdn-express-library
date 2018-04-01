const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100
    }
});

//virtual

GenreSchema.virtual('url').get(function(){
    return `/genre/${this._id}`
});

const Genre = mongoose.model('Genre', GenreSchema);

module.exports = Genre;