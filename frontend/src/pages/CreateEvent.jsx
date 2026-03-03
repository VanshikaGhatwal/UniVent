export default function CreateEvent() {
  return (
    <div className="bg-[#FAFAF7]  min-h-screen px-16 py-24">

      <h1 className="text-3xl font-semibold text-[#2e2e2e] mb-10">
        Create New Event
      </h1>

      <form className="max-w-xl space-y-8">

        <input
          type="text"
          placeholder="Event Title"
          className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white "
        />

        <textarea
          placeholder="Event Description"
          className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white "
        />

        <input
          type="date"
          className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white " 
        />

        <button
          type="submit"
         className="bg-neutral-900 text-white px-8 py-3 rounded-full text-sm tracking-wide hover:opacity-90 transition inline-block"
        >
          Publish Event
        </button>

      </form>

    </div>
  )
}