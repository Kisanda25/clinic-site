export default function Hero(): JSX.Element {
  return (
    <section className="bg-green-700 text-white py-20 text-center">
      <h1 className="text-4xl font-bold">Hope Health Care Surgery</h1>
      <p className="mt-4">Your trusted clinic in Cape Town</p>
      <a href="#contact" className="mt-6 inline-block bg-white text-green-700 px-6 py-3 rounded-2xl">
        Book Appointment
      </a>
    </section>
  );
}