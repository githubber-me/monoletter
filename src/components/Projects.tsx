
const projects = [
  {
    title: "learnkannada",
    tech: "react, node.js, python",
    year: "2025"
  },
  {
    title: "cisco forecaster",
    tech: "python, streamlit, scikit-learn",
    year: "2025"
  },
  {
    title: "trash track",
    tech: "flutter, firebase",
    year: "2024"
  }
];

const Projects = () => (
  <section id="work" className="px-6 pb-24 max-w-2xl mx-auto font-mono animate-fade-in">
    <h2 className="text-sm text-gray-400 dark:text-gray-600 mb-5 uppercase tracking-widest">Work</h2>
    <ul className="space-y-5">
      {projects.map((p, i) => (
        <li key={i} className="flex justify-between items-start text-sm text-gray-700 dark:text-gray-300">
          <span>
            {p.title}
            <span className="ml-2 text-xs text-gray-400">{p.tech}</span>
          </span>
          <span className="text-xs text-gray-300 dark:text-gray-600">{p.year}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
