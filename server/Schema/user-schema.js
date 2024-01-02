import mongoose from "mongoose";

const bloguserSchema=mongoose.Schema({
        name:{
            type:String,
            required:true,

        },
        username:{
            type:String,
            required:true,
            unique:true
            
        },
        password:{
            type:String,
            required:true,
        }
   
    });

const blogUserdetails=mongoose.model('blogUser',bloguserSchema);
export default blogUserdetails;