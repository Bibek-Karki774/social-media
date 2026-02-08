function Post({ addPost, increaseReaction, deletePost }) {
  let fontStyle = {
    fontSize: "20px",
    fontWeight: "Bold",
    margin: "50px 50px",
  };
  return (
    <div className="post">
      {addPost.length === 0 && <p style={fontStyle}>No posts yet.</p>}
      {addPost.map((post, index) => (
        <div className="card mb-3" key={index} style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                increaseReaction(index);
              }}
            >
              👍 {post.reactions} Reactions
            </button>
          {/* Creating a cross button using bootstrap */}
                {addPost.length != 0 && <span className="cross-badge" onClick={()=>{deletePost(index)}}>&times;</span>}
          </div>
        </div>
      ))}

    </div>
  );
}
export default Post;
