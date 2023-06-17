const express = require('express');
const { default: moongose } = require('mongoose');
const UserProfileSchema = moongose.Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    image: {
       
        type: String,
        required: true,
    },
});
const UserProfile = moongose.model('UserProfile', UserProfileSchema);
module.exports = UserProfile;

