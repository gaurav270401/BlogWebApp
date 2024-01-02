import blogUserdetails from "../Schema/user-schema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../Schema/token.js'

dotenv.config();
export const signupUser=async (req,res)=>{
    
    try {
        const hashpassword=await bcrypt.hash(req.body.password,10);
        const userdetails={username:req.body.username,name:req.body.name,password:hashpassword};
        const newuserdetails= new blogUserdetails(userdetails);
        await newuserdetails.save();
        return res.status(200).json({msg:"Signup Succesfull"});
    } catch (error) {
        return res.status(500).json({msg:'Error while signup theh user'});
    }
}

export const loginUser=async (req,res)=>{
    let user=await blogUserdetails.findOne({username:req.body.username});
    if(!user){
        return res.status(400).json({msg:"User not found"})
    }
    try {
        let match=await bcrypt.compare(req.body.password,user.password);
        if(match){
            const accessToken= jwt.sign(user.toJSON(),process.env.ACCESS_TOKEN_KEY,{expiresIn:'15m'}); //learn this at revision time
            const refreshToken =jwt.sign(user.toJSON(),process.env.REQUEST_TOKEN_KEY);
            const newToken=new Token({token: refreshToken});
            await newToken.save();
            return res.status(200).json({accessToken:accessToken,refreshToken: refreshToken,name:user.name,username:user.username,msg:"Login Succesfull"});
        }else{
            return res.status(400).json({msg:"Password does not match"});
        }
        
    } catch (error) {
        return res.status(500).json({msg:'Error while login in user'});
    }
}