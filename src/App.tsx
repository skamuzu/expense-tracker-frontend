import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import SignUpPage from "./pages/SignUpPage";
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
