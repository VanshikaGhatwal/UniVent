import { useState } from "react"

export default function Events() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const events = [
    {
      id: 1,
      title: "Hackathon 2026",
      date: "March 15, 2026",
      category: "Technical",
      location: "Main Auditorium",
      image: "https://futuramo.com/blog/wp-content/uploads/2023/05/html-system-website-concept.jpg",
    },
    {
      id: 2,
      title: "Cultural Fest",
      date: "April 2, 2026",
      category: "Cultural",
      location: "College Ground",
      image: "https://template.canva.com/EAFZ0DbERW4/2/0/1600w-GM3G2FHXBis.jpg",
    },
    {
      id: 3,
      title: "AI Workshop",
      date: "March 20, 2026",
      category: "Technical",
      location: "Lab 3",
      image: "https://template.canva.com/EAGmF46ma6I/1/0/1600w--3uaZAMOdHM.jpg",
    },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === "All" || event.category === category

    return matchesSearch && matchesCategory
  })

  return (
    
  <div className="min-h-screen bg-[#FAFAF7] px-8 py-12">
    <h1 className="text-3xl font-semibold text-[#2e2e2e] mb-10">
      College Events
    </h1>

    {/* Search + Filter */}
    <div className="flex flex-col md:flex-row gap-4 mb-10">
      <input
        type="text"
        placeholder="Search events..."
        className="px-4 py-3 rounded-2xl bg-white border border-[#e6e2f0] outline-none focus:ring-2 focus:ring-[#c8b6ff] w-full md:w-1/2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="px-4 py-3 rounded-2xl bg-white border border-[#e6e2f0] outline-none focus:ring-2 focus:ring-[#c8b6ff]"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Technical</option>
        <option>Cultural</option>
      </select>
    </div>

    {/* Events Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredEvents.map((event) => (
        <div
          key={event.id}
          className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition duration-300 border border-[#f0ecf8]"
        >
           <img
    src={event.image}
    alt={event.title}
    className="w-full h-48 object-cover"
  />
          <h2 className="text-xl font-medium text-[#2e2e2e] mb-2">
            {event.title}
          </h2>
          <p className="text-sm text-gray-500">{event.date}</p>
          <p className="text-sm text-gray-500">{event.location}</p>

          <span className="inline-block mt-4 px-4 py-1 text-xs rounded-full bg-[#efe9ff] text-[#6d5dfc]">
            {event.category}
          </span>
        </div>
      ))}
    </div>

  </div>
  )
}