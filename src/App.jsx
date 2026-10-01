import "./App.css";
export { default as Navbar } from "./components/navbar";
/*export { default as Footer } from "./components/footer";
export { default as Home } from "./components/home";
export { default as About } from "./components/about";
export { default as Menu } from "./components/menu";
export { default as Gallery } from "./components/gallery";
export { default as Contact } from "./components/contact";
*/
import Navbar from "./components/navbar";
{
  /*import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Menu from "./components/menu";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
*/
}
function App() {
  return (
    <div className="page-shell">
      <Navbar />
      {/*<main className="main-content">
        <Home />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>*
      <Footer />*/}
    </div>
  );
}

export default App;
