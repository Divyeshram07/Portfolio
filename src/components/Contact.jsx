import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fiwpwga",
        "template_a35cnuf",
        form.current,
        "9BXJlkZTGZYLn2jAp"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-8">

          <div>
            <label className="block text-sm mb-2 text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
