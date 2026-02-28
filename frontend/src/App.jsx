import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CreateEvent from "./pages/CreateEvent"

function App() {
  return (
    <Router>
       <div className="min-h-screen bg-[#FAFAF7] dark:bg-neutral-900 transition-colors duration-300">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App