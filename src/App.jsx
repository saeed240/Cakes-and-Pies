import "./index.css";
import {
  Navbar,
  Home,
  About,
  Menu,
  Gallery,
  Contact,
  Footer,
} from "./index.js";

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
