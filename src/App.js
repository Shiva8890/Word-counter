import './App.css';
import TextForm from './TextForm';
import About from './About';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <>
      <Router>
      <Navbar/>
        <Routes>
            <Route path="/text" element={<TextForm  heading=""/>}>
            </Route>
            <Route path="/about" element={ <About/>}>
            </Route>
        </Routes>
      </Router>
      </>
  );
}

export default App;
