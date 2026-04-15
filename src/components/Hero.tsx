import { motion } from "framer-motion";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        Hope Health Care Surgery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg"
      >
        Professional & Affordable Healthcare in Cape Town
      </motion.p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="mt-8 inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold shadow-lg"
      >
        Book Appointment
      </motion.a>
    </section>
  );
}