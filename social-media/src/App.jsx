import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './components/Sidebar.jsx';
import Post from './components/Post.jsx';
import CreatePost from './components/CreatePost.jsx';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [addPost, setAddPost]= useState([]);

  const increaseReaction= (index)=>{
    setAddPost((post) =>{
      const newPosts = [...addPost];                  
      newPosts[index] = {                               
      ...newPosts[index],
      reactions: newPosts[index].reactions + 1 
      };
      return newPosts;
    })
  }


const deletePost = (index) => {
  setAddPost((prevPosts) => {
    const newPosts = [...prevPosts]; 
    newPosts.splice(index, 1);       
    return newPosts;                 
  });
};


 


  return (
    <>
    <Header />
    <div className="sidebyside">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    {selectedTab === "Home" ?  <Post addPost={addPost} increaseReaction={increaseReaction} deletePost={deletePost} /> : <CreatePost setAddPost={(newPost) => setAddPost([newPost, ...addPost])}/>}
    </div>
    <Footer />
    </>
  )
}

export default App
