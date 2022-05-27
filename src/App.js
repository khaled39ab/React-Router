import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Friends from './component/Friends/Friends';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Posts from './component/Posts/Posts';
import Post from './component/Post/Post';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Welcome to React Router</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<Post></Post>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
