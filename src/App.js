import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import PortfolioContainer from "../src/PortfolioContainer/PortfolioContainer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <PortfolioContainer />
    </div>
  );
}

export default App;
