import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<h2>Page is not found</h2>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
