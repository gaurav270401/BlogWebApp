import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled} from "@mui/material";
import { categories } from "../../constants/categories";

import { Link,useSearchParams } from "react-router-dom";

const Styletable= styled(Table)`
  border:1px solid rgba(224,224,224,1)
`
const StyleButton=styled(Button)`
  background:#EC729C;
  width:85%;
  margin:20px;
  color:#fff;
`;
const StyledCategory=styled(Link)`
  text-decoration:none;
  color:inherit;
`

const Categories=()=>{
   const [searchParams]=useSearchParams();
   const category=searchParams.get('category'); 

    return(
       <>
       <StyledCategory to={`/blog?category=${category || ''}`}>
          <StyleButton variant="contained" >Create Blog</StyleButton>
       </StyledCategory>
          
          
          <Styletable>
            <TableHead>
                <TableRow>
                    <TableCell>
                    <StyledCategory to='/'>
                      All Categories
                    </StyledCategory>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category =>(
                    <TableRow key={category.id}>
                        <TableCell>
                        <StyledCategory to={`/?category=${category.type}`}>
                            {category.type}
                        </StyledCategory>
                        </TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
          </Styletable>
       </>
    )
}
export default Categories;