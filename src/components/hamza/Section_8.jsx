const Section_8 = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big title on the left */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
          Notre Approche Unique
        </h2>

        {/* Main container divided into two */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left side - Description */}
          <div className="space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed">
              Nous croyons en une approche holistique du développement web, combinant design, technologie et stratégie pour créer des solutions qui dépassent les attentes.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Notre processus est conçu pour maximiser l'impact tout en minimisant les risques, garantissant des résultats tangibles pour nos clients.
            </p>
          </div>

          {/* Right side - Divided into two */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">+50 Projets</h3>
              <p className="text-slate-600">Réalisés avec succès pour nos clients</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">95% Satisfaction</h3>
              <p className="text-slate-600">Taux de satisfaction client</p>
            </div>
          </div>
        </div>

        {/* Big container with rounded corners */}
        <div className="bg-[url('https://placehold.co/400x300')] bg-cover bg-center p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 min-h-[400px]">
          {/* Left side - Big description */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Pourquoi nous choisir ?
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Avec une combinaison unique d'expertise technique, de créativité et de compréhension des affaires, nous transformons les idées en solutions numériques performantes.
            </p>
          </div>

          {/* Right side - Logo */}
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="bg-blue-500 w-20 h-20 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">DF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_8;
