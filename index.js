var mongoose = require('mongoose');
module.exports = {
    User: mongoose.model('User', new mongoose.Schema({
        logOn: 'string',
        password: 'string'
    })),
    Account: mongoose.model('Account', new mongoose.Schema({
        userIdentifier: 'ObjectId',
        logOn: 'string',
        password: 'string'
    })),
    Session: mongoose.model('Session', new mongoose.Schema({
        accountIdentifier: 'ObjectId',
        accessToken: 'string',
        created: {
            type: Date,
            default: Date.now
        }
    }))
};