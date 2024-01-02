import mongoose from "mongoose";

const connection=async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@crud-app.uqoyrsf.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log("Database Connected Succesfully");
    } catch (error) {
        console.log("Error while connecting database",error);
    }
}

export default connection;