import "./App.css";
import { useTheme } from "./DataContext";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <header
        className={` ${theme === "light" ? "theme-light" : "theme-dark"}`}
      >
        <Nav />
      </header>

      <main className={`${theme === "light" ? "theme-light" : "theme-dark"}`}>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
