import { useGetPostsQuery } from "./redux/api";

const App = () => {
  const { isError, isLoading, isSuccess, data, error } = useGetPostsQuery("");

  return <div>App</div>;
};

export default App;
