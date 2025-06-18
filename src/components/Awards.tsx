
const awards = [
  {
    name: "cisco forecast league champion",
    by: "cisco systems, inc.",
    year: "2025"
  }
];

const Awards = () => (
  <section id="awards" className="px-6 pb-24 max-w-2xl mx-auto font-mono animate-fade-in">
    <h2 className="text-sm text-gray-400 dark:text-gray-600 mb-5 uppercase tracking-widest">Awards</h2>
    <ul className="space-y-5">
      {awards.map((a, i) => (
        <li key={i} className="flex justify-between items-start text-sm text-gray-700 dark:text-gray-300">
          <span>
            {a.name}
            <span className="ml-2 text-xs text-gray-400">{a.by}</span>
          </span>
          <span className="text-xs text-gray-300 dark:text-gray-600">{a.year}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Awards;
