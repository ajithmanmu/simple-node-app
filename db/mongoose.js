var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const connectionString = '<mongodbConnectionstring>/HackathonDB';
mongoose.connect(connectionString, function (err) {
    if (err) throw err;
    console.log('MongoDB Successfully connected to:', connectionString);
});

module.exports = {mongoose};