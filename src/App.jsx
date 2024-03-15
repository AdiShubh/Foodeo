import "./App.css";
import Routes from "./Routes";

import { HashRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes />
      </Router>
    </>
  );
}

export default App;
