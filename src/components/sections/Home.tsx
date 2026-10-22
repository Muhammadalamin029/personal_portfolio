import { RevealOnScroll } from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto text-center z-10 px-5">
          <p className="text-sm md:text-base uppercase tracking-[0.24em] text-green-400 mb-6">
            Full-stack developer · Product builder
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-7 tracking-tight leading-[1.08] text-white">
            I build web products
            <span className="block text-green-400 mt-2">that do useful work.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-9 max-w-2xl mx-auto">
            I'm Ameenu Musa, a developer focused on building practical digital
            products, from polished user interfaces to the APIs and workflows
            behind them.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="bg-green-500 text-black py-3 px-6 rounded-lg font-semibold transition-colors hover:bg-green-400"
            >
              Explore selected work
            </a>
            <a
              href="#contact"
              className="border border-white/20 text-white py-3 px-6 rounded-lg font-medium transition-colors hover:border-green-400/60 hover:text-green-300"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/Muhammadalamin029"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ameenumhusah/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
