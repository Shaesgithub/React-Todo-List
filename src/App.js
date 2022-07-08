import "./App.css";
import List from "./Components/List";

const App = () => {
  return (
    <div className = "App">
      <div className = "Header">
        <h1>A Todo List</h1>
        <img src="https://cdn.glitch.global/d3bda573-d66c-4d88-9301-8ce51bb42028/Untitled_Artwork%208.gif?v=1648046210804" alt="a gif of a border"/>
      </div>
      <List/>
    </div>
  )
}

export default App