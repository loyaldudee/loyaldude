import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-6">📩 Contact Me</h1>
        <p className="text-gray-300 text-center mb-10">
          Got a cool idea? Wanna collaborate? Just want to say hi? I’m all ears. 👂 Let’s talk!
        </p>

        <form className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 w-full rounded-md bg-gray-700 text-white border border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md bg-gray-700 text-white border border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message here..."
              className="mt-1 w-full rounded-md bg-gray-700 text-white border border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md text-white font-semibold transition"
          >
            🚀 Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
