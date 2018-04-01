const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: Schema.ObjectId,
        ref: 'Author',
        required: true,

    },
    summary:{
        type: String,
        required: true
    },
    isbn:{
        type: String,
        required: true
    },
    genre:[{
        type: Schema.ObjectId,
        ref: 'Genre'
    }]
});

//virtual for book url

BookSchema.virtual('url').get(function(){
    return `/catalog/book/${this._id}`;
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;