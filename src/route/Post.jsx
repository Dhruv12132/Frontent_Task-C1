import { useState } from "react";
import "./Post.css";

function Post() {
  const [postType, setPostType] = useState("Question");

  return (
    <div className="post-container">
      <h2 className = "heading" > New Post </h2>

      <div className = "post" >
        <span>Select Post Type:</span>

        <label>
          <input type="radio" name="postType" value="Question" checked={postType === "Question"} onChange={(event) => setPostType(event.target.value)} />
          Question
        </label>

        <label>
          <input type="radio" name="postType" value="Article" checked={postType === "Article"} onChange={(event) => setPostType(event.target.value)} />
          Article
        </label>
      </div>

      {postType === "Question" && (
        <div>
          <h2>Question Form</h2>
          <h3> What do you want to ask or share?</h3>

          <label style = {{ minHeight: "35px" }}>
            Title:
            <textarea placeholder=" Start your question with how, what, why, etc. " />
          </label>
<br></br>
           <label>
            Describe your problem:
            <textarea />
          </label>
<br></br>
          <label style = {{minHeight: "40px"}}>
            Tags:
            <textarea placeholder="Please add up to 3 tags to describe what your question is about e.g., java " />
          </label>
<br></br>
           <button> Post</button>
        </div>
      )}

      {postType === "Article"  && (
        <div>
          <h2>Article Form</h2>
          <h3> What do you want to ask or share?:</h3>
          
          <label style = {{minHeight: "35px"}}>
            Title:
            <textarea placeholder="Enter a descriptive title" />
          </label>
<br></br>
           <label style = {{minHeight: "70px"}}>
            Abstract:
            <textarea placeholder = "Enter a 1-paragraph abstract" />
          </label>
<br></br>
          <label style = {{minHeight: "70px"}}>
            Article Text:
            <textarea placeholder = "Enter a 1-paragraph abstract" />
          </label>
<br></br>
          
          <label style = {{minHeight: "40px"}}>
            Tags:
            <textarea placeholder="Please add up to 3 tags to describe what your question is about e.g., java " />
          </label>
<br></br>

          <button> Post</button>
        </div>
      )}
    </div>
  );
}

export default Post;
