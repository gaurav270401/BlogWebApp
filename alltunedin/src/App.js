
import './App.css';
import DataProvider from './context/DataProvider.jsx';
import {BrowserRouter,Routes,Route, Navigate, Outlet} from 'react-router-dom';
import { useState } from 'react';

import Login from './components/account/Login.jsx';
import Home from './components/home/home.jsx';
import Header from './components/header/header.jsx';
import CreateBlog from './components/createnewblog/newblog.jsx';
import DetailView from './components/details/Details.jsx';
import UpdateBlog from './components/createnewblog/Update.jsx';


const PrivateRoute = ({isAuthenticated,...props})=>{
  return(
     isAuthenticated ? <> 
     <Header/>
     <Outlet/>  </>
     :<Navigate replace to ='/login'/>
  )
}

function App() {
  const [isAuthenticated,isUserAuthenticated]=useState(false);
  return (
   
    
    <DataProvider>
      <BrowserRouter>
      
        <div style={{marginTop: 64}}>
          <Routes>
              <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated}/>} />
              <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
               <Route path='/' element={ <Home/>} />
              </Route>  

              <Route path='/blog' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
               <Route path='/blog' element={ <CreateBlog/>} />
              </Route>  

              <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
               <Route path='/details/:id' element={ <DetailView/>} />
              </Route> 

              <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
               <Route path='/update/:id' element={ <UpdateBlog/>} />
              </Route> 

          </Routes>
          
        </div>
      </BrowserRouter>
    </DataProvider>
     
    
  );
}

export default App;
