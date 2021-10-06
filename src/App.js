import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomCursor } from './components/CustomCursor/CustomCursor'
import dotenv  from 'dotenv'
import ScrollToTop from "./components/ScrollToTop";

dotenv.config({ path: '/custom/path/to/.env' })
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Проекты" component={Projects} />
          <Route path="/КтоЯ" component={About} />
          <Route path="/Резюме" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
