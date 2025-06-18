
const Contact = () => (
  <section id="contact" className="px-6 pb-16 max-w-2xl mx-auto font-mono animate-fade-in">
    <h2 className="text-sm text-gray-400 dark:text-gray-600 mb-5 uppercase tracking-widest">Contact</h2>
    <div className="flex flex-col gap-4">
      <a href="mailto:karanaonmail@gmail.com" className="text-xs text-gray-400 dark:text-gray-600 hover:underline">
        karanaonmail@gmail.com
      </a>
      <div className="flex gap-3 text-xs text-gray-300 dark:text-gray-600">
        <a href="https://github.com/githubber-me" className="hover:underline">github</a>
        <a href="https://www.linkedin.com/in/anthahkarana/" className="hover:underline">linkedin</a>
        <a href="https://x.com/me_minchu" className="hover:underline">twitter</a>
        <a href="https://anthahkarana.tech" className="hover:underline">portfolio</a>
      </div>
    </div>
  </section>
);

export default Contact;
