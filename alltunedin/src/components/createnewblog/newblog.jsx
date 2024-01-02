import { Box, Button, FormControl, InputBase, TextareaAutosize, styled } from "@mui/material";
import {AddCircle as Add} from '@mui/icons-material';
import {useEffect, useState,useContext} from 'react';
import { useLocation,useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import {API} from "../../service/api";

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image=styled('img')({
    width:'100%',
    height:'50vh',
    objectFit:'cover'
});
    
const StyledFormControl= styled(FormControl)`
   margin-top:10px;
   display:flex;
   flex-direction: row;
`
const InputTextField =styled(InputBase)`
        font-size:0 25px;
        margin:0 30px;
        flex:1;
`;

const TextArea=styled(TextareaAutosize)`
    width:100%;
    margin-top: 50px;
    font-size:18px;
    border: none;
`

const initialPost={
    title:'',
    description:'',
    picture: '',
    username:'',
    categories:'',
    createdDate:new Date()
}



const CreateBlog=()=>{
    
    const [blog,blogPublish]=useState(initialPost)
    const[file,setFile] = useState('');
    const {account} = useContext(DataContext);
    const location=useLocation();
    const navigate=useNavigate();
    
    const url= blog.picture ? blog.picture : 'https://plus.unsplash.com/premium_photo-1661265944044-bc7248ae54f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80';

     useEffect(()=>{
        const getImage = async () =>{
            if(file){
                const data = new FormData();
                
                data.append("name",file.name);
                data.append("file",file);
               

                //API call to get new uploaded image file from mongodb
                const response = await API.uploadFile(data);
                blogPublish({...blog , picture : response.data});
                // blog.picture=response.data;
            }
        }
        getImage();
        blog.categories=location.search?.split('=')[1] || 'All';
        blog.username=account.username;
        
     },[file])

    const handleChange=(e)=>{
       blogPublish({...blog,[e.target.name] : e.target.value})
    }

    const publishBlog=async ()=>{
          const response = await API.publishPost(blog);
          if(response.isSuccess){
            navigate('/');
          }
    }
    
    return(
        <Container>
            <Image src={url} alt="computerdesk"/>
            <StyledFormControl>
               <label htmlFor="fileInput">
                <Add fontSize='large' color="action"/>
               </label>
                <input type="file" id="fileInput" style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])} />
                <InputTextField placeholder="Title" onChange={(e)=>handleChange(e)} name="title"/>
                <Button variant="contained" onClick={(e)=>publishBlog(e)} >Publish</Button>
            </StyledFormControl>
            <TextArea minRows={5} placeholder="Add your content...." onChange={(e)=>handleChange(e)} name="description" />
        </Container>
    )
}

export default CreateBlog;