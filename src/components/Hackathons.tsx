
const hackathons = [
  {
    name: "hackfest",
    project: "digital twin",
    year: "2025"
  },
  {
    name: "intel ai hackathon",
    project: "trash track",
    year: "2024"
  },
  {
    name: "hackman",
    project: "the tao of",
    year: "2023"
  }
  
];

const Hackathons = () => (
  <section id="hackathons" className="px-6 pb-24 max-w-2xl mx-auto font-mono animate-fade-in">
    <h2 className="text-sm text-gray-400 dark:text-gray-600 mb-5 uppercase tracking-widest">Hackathons</h2>
    <ul className="space-y-5">
      {hackathons.map((h, i) => (
        <li key={i} className="flex justify-between items-start text-sm text-gray-700 dark:text-gray-300">
          <span>
            {h.name}
            <span className="ml-2 text-xs text-gray-400">{h.project}</span>
          </span>
          <span className="text-xs text-gray-300 dark:text-gray-600">{h.year}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Hackathons;
