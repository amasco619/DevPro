import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Views/Home';
import Items from './Views/Items';
import Login from './Views/Login';
import Request from './Views/Request';
import About from './Views/About';

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

            <Route path="/request">
              <Request />
            </Route>

            <Route path="/items/:id">
              <Items />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
