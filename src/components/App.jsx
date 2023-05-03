import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import PostsScreen from './PostsScreen';
import PostScreen from './PostScreen';
import NewPostScreen from './NewPostScreen';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PostsScreen />} />
        <Route path="/posts/new" element={<NewPostScreen />} />
        <Route path="/posts/:postID" element={<PostScreen />} />
        <Route path="*" element={<div>URL not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
