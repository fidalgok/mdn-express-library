const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      moment = require('moment');

const AuthorSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        max: 100
    },
    family_name: {
        type: String,
        required: true,
        max: 100
    },
    date_of_birth: {
        type: Date
    },
    date_of_death: {
        type: Date
    }

});

//virtual for authors full name
AuthorSchema.virtual('name').get(function(){
    return `${this.family_name}, ${this.first_name}`; 
});

//virtual for author's url
AuthorSchema.virtual('url').get(function(){
    return `/catalog/author/${this._id}`;
});

//virtual for author's birth date
AuthorSchema.virtual("date_of_birth_formatted").get(function() {
  return this.date_of_birth ? moment(this.date_of_birth).format('MMMM Do, YYYY') : '';
});

//virtual for author's death date
AuthorSchema.virtual('date_of_death_formatted').get(function(){
    return this.date_of_death ?  moment(this.date_of_death).format('MMMM Do, YYYY') : '';
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;