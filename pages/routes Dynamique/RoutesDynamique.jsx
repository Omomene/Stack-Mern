import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../components/cards/Cards";

const RoutesDinamyque = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Post not found");
        }
        return response.json();
      })
      .then(data => setPost(data))
      .catch(error => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <h1>Loading...</h1>;

  return (
    <>
      <h2>Full Read - Article {id}</h2>
      <Cards title={post.title} views={post.views} />
    </>
  );
};

export default RoutesDinamyque;
