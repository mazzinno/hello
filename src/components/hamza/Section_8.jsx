const Section_8 = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <div className="max-w-[1200px] mx-auto px-4">
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
              Notre processus est conçu pour maximiser l&apos;impact tout en minimisant les risques, garantissant des résultats tangibles pour nos clients.
            </p>
          </div>

          {/* Right side - Divided into two */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-purple-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">+50 Projets</h3>
              <p className="text-slate-600">Réalisés avec succès pour nos clients</p>
            </div>
            <div className="bg-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">95% Satisfaction</h3>
              <p className="text-slate-600">Taux de satisfaction client</p>
            </div>
          </div>
        </div>

        {/* Big container with rounded corners */}
        <div 
            className="bg-[url('src/assets/agadir.jpg')] bg-cover bg-center p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 min-h-[400px] relative"
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 rounded-2xl"></div>
            
            {/* Left side - Big description */}
            <div className="md:w-1/2 flex flex-col justify-center relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                    Pourquoi nous choisir ?
                </h3>
                <p className="text-white text-lg leading-relaxed">
                    Avec une combinaison unique d&apos;expertise technique, de créativité et de compréhension des affaires, nous transformons les idées en solutions numériques performantes.
                </p>
            </div>

            {/* Right side - Logo */}
            <div className="md:w-1/2 flex items-center justify-center relative z-10">
                <span className="text-white font-semibold text-5xl"><span className="text-blue-500">Dev</span>Futur.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Section_8;
