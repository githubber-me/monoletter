const education = [
  {
    degree: "B.E. in Artificial Intelligence and Machine Learning",
    institution: "Bangalore Institute of Technology",
    year: "2022-2026"
  },
];

const Education = () => (
  <section id="education" className="px-6 pb-24 max-w-2xl mx-auto font-mono animate-fade-in">
    <h2 className="text-sm text-gray-400 dark:text-gray-600 mb-5 uppercase tracking-widest">Education</h2>
    <ul className="space-y-5">
      {education.map((e, i) => (
        <li key={i} className="flex justify-between items-start text-sm text-gray-700 dark:text-gray-300">
          <div>
            <div>{e.degree}</div>
            <div className="text-xs text-gray-400">{e.institution}</div>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">{e.year}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
