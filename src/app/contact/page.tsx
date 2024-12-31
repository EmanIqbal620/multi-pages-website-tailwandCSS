export default function Contact() {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <section className="contact-form bg-white shadow-lg p-6 rounded-md max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 fade-in">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full p-3 border border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    );
  }
  