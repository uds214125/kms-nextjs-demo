import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true},
    body: { type: String, required: true, trim: true}
})
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
// const Post = mongoose.model("post", postSchema);
export default Post;