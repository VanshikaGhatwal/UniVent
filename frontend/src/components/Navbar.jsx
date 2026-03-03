import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <nav className="bg-[#FAFAF7] dark:bg-neutral-900 px-16 py-6 flex justify-between items-center transition-colors duration-300  ">

      <h1 className="text-2xl font-semibold text-neutral-800 dark:text-white tracking-tight">
        UniVent
      </h1>

      <div className="flex items-center space-x-10 text-neutral-600 dark:text-neutral-300 text-sm font-medium">

        <Link to="/" className="hover:text-neutral-900 dark:hover:text-white transition">
          Home
        </Link>

        <Link to="/events" className="hover:text-neutral-900 dark:hover:text-white transition">
          Events
        </Link>

        <Link to="/create" className="hover:text-neutral-900 dark:hover:text-white transition">
          Create
        </Link>

        <Link to="/login" className="hover:text-neutral-900 dark:hover:text-white transition">
          Login
        </Link>

        <Link
          to="/register"
          className="border border-neutral-300 dark:border-neutral-600 px-5 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
        >
          Join Us
        </Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>
    </nav>
  )
}