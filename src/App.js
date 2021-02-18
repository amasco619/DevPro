import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Views/Home';
import About from './Views/About';
import Items from './Views/Items';
import Request from './Views/Request';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        
        <Header />
{/*Creating page/content that matches the path
  npm add react-router-dom*/}
        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/items/:id">
            <Items />
          </Route>

          <Route path="/request">
            <Request />
          </Route>
        </Switch>
        </div>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
