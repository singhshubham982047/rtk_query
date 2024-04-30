const PostCard = ({ post }: { post: Post }) => {
  return (
    <div
      style={{
        display: "flex",

        border: "1px solid skyblue",
        borderRadius: "3px",
        width: "50%",
        margin: "10px",
      }}>
      <div
        style={{
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
        }}>
        <h4>ID. {post.id}</h4>
        <h3>Title: {post.title}</h3>
        <h4>Views: {post.views}</h4>
      </div>
    </div>
  );
};

export default PostCard;
