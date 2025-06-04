import PostModel from "../models/PostModel.js";

// Create a post
export const createPost = async (req, res)=>{
    try{
        const {post, name, description, image}= req.body;
        const newPost = await PostModel.create({post, name, description, image})
        res.json({success:true, newPost})

    }catch(error){   
    res.json({success:false,  message: error.message})
    }
}

// Get all posts

export const getPosts = async (req, res)=>{
    try{
        const post = await PostModel.find();
        res.json({success:true, post})
    }catch(error){
    res.json({success:false,  message: error.message})
    }
}

// Update a post

export const updatePost = async(req, res)=>{
    try{
       const updated = await PostModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
       if(!updated) return res.json({success:false, message: 'not updated'})
        res.json({success:true, message:"Post Updated successfully"})
    }catch(error){
        console.log(error.message);
    res.json({success:false,  message: error.message})
    }
}


// Delete a post 
export const deletePost = async(req, res)=>{
    try{
        const deleted = await PostModel.findByIdAndDelete(req.params.id)
        if(!deleted)
            res.json({success:true, message: "Post Deleted successfully"})
    }catch(error){
        console.log(error.message);
    res.json({success:false,  message: error.message})
    }

}