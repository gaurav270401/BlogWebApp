import { Box, Typography, styled } from "@mui/material"
const Image=styled(Box)`
  background:url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60) center/55% repeat-x #000;
  width:100%;
  height:50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading=styled(Typography)`
    color:#FFFFFF;
    font-size:70px;
    line-height:1;
`;
const SubHeading=styled(Typography)`
    font-size:20px;
    color:white;
`

const Banner=()=>{
    return(
        <Image>
           <Heading>BLOG</Heading>
           <SubHeading>Unlock the Melodies of Diversity: Explore AllTunedIn!</SubHeading>
        </Image>
    )
}
export default Banner;