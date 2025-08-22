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

      <div className="container-section relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-left tracking-tight animate-fade-in">
          Let's Build Something <span className="text-accent">Together</span>
        </h2>

        {/* Stats and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column: Stats 2x2 grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wide text-gray-300 text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Paragraph */}
          <div className="text-justify text-gray-300 leading-relaxed">
            Open to internships, collaborations, and innovative projects. Whether you're looking
            for a passionate developer, a creative problem-solver, or someone eager to push the
            boundaries of technology, I'm ready to contribute to your next big idea.
          </div>
        </div>

        {/* Contact Me Button Centered */}
        <div className="flex justify-center">
          <button 
            onClick={scrollToContact}
            className="btn-tech text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
