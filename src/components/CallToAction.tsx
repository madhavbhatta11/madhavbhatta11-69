const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '20+', label: 'Projects Completed' },
    { value: '5+', label: 'Technologies Mastered' },
    { value: '100%', label: 'Commitment Level' },
    { value: '∞', label: 'Learning Potential' },
  ];

  return (
    <section className="section-spacing bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent transform -skew-y-6" />
      </div>

      <div className="container-section relative z-10 text-justify">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-wide text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Text Content Full Width */}
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's Build Something <span className="text-accent">Together</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
            Open to internships, collaborations, and innovative projects. Whether you're looking 
            for a passionate developer, a creative problem-solver, or someone eager to push the 
            boundaries of technology, I'm ready to contribute to your next big idea.
          </p>

          <div>
            <button 
              onClick={scrollToContact}
              className="btn-tech text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
