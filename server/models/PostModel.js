import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    post: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String},
    image:{type: String, required: true}
}, {timestamps: true}
);

const PostModel = mongoose.model('post', postSchema)

export default PostModel