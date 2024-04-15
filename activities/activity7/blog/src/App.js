import React, { useState } from 'react';
import Post from './Post';

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber : 0,
      postNumber : 1,
      postNumber : 2,

      text : "Hello form react blog",
      text : "Soran",
      text : "Qiji"
    }
  ]);

  const posts = postList.map((post) => (
    <Post key={post.postNumber} text={post.text} id={post.postNumber} />

  ));

  return(
    <div>
      {posts}
    </div>
  );
   
}

export default App;
