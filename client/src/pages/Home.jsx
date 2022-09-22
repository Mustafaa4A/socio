import { useEffect } from "react";
import { useState } from "react";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      await fetch("http://localhost:3300/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => {
          console.error(error);
        });
    }
    fetchdata();
  }, []);

  return (
    <div>
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;
