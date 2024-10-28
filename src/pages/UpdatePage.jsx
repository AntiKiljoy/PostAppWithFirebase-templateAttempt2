import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdatePage() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const url = `https://react-user-crud-app-1cfaa-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.id}.json`;

  // Fetch the post data on component mount
  useEffect(() => {
    async function fetchPostData() {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setCaption(data.caption || "");
          setImage(data.image || "");
        }
      } else {
        console.error("Error fetching post data");
      }
    }
    fetchPostData();
  }, [url]);

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    const postToUpdate = { caption, image };

    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(postToUpdate),
    });

    if (response.ok) {
      navigate(`/posts/${params.id}`);
    } else {
      console.log("Error updating post data");
    }
  }

  return (
    <section className="page" id="update-page">
      <div className="container">
        <h1>Update post</h1>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label htmlFor="caption">Caption</label>
          <input
            id="caption"
            name="caption"
            type="text"
            value={caption}
            aria-label="caption"
            placeholder="Write a caption..."
            onChange={(e) => setCaption(e.target.value)}
          />
          <label htmlFor="image-url">Image</label>
          <input
            id="image-url"
            name="image-url"
            type="url"
            value={image}
            aria-label="image"
            placeholder="Paste an image url..."
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="image-preview"></label>
          <img
            id="image-preview"
            className="image-preview"
            src={
              image
                ? image
                : "https://placehold.co/600x400?text=Paste+an+image+URL"
            }
            alt="Choose"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/600x400?text=Error+loading+image")
            }
          />
          <div className="btns">
            <button>Save</button>
          </div>
        </form>
      </div>
    </section>
  );
}
