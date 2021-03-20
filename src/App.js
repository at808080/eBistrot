
import './App.css';
import MenuItem from "./Components/MenuItem.jsx";
import Menu from "./Components/Menu.jsx";

function App() {


  return (
    <div className="App">
      <header className="row">
        <div>
          <a href="index.html">eBistrot</a>
        </div>
        <div>
          <a href="login.html">Sign In</a>
        </div>
      </header>
      <main>
        <Menu />
      </main>
      <footer>
        <h6 className="row center">eBistrot Pty Ltd</h6>
      </footer>
    </div>
  );
}

export default App;
