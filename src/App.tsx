import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
