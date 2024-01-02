import { Box, Typography,styled } from "@mui/material";
import { useEffect, useState,useContext } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { API } from "../../service/api";
import {Edit,Delete} from '@mui/icons-material';
import { DataContext } from "../../context/DataProvider";
import Comments from "./comments/Comments.jsx";



const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const Description=styled(Typography)`
  word-break:break-word
`

const DetailView=()=>{
    const [post,setpost]=useState({});
    const url=post.picture ? post.picture : 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
    const {id} = useParams();
    const {account} =useContext(DataContext);
    const navigate =useNavigate();

    useEffect(()=>{
       const fetchData =async()=>{
         let response=await API.getPostById(id);
         if(response.isSuccess){
            setpost(response.data);
         }
       }
       fetchData();
       // eslint-disable-next-line
    },[])
    
   const deleteBlog=async()=>{
      let response=await API.deletePost(post._id);
      if(response.isSuccess){
          navigate('/');
      }
   }

  return(
    <Container>
         <Image src={url} alt="Sea"/>

         <Box style={{float:'right'}}>
           {
            account.username===post.username &&
            <> 
                <Link to ={`/update/${post._id}`}>
                  <EditIcon color="primary"/>
                </Link>
                
                <DeleteIcon onClick={()=> deleteBlog()} color="error"/>
            </>
           }
            
         </Box>

         <Heading>{post.title}</Heading>
         
         

         <Author>
            <Typography>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>
           
            
         </Author>

         <Description>{post.description}</Description>
         <Comments post={post}/>
    </Container>
  )
}

export default DetailView;