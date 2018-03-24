const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.ObjectId, ref: "Book", required: true }, //reference to the associated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance"
  },
  due_back: { type: Date, default: Date.now }
});

//virtual for url to bookInstance
BookInstanceSchema.virtual('url').get(()=>{
    return `/catalog/bookinstance/${this._id}`;
});

const BookInstance = mongoose.model('BookInstance', BookInstanceSchema);

module.exports = BookInstance;