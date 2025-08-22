import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/pageComponents/Layout";
import viteLogo from "/vite.svg";
import RouteGuard from "./auth/RouteGuard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route element={<RouteGuard/>}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
