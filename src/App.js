import './App.css';
import NavBar from './NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import NewPostForm from './NewPostForm';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route exact path="/"
            element={<Homepage />} />
          <Route exact path="/new"
            element={<NewPostForm />} />
          <Route path="/:postId"
            element={<Post />} />
          <Route path="*"
            element={<Navigate to={"/"} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
