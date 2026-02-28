export default function CreateEvent() {
  return (
    <div className="bg-[#FAFAF7] dark:bg-neutral-900 min-h-screen px-16 py-24">

      <h1 className="text-4xl font-semibold text-neutral-900 dark:text-white mb-12">
        Create New Event
      </h1>

      <form className="max-w-xl space-y-8">

        <input
          type="text"
          placeholder="Event Title"
          className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
        />

        <textarea
          placeholder="Event Description"
          className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
        />

        <input
          type="date"
          className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
        />

        <button
          type="submit"
          className="bg-neutral-900 dark:bg-white dark:text-black text-white px-8 py-3 rounded-full"
        >
          Publish Event
        </button>

      </form>

    </div>
  )
}