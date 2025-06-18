
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start animate-fade-in font-mono px-6">
      <h1 className="text-3xl md:text-5xl font-light text-black dark:text-white mb-3 lowercase select-none tracking-tight">
        anthahkarana
      </h1>
      <p className="text-md md:text-lg font-light text-gray-500 dark:text-gray-300 mb-10 lowercase">
        software developer
      </p>
      <div className="opacity-50 text-sm text-left text-gray-400 dark:text-gray-600 lowercase space-y-0.5">
        <p>building experiences</p>
        <p>with code & curiosity</p>
      </div>
    </section>
  );
};

export default Hero;
