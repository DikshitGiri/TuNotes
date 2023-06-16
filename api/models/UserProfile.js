const express = require('express');
const { default: moongose } = require('mongoose');
const UserProfileSchema = moongose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true,
    // },
    image: {
       
        type: String,
        required: true,
    },
});
const UserProfile = moongose.model('UserProfile', UserProfileSchema);
module.exports = UserProfile;

