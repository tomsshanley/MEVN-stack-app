const Post = require('../models/posts');

module.exports = class API {
    // fetch all posts
    static async fetchAllPost(req,res) {
        try{
            const posts = await Post.find()
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // fetch post by ID (ID is passed by URL (in parameters))
    static async fetchPostById(req,res) {
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            res.status(200).json(post)
        } catch (err) {
            res.status(404).json({ message: err.message});
            
        }
    }

    // Create a blog Post - each contains a body text and image
    static async createPost(req,res) {
        
        const post = req.body;
        try {
            await Post.create(post);
            res.status(201).json({ message: "Post created!"});
            
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }

    // Update a Post, including check for if image was changed or not
    static async updatePost(req,res) {
        const id = req.params.id    // get the id from URL

        //get new post body and assign new image, updated or not
        const newPost = req.body;

        try {
            await Post.findByIdAndUpdate(id, newPost)
            res.status(200).json({ message: 'Post updated successfully'})
        } catch (err) {
            res.status(404).json({mesage: err.message})
        }
    }

    // delete a post
    static async deletePost(req,res) {
        const id = req.params.id;
        try {
            //delete post by id
            await Post.findByIdAndDelete(id)
            res.status(200).json({message: 'Post deleted successfully'})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
}