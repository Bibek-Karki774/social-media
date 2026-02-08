  function Post({ addPost, increaseReaction }) {
    let fontStyle={
      fontSize: "20px",
      fontWeight: "Bold",
      margin: "50px 50px"
    }
    return (
      <div>
        {addPost.length === 0 && <p style={fontStyle}>No posts yet.</p>}
        {addPost.map((post, index) => (
          <div className="card mb-3" key={index} style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <button className="btn btn-primary" onClick={()=>{increaseReaction(index)}} >
                👍 {post.reactions} Reactions
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default Post;