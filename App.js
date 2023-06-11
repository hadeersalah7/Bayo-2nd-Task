import "./App.css";
import Wrapper from "./components/Wrapper";
import Settings from "./components/Settings";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Wrapper />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
