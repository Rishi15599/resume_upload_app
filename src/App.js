import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Form1 from "./Components/Form/Form1/Form1";
import Form2 from "./Components/Form/Form2/Form2";
import Form3 from "./Components/Form/Form3/Form3";
import Form4 from "./Components/Form/Form4/Form4";
import Form5 from "./Components/Form/Form5/Form5";
import Form6 from "./Components/Form/Form6/Form6";
import Form7 from "./Components/Form/Form7/Form7";
import Form8 from "./Components/Form/Form8/Form8";
import Form9 from "./Components/Form/Form9/Form9";
import Form10 from "./Components/Form/Form10/Form10";
import Form11 from "./Components/Form/Form11/Form11";
import Form12 from "./Components/Form/Form12/Form12";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <Form1/>
      {/* <Form2/>
      <Form3/>
      <Form4/>
      <Form5/>
      <Form6/>
      <Form7/>
      <Form8/>
      <Form9/>
      <Form10/>
      <Form11/>
      <Form12/> */}
        
      <Footer />
    </div>
  );
}

export default App;
