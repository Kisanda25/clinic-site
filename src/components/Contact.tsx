import React from "react";

export default function Contact(): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
        <input className="w-full p-3 border rounded-lg" placeholder="Name" required />
        <input className="w-full p-3 border rounded-lg" type="email" placeholder="Email" required />
        <textarea className="w-full p-3 border rounded-lg" placeholder="Message" />
        <button className="w-full bg-green-700 text-white py-3 rounded-full hover:bg-green-800 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}