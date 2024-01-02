import {Box, Button,Typography,styled,TextField} from '@mui/material'
import logo from '../../Images/logo.JPG';
import { useState,useContext } from 'react';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';


const BoxHead=styled(Box)`
  width:400px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Image=styled('img')`
 width:250px;
 margin: auto;
 display: flex;
 padding: 50px 0 0 0;
`;

const BoxWrap=styled(Box)`
  padding : 25px 35px;
  display:flex;
  flex:1;
  flex-direction:column;
  &> div,&>button{
    margin:20px;
  }
  &> p{
    margin:auto;
  }
`;

const LoginButton=styled(Button)`
  text-transform:none;
  background:#EC729C;
  height:40px;
  border-radius:2px;
`;

const AccountButton=styled(Button)`
  text-transform:none;
  border-color:white;
  height:40px;
  border-radius:2px;
  color:#EC729C;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Text=styled(Typography)`
  font-size:14px;
  color:#878787;
`;

const Error=styled(Typography)`
  font-size:16px;
  color:#ff9494;
  line-height:0;
  margin-top:10px;
  font-weight:600;
`;

const signupdetails={
  name:'',
  username:'',
  password:''
}

const logindetails={
  username:'',
  password:''
}

const Login=({isUserAuthenticated})=>{
    
  const [account,toggleaccount] = useState('login');
  const [signup,setSignup]=useState(signupdetails);
  const [error,setError] =useState('');
  const [login,setLogin]=useState(logindetails);

  const {setAccount} =useContext(DataContext);
  const navigate=useNavigate();

  const toggleAccount=()=>{
    account==='login'? toggleaccount('signup'):toggleaccount('login');
  }
  const onValueChange=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
  }

  const onInputChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }
  const signupuser=async()=>{
    let response=await API.userSignup(signup);
    if(response.isSuccess){
      setError('');
      setSignup(signupdetails);
      toggleaccount('login');
    }else{
      setError('Something went wrong! Please try again later');
    }
  }

  const loginuser=async()=>{
    let response=await API.userLogin(login);
    if (response.isSuccess) {
      setError('');
      sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);

      setAccount({username: response.data.username, name:response.data.name});
      isUserAuthenticated(true);
      navigate('/');
      // setLogin(logindetails);
    }else{
      setError('Something went wrong! Please try again later');
    }
  }
  
  return(
  

    <BoxHead>
      <Box>
        <Image src={logo} alt='AllTunedIN'/>{
          account==='login'?
        <BoxWrap>
            <TextField variant='standard' label="Username" onChange={(e)=>onInputChange(e)} name='username' value={login.username}></TextField>
            <TextField variant='standard' label="Password" onChange={(e)=>onInputChange(e)} name='password' value={login.password}></TextField>
            <LoginButton variant='contained' onClick={()=>loginuser()}>Login</LoginButton>
            <Text>OR</Text>
            <AccountButton variant='outlined' onClick={()=>toggleAccount()}>Create an account</AccountButton>
        </BoxWrap>
        :
        <BoxWrap>
            <TextField variant='standard' label="Enter Name" onChange={(e)=>onValueChange(e)} name='name'></TextField>
            <TextField variant='standard' label="Enter Username" onChange={(e)=>onValueChange(e)} name='username' ></TextField>
            <TextField variant='standard' label="Enter Password" onChange={(e)=>onValueChange(e)} name='password'></TextField>
            {error && <Error>{error}</Error>}
            <LoginButton variant='contained' onClick={()=>signupuser()}>SignUp</LoginButton>
            <Text>OR</Text>
            <AccountButton variant='outlined' onClick={()=>toggleAccount()}>Already have an account</AccountButton>
        </BoxWrap>
      }
         
      </Box>
    </BoxHead>

  );
}

export default Login;