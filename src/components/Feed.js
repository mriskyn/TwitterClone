import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(posts);

  return (
    <div class="feed">
      <div class="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {/* <Post />
      <Post
        displayName="Risky"
        username="mriskyn"
        verified={true}
        text="trying tes"
        image="https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg"
      /> */}
      <FlipMove>
        {posts.map((post, i) => (
          <Post
            key={i}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
