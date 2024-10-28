import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function PostDetailPage() {
  const [post, setPost] = useState({});
  const params = useParams();
  const url = `https://react-user-crud-app-1cfaa-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.id}.json`;
  const navigate = useNavigate();

  useEffect(() => {
    async function getPost() {
      const repsonse = await fetch(url);
      const postData = await repsonse.json();
      console.log(postData);
      setPost(postData);
    }

    getPost();
  }, [url]);

  function navigateToUpdate() {
    navigate(`/posts/${params.id}/update`);
  }

  async function handleDelete() {
    const confirmDelete = window.confirm("bitch are you sure?");

    const response = await fetch(url, {
      method: "DELETE",
    });

    if (response.ok) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <section className="page" id="post-page">
      <div className="container">
        <h1>{post.caption}</h1>
        <PostCard post={post} />
        <div className="btns">
          <button className="btn-cancel" onClick={handleDelete}>
            Delete Post
          </button>
          <button onClick={navigateToUpdate}>Update Post</button>
        </div>
      </div>
    </section>
  );
}
