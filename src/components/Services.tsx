export default function Services(): JSX.Element {
  const services: { title: string; items: string[] }[] = [
    { title: "General", items: ["Consultation", "Family Planning", "Wound Care"] },
    { title: "Screening", items: ["HIV & TB", "STI Screening"] },
    { title: "Procedures", items: ["Implant Removal", "Circumcision", "PAP Smear"] },
    { title: "Diagnostics", items: ["Blood Test", "EKG", "Pregnancy Scan"] },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-3xl text-center font-bold mb-10">Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {services.map((service) => (
          <div key={service.title} className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">{service.title}</h3>
            <ul className="text-sm space-y-1">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
