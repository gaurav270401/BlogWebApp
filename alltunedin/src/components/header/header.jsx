
import { AppBar, Toolbar,styled } from "@mui/material";
import logo from '../../Images/logo.JPG'
import {Link} from 'react-router-dom';
const Component=styled(AppBar)`
  background:#ffffff;
  color:#000;
  
`

const Container=styled(Toolbar)`
  &> a {
    padding:20px;
    margin-top:2px;
    text-decoration:none;
    color: inherit;
     }
   &> img{
    width:150px;
    padding:0px 20px 0px 0px;
   }
`


const Header=()=>{
    return(
        <Component >
            <Container >
               <img src={logo} alt="alltudein"/>
              <Link to='/'>HOME</Link>
              {/* <Link to='/about'>ABOUT</Link>
              <Link to='/contact'>CONTACT</Link> */}
              <Link to='/login'>LOGOUT</Link>
            </Container>
        </Component>
     
    )
}

export default Header;