import Post from '../Schema/post.js';

export const createPost=async (req,res)=>{
    try {
        const post =await new Post(req.body);
        post.save();

       return res.status(200).json('Postsaved succesfully');

    } catch (error) {
        return res.status(500).json(error);
    }
   
}

export const getallPosts=async(req,res)=>{
    let category =req.query.category;
    let posts;
    try {
        if (category) {
            posts=await Post.find({categories: category});
        } else {
            posts=await Post.find({});
        } 
        return res.status(200).json(posts); 
    } catch (error) {
        return res.status(500).json({msg:error.message});
    }
}

export const getPost = async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({msg:error.message});
    }
}

export const updatePost= async(req,res)=>{
    try {
        const post =await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({msg:'post not found'});
        }
        await Post.findByIdAndUpdate(req.params.id,{$set:req.body});
        return res.status(200).json({msg:'Post updated Succesfully'});
    } catch (error) {
        return res.status(500).json({msg:error.message});
    }
}

export const deletePost=async(req,res)=>{
    try {
        const post =await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({msg:'post not found'});
        }
        await Post.findByIdAndDelete(post._id);
        return res.status(200).json({msg:'Post deleted Succesfully'});

    } catch (error) {
        return res.status(500).json({msg:error.message});
    }
}
