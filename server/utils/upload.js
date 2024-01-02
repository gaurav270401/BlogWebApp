import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const username=process.env.DB_Username;
const password=process.env.DB_Password;

const storage= new GridFsStorage({
    url:`mongodb+srv://${username}:${password}@crud-app.uqoyrsf.mongodb.net/?retryWrites=true&w=majority`,
    options: {useNewUrlParser: true},
    file: (req,file)=>{
        const match=["image/png","image/jpg"];
        if(match.indexOf(file.memeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return{
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage});