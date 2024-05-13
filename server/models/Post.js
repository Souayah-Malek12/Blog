const mongoose = require('mongoose');

const Schema = monoose.Schema;
const PostSchema = new Schema ({
    title: {type: String, required:true},
    body : {type :String, required:true},
    createdAt : {
        type: Date,
        default: Date.now
    }, 
    updatedAt : {
        type: Date,
        default: Date.now
    }
});

module.export = mongoose.model('Post', PostSchema);