const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    message: String
});

module.exports = mongoose.model('User', userSchema, 'usernames');
//1st param is the name of the model(User), 2nd param is the schema, 3rd param is what you want the cllection to be named but you can leave it out