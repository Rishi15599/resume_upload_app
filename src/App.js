import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
