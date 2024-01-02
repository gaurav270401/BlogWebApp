import { Grid } from "@mui/material";
import Banner from "../banner/banner";
import Categories from "./categories";
import Post from "./post/post";

const Home=() =>{
    return (
        <>
           <Banner/>
           <Grid container>
              <Grid item lg={2} sm={2} xs={12}>
                 <Categories/>
              </Grid>
              <Grid container item lg={10} sm={10} xs={12}>
                  <Post />
              </Grid>
           </Grid>
           
        </>
        
       
    )
}

export default Home;