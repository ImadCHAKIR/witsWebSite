import React from "react";
import {Admin,Login,SignUp,Signout, FAQPage,Home} from "./pages";
import { Route, Routes } from 'react-router-dom';
import { useToken } from "./hooks";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Posts from "./scenes/posts";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography"; 
import Categories from "./scenes/categories";

function App() {
  const { token, setToken } = useToken();

  console.log("root: "+token)

  if(!token) {
    return (
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login setToken={setToken}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
        </Routes>
    )
  }else if (token==="admin"){
    return (
        <Routes>
          <Route path="/admin" element={<Admin/>}>
            <Route path="" element={<Dashboard />} />
            <Route path="team" element={<Team />} />
            <Route path="users" element={<Contacts />} />
            <Route path="posts" element={<Posts />} />
            <Route path="form" element={<Form />} />
            <Route path="bar" element={<Bar />} />
            <Route path="line" element={<Line />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="geography" element={<Geography />} />
            <Route path="categories" element={<Categories />} />
          </Route>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/signout" element={<Signout setToken={setToken}/>}/>
        </Routes>
    );
  }else if (token==="moderator"){
    return (
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/signout" element={<Signout setToken={setToken}/>}/>
        </Routes>
    );
  }else if(token ==="user"){
    return (
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/signout" element={<Signout setToken={setToken}/>}/>
        </Routes>
    );
  }

  
}

export default App;

