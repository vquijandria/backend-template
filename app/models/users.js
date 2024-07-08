const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    email:{
        type: String
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('users', userSchema);
