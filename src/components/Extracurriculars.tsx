
const extracurriculars = [
  {
    activity: "NodeDotAI",
    role: "President",
    period: "2024"
  },
  {
    activity: "TEDxBITBangalore",
    role: "Social Media Designer",
    period: "2024"
  },
  {
    activity: "Google Developer Student Clubs",
    role: "Hacktoberfest Lead",
    period: "2023"
  }
];

const Extracurriculars = () => (
  <section id="extracurriculars" className="px-6 pb-24 max-w-2xl mx-auto font-mono animate-fade-in">
    <h2 className="text-sm text-gray-400 dark:text-gray-600 mb-5 uppercase tracking-widest">Extracurriculars</h2>
    <ul className="space-y-5">
      {extracurriculars.map((e, i) => (
        <li key={i} className="flex justify-between items-start text-sm text-gray-700 dark:text-gray-300">
          <span>
            {e.activity}
            <span className="ml-2 text-xs text-gray-400">{e.role}</span>
          </span>
          <span className="text-xs text-gray-300 dark:text-gray-600">{e.period}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Extracurriculars;
