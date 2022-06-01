import Scribba from "./components/scribba";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="lg:mx-auto md:mx-auto mx-auto w-full max-w-[85%] ">
        <Scribba />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
