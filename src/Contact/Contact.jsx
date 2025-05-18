import React, { useState ,useRef} from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
   const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
     setLoading(true);

    // Replace these with your actual EmailJS credentials
    emailjs.sendForm(
      'service_w3cheab', // From EmailJS dashboard
      'template_g56a6r7', // From EmailJS dashboard
      form.current,
      'VxfnLPxX7m2s8436q' // From EmailJS dashboard
    )
      .then((result) => {
        setStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        form.current.reset();
      })
      .catch((error) => {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
      })
      .finally(() => {
        setLoading(false);
        // Clear status after 5 seconds
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      });
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-10 ">
      <h2 className="text-4xl font-bold hover:border-b-4 border-cyan-500 pb-2 transition-all duration-100  text-white mb-2">CONTACT</h2>
      <div className="w-24 h-1 mb-6 rounded-full"></div>
      <p className="text-gray-300 text-center max-w-xl mb-10">
        I'd love to hear from you—reach out for any opportunities or questions!
      </p>

      <form
      ref={form}
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-pink-600 to-gray-400 p-8 rounded-xl shadow-xl w-full max-w-md space-y-4"
      >
        <h3 className="text-white text-lg font-semibold mb-4">
          Connect With Me 🚀
        </h3>
        {status.message && (
          <div className={`p-4 rounded-md ${
            status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {status.message}
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-[#0d0b21] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-[#0d0b21] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#0d0b21] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 rounded-md bg-[#0d0b21] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>

        <button
          type="submit" onSubmit={handleSubmit} disabled={loading}
          className="w-full py-3 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold hover:opacity-90 transition"
        >
         {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
