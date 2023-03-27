import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Car from "./Car";
import Sunrise from "./Sunrise";
function App() {
  const fetcher = async () => {
    const info = await fetch("http://localhost:3001/");
    const info2 = await info.json();
    console.log(info2);
  };

  return (
    <div>
      <Sunrise />
      <button onClick={fetcher}> Click me!!!!!!!!!!!!!!!!!!!!</button>
    </div>
  );
}

export default App;
