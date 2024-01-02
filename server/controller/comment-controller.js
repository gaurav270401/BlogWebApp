import Comment from "../Schema/comment.js"

export const newComment=async(req,res)=>{
  try {
    const comment=await new Comment(req.body);
    comment.save();
    res.status(200).json({msg:'Comment saved succesfully'});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
}

export const getComments=async(req,res)=>{
    try {
        const commentdata= await Comment.find({postId:req.params.id});
        res.status(200).json(commentdata);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const deleteComments=async(req,res)=>{
    try {
        const comment=await Comment.findById(req.params.id);
        await Comment.findByIdAndDelete(comment._id);
        res.status(200).json({msg:'Comment deleted successfully'});
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}