import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Movies from "./components/movies/Movies";
import Router from "./router";

function App() {
  return (
    <>
      <Header/>
      <Router />
      <Footer/>
    </>
  );
}

export default App;
