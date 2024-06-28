import "./App.css";
import Dashboard from "./Conponnemt/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <div className="body">
        <div className="header"></div>
        <div className="content">
          <div className="sibard"></div>
          <div className="contents">
            <Routes>
              <Route />
            </Routes>
          </div>
        </div>
      </div> */}
      <Dashboard />
    </>
  );
}

export default App;
