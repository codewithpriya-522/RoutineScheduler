import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
