// 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import styles from "../../components/cards/Cards.module.css";

const Detail = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <>
      <h1 className={styles.h1}>Posts that might interest you</h1>

      {posts.length > 0 ? (
        posts.map((post) => (
          <Link key={post.id} to={`/detail/${post.id}`}>
            <Cards title={post.title} views={post.views} />
          </Link>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </>
  );
};

export default Detail;
