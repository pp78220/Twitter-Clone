const mongoose = require('mongoose')
//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName  :    { type: String, required: true, trim: true                },
    lastName   :    { type: String, required: true, trim: true                },
    username   :    { type: String, required: true, trim: true,unique : true  },
    email      :    { type: String, required: true, trim: true,unique : true  },
    password   :    { type: String, required: true, trim: true                },
    profilePic :    { type: String,                                           },
}, {timestamps :      true}
)

module.exports = User = mongoose.model('User',UserSchema);
