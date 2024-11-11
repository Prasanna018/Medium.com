
import './App.css'
import Own_Posts from './Components/Own_Posts.jsx'
import Post from './Components/Post.jsx'
import ProfileCard from './Components/ProfileCard.jsx'
import ReadPosts from './Components/ReadPosts.jsx'
import { useAuth } from './Context/AuthProvider.jsx'
import Hero from './Home/Hero'
import LogIn from './Pages/LogIn'
import SIgnup from './Pages/SIgnup'
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <Routes>
      <Route path='/' element={authUser ? (<Hero></Hero>) : (<Navigate to={"/login"}></Navigate>)} />

      <Route path='/signup' element={authUser ? <Navigate to={"/"} ></Navigate> : <SIgnup></SIgnup>}></Route >

      <Route path='/login' element={authUser ? <Navigate to={"/"} ></Navigate> : <LogIn></LogIn>}></Route>
      <Route path='/write' element={<Post></Post>}></Route>
      <Route path='/read' element={< ReadPosts ></ReadPosts>}></Route >
      <Route path='/view-profile' element={<ProfileCard></ProfileCard>}></Route>
      <Route path='/view-posts' element={<Own_Posts></Own_Posts>}></Route>




    </Routes >
  )
}

export default App
