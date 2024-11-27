import React from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div>
      <h1>React-Redux Posts App</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
