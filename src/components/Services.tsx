import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Activity, Microscope } from "lucide-react";

export default function Services(): JSX.Element {
  const services = [
    { title: "General", icon: <Stethoscope />, items: ["Consultation", "Family Planning", "Wound Care"] },
    { title: "Screening", icon: <HeartPulse />, items: ["HIV & TB", "STI Screening"] },
    { title: "Procedures", icon: <Activity />, items: ["Implant Removal", "Circumcision", "PAP Smear"] },
    { title: "Diagnostics", icon: <Microscope />, items: ["Blood Test", "EKG", "Scan"] },
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <div className="text-green-600 mb-4">{service.icon}</div>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <ul className="text-sm space-y-1">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}