import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_w3cheab",
        "template_g56a6r7",
        form.current,
        "VxfnLPxX7m2s8436q"
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setFormData({
          email: "",
          name: "",
          subject: "",
          message: "",
        });

        form.current.reset();
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <p className='text-cyan-400 font-semibold tracking-[0.2em] uppercase font-["Bricolage Grotesque"]'>
            Get In Touch
          </p>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white font-["Bricolage Grotesque"] leading-tight'>
            Let’s build something amazing together
          </h2>

          <p className='text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-["Bricolage Grotesque"]'>
            I’d love to hear from you. Whether you have a project idea, an
            opportunity, or just want to connect, send me a message and I’ll get
            back to you soon.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-md p-4">
              <h3 className="text-white font-semibold mb-1">Quick Response</h3>
              <p className="text-sm text-gray-300">
                Usually replies within a short time.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-md p-4">
              <h3 className="text-white font-semibold mb-1">Open to Work</h3>
              <p className="text-sm text-gray-300">
                Available for collaboration and opportunities.
              </p>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white/10 backdrop-blur-xl shadow-2xl p-5 sm:p-7 md:p-8 space-y-5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-yellow-500/10 pointer-events-none"></div>

          <div className="relative">
            <h3 className='text-white text-xl sm:text-2xl font-bold mb-2 font-["Bricolage Grotesque"]'>
              Connect With Me
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Fill out the form below and I’ll respond as soon as possible.
            </p>
          </div>

          {status.message && (
            <div
              className={`relative rounded-xl border px-4 py-3 text-sm font-medium ${
                status.type === "success"
                  ? "border-green-500/40 bg-green-500/15 text-green-300"
                  : "border-red-500/40 bg-red-500/15 text-red-300"
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="relative grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-200 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full rounded-xl bg-[#0d0b21]/90 text-white border border-white/10 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition font-["Bricolage Grotesque"]'
              />
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full rounded-xl bg-[#0d0b21]/90 text-white border border-white/10 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition font-["Bricolage Grotesque"]'
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-200 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              className='w-full rounded-xl bg-[#0d0b21]/90 text-white border border-white/10 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition font-["Bricolage Grotesque"]'
            />
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-200 mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className='w-full rounded-xl bg-[#0d0b21]/90 text-white border border-white/10 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition resize-none font-["Bricolage Grotesque"]'
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:scale-[0.98] active:scale-[0.97] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;