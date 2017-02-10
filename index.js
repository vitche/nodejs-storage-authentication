var mongoose = require('mongoose');
module.exports = {
    User: mongoose.model('User', new mongoose.Schema({
        logOn: mongoose.String,
        password: mongoose.String
    })),
    Account: mongoose.model('Account', new mongoose.Schema({
        userIdentifier: mongoose.ObjectId,
        logOn: mongoose.String,
        password: mongoose.String
    })),
    Session: mongoose.model('Session', new mongoose.Schema({
        accountIdentifier: mongoose.ObjectId,
        accessToken: mongoose.String,
        created: {
            type: Date,
            default: Date.now
        }
    }))
};