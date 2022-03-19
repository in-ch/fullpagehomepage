import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Privacy from "./pages/Privacy/Privacy";
import Term from "./pages/Terms/Terms";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/term" element={<Term />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
