import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { LoginPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
