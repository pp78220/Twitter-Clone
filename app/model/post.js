const mongoose = require('mongoose');
const Schema = mongoose.Schema

let postSchema = new Schema({
    content  :    { type: String, required: true, trim: true                },
    postBy   :    { type: Schema.Types.ObjectId,  ref:'User'                },
    pinned   :    { type: Boolean                                           }
},{
  timestamps :      true
})

module.exports = post = mongoose.model('post',postSchema);