const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-6" />
      </div>

      <div className="container-section relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">

          {/* Stats Above Heading */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">20+</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Commitment Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Learning Potential</div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's Build Something
            <span className="block text-accent">Together</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
            Open to internships, collaborations, and innovative projects
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Whether you're looking for a passionate developer, a creative problem-solver, 
            or someone eager to push the boundaries of technology, I'm ready to contribute 
            to your next big idea.
          </p>

          <button 
            onClick={scrollToContact}
            className="btn-tech text-lg px-8 py-4 hover-glow bg-blue-600 hover:bg-blue-700 text-white"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
