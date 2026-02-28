export default function Login() {
  return (
    <div className="bg-[#FAFAF7] dark:bg-neutral-900 min-h-screen flex items-center justify-center px-6 transition-colors duration-300">

      <div className="bg-white dark:bg-neutral-800 w-full max-w-md p-12 rounded-3xl shadow-sm border border-neutral-100 dark:border-neutral-700">

        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 mb-10">
          Log in to manage and explore campus events.
        </p>

        <form className="space-y-6">

          <input
            type="email"
            placeholder="College Email"
            className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-[#FAFAF7] dark:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-[#FAFAF7] dark:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />

          <div className="text-right text-sm text-neutral-500 dark:text-neutral-400">
            <span className="cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-900 dark:bg-white dark:text-black text-white py-3 rounded-full text-sm tracking-wide hover:opacity-90 transition"
          >
            Log In
          </button>

        </form>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-8 text-center">
          Don’t have an account?{" "}
          <a href="/register" className="underline">
            Join now
          </a>
        </p>

      </div>

    </div>
  )
}