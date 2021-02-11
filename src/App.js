import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, Route } from "react-router-dom";
import Footer from './Components/Footer';
import FrontPage from "./Components/FrontPage";
import Header from './Components/Header';
import Home from './Views/Home';
import About from './Views/About';

function App() {
  return (
    <div>
      <Router>
        
        <Header />
{/*Creating page/content that matches the path*/}
        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About/>
          </Route>
        </Switch>
        </div>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
