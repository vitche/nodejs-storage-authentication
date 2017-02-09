var mongoose = require('mongoose');
module.exports = {
    User: mongoose.model('User', new mongoose.Schema({
        logOn: mongoose.String,
        password: mongoose.String
    })),
    Account: mongoose.model('Account', new mongoose.Schema({
        logOn: mongoose.String,
        password: mongoose.String,
        accessToken: mongoose.String,
        userIdentifier: mongoose.ObjectId
    }))
};