import "./App.css";
import Tags from "./Tags";

function App() {
  const tags = ["boomdotdev", "task", "tags", "react"];
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body"></div>
      </section>
      <div class="tags">
        {" "}
        {tags.map((tag) => (
          <Tags tags={tag} />
        ))}
      </div>
    </div>
  );
}

export default App;
