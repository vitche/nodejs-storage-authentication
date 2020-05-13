const mongoose = require('mongoose');
module.exports = {
    User: mongoose.model('User', new mongoose.Schema({
        logOn: 'string',
        password: 'string',
        created: {
            type: Date,
            default: Date.now
        }
    })),
    Account: mongoose.model('Account', new mongoose.Schema({
        userIdentifier: 'ObjectId',
        // Identifies this account in the external system
        externalIdentifier: 'string',
        logOn: 'string',
        password: 'string',
        created: {
            type: Date,
            default: Date.now
        },
        // Identifies, which system that account is for
        source: 'string',
        // Any additional metadata in a simplified form
        tags: ['string']
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
