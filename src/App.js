import "./App.css";
import Tags from "./Tags";

function App() {
  const tags = ["boomdotdev", "task", "tags", "react"];
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body"></div>
      </section>
      <div className="tags">
        {" "}
        {tags.map((tag) => (
          <Tags tags={tag} />
        ))}
      </div>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
