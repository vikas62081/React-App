import logo from "./logo.svg";
import "./App.css";
import useGetAPI from "./hooks/useGetAPI";

function App() {
  const { error, data, loading } = useGetAPI(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(data);
  return (
    <div className="App">
      <h2>React Custom Hooks</h2>
      {loading && <h3>Loading...</h3>}
      {error && error.message}
      {data && data.map((post) => <p>{post.title}</p>)}
    </div>
  );
}

export default App;
