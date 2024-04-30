import { useState } from "react";
import PostCard from "./components/PostCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

const App = () => {
  const { isError, isLoading, data } = useGetPostsQuery("");
  const [newPost] = useNewPostMutation();
  const [title, setTitle] = useState<string>("");
  const [views, setViews] = useState<number>(0);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: Post = {
      id: String(Math.random() * 100),
      title,
      views,
    };
    newPost(post);
    setTitle("");
    setViews(0);
  };

  return (
    <div>
      <h1>Redux Toolkit Query</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Views"
          value={views}
          required
          onChange={(e) => setViews(Number(e.target.value))}
        />
        <button>Submit</button>
      </form>

      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        data?.map((item) => <PostCard key={item.id} post={item} />)
      )}
      {isError && (
        <>
          <p>error occured</p>
        </>
      )}
    </div>
  );
};

export default App;
