import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen">

      <section className="max-w-6xl mx-auto px-16 py-32 grid md:grid-cols-2 gap-24 items-center">

        <div>
          <p className="text-sm tracking-widest text-neutral-500 mb-6">
            MEET UNIVENT
          </p>

          <h1 className="text-6xl font-semibold text-neutral-900 leading-tight mb-8">
            A simpler way to explore and create your campus events.
          </h1>

          <p className="text-neutral-600 text-lg leading-relaxed mb-12">
            Discover technical, cultural, sports, and academic events
            happening across your college.
          </p>

          <Link
            to="/events"
            className="bg-neutral-900 text-white px-8 py-3 rounded-full text-sm tracking-wide hover:opacity-90 transition inline-block"
          >
            Explore Events
          </Link>

        </div>

        <div className="bg-white p-12 rounded-3xl shadow-sm border border-neutral-100">
          <h3 className="text-xl font-medium mb-8">
            Event Categories
          </h3>

          <ul className="space-y-6 text-neutral-600 text-base">
            <li>💻 Technical Events</li>
            <li>🎭 Cultural Festivals</li>
            <li>🏆 Sports Competitions</li>
            <li>📚 Workshops & Seminars</li>
          </ul>
        </div>

      </section>
    </div>
  )
}