const mongoose = require('mongoose');
let config = require('config');
/**
 * db connection url
 */
//var dbURL = 'mongodb://localhost:27017/admin';

/**
 * establish connection
 */
mongoose.connect(config.DBHost);

/**
 * successfully connected
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to: ' + config.DBHost);
})

/**
 * connection error
 */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
})

/**
 * connection disconnected
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

/**
 * If the Node process ends, close the Mongoose connection
 */
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});