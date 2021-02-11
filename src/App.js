import './App.css';
import Footer from './Components/Footer';
import FrontPage from "./Components/FrontPage";
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <FrontPage name="First App"/>
      <Footer/>
    </div>
  );
}

export default App;
