import React from "react";

export default function Contact(): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <section id="contact" className="py-16 max-w-3xl mx-auto px-6">
      <h2 className="text-3xl text-center font-bold">Contact</h2>
      <p className="text-center mt-4">+27 60 263 9446</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input className="w-full p-3 border" placeholder="Name" required />
        <input className="w-full p-3 border" type="email" placeholder="Email" required />
        <textarea className="w-full p-3 border" placeholder="Message" />
        <button className="bg-green-700 text-white w-full py-3">Send</button>
      </form>
    </section>
  );
}