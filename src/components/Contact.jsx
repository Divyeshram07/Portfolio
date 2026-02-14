import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    if (!validateEmail(form.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    setLoading(true);
    toast.loading("Sending message...", { id: "sending" });

    try {
      await emailjs.send(
        "service_fiwpwga",
        "template_a35cnuf",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "9BXJlkZTGZYLn2jAp"
      );

      toast.success("Message sent successfully 🚀", { id: "sending" });

      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      toast.error("Failed to send message ❌", { id: "sending" });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-10">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${
              loading
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-slate-800 hover:scale-105"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}
