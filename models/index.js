var mongoose = require('mongoose');

const MongoDB = 'mongodb://localhost/express-library';

mongoose.connect(MongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDb connection error'));


module.exports = db;