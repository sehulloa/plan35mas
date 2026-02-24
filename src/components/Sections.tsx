import { motion } from "motion/react";
import { CheckCircle2, XCircle, BookOpen, ClipboardList, ShoppingCart, Clock, ArrowRight, Quote } from "lucide-react";

export const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-beige pt-20 pb-16 md:pt-32 md:pb-24">
    <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Plan 35+</span>
        <h1 className="text-4xl md:text-6xl text-primary leading-tight mb-6">
          Organiza tu alimentación y movimiento sin improvisar
        </h1>
        <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
          En 7 días estructurados y con solo 20 minutos de planificación semanal. Pensado específicamente para personas 35+ que quieren bienestar sin extremos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#pricing" className="cta-primary text-center">
            👉 Obtener PLAN 35+ por $9.99
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" 
          alt="Persona organizando en la cocina" 
          className="rounded-2xl shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="text-accent w-5 h-5" />
            <span className="font-bold text-sm">20 min / semana</span>
          </div>
          <p className="text-xs text-charcoal/60">Estructura &gt; Motivación</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export const Problem = () => (
  <section className="bg-beige/50 py-20">
    <div className="section-padding">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl mb-6 italic">¿Te suena familiar?</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {[
            "Sabes qué deberías comer, pero improvisas más de lo que te gustaría",
            "Has intentado planes que no logras sostener",
            "Sientes que el estrés y la falta de tiempo afectan tu constancia",
            "Un error pequeño suele llevarte a abandonar o 'reiniciar'",
            "Tu energía ya no es la misma que antes"
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <CheckCircle2 className="text-primary shrink-0 w-6 h-6" />
              <p className="text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
          <p className="text-xl leading-relaxed mb-6">
            Después de los 35, no es que no quieras cuidarte. Es que el tiempo, el cansancio y el estrés hacen que improvisar sea más fácil que planificar.
          </p>
          <p className="text-xl leading-relaxed font-semibold text-primary italic">
            "No es falta de voluntad. Es falta de estructura."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const KeyIdea = () => (
  <section className="bg-primary text-white py-20">
    <div className="section-padding text-center">
      <h2 className="text-3xl md:text-5xl mb-8 max-w-4xl mx-auto leading-tight">
        Después de los 35, el problema ya no es la información. Es el exceso de decisiones diarias.
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {[
          { text: "Ordenar tu alimentación sin rigidez", icon: "🍎" },
          { text: "Simplificar el movimiento sin castigo", icon: "🏃‍♂️" },
          { text: "Reducir la carga mental diaria", icon: "🧠" },
          { text: "Sostener hábitos sin culpa", icon: "✨" }
        ].map((item, i) => (
          <div key={i} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="text-4xl mb-4">{item.icon}</div>
            <p className="font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-2xl font-display italic">Menos improvisación. Más constancia.</p>
    </div>
  </section>
);

export const WhatIsIt = () => (
  <section className="py-20 bg-white">
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-primary mb-6">¿Qué es PLAN 35+?</h2>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            No es una dieta estricta ni un programa fitness intensivo. Es un sistema completo diseñado para adultos que quieren mejorar su bienestar sin depender de la motivación diaria.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-beige p-8 rounded-2xl">
            <h3 className="text-xl mb-4 text-primary">No es un reto. No es una dieta.</h3>
            <p className="leading-relaxed">
              Es una forma clara y sostenible de organizar tu proceso. El sistema te acompaña durante 7 días estructurados para ayudarte a organizar qué comer y cómo moverte de forma realista.
            </p>
          </div>
          <div className="bg-beige p-8 rounded-2xl">
            <h3 className="text-xl mb-4 text-primary">Ciclo repetible y ajustable</h3>
            <p className="leading-relaxed">
              Diseñado para adaptarse a semanas reales con trabajo y estrés. Puedes repetirlo y ajustarlo según tus necesidades cambiantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const WhyDifferent = () => (
  <section className="py-20 bg-beige/30">
    <div className="section-padding">
      <h2 className="text-3xl md:text-4xl text-center mb-16">¿Por qué PLAN 35+ es diferente?</h2>
      <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
        <div className="bg-gray-100 p-10 md:p-16">
          <h3 className="text-2xl mb-8 flex items-center gap-3">
            Lo que ya probaste <XCircle className="text-red-400" />
          </h3>
          <ul className="space-y-4">
            {[
              "Se basa en dietas restrictivas",
              "Exige entrenar todos los días",
              "Depende de motivación constante",
              "Castiga los errores",
              "Obliga a empezar de nuevo"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-center text-charcoal/60">
                <span className="text-red-400">❌</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary/10 p-10 md:p-16 border-l md:border-l-2 border-primary/20">
          <h3 className="text-2xl mb-8 flex items-center gap-3 text-primary">
            PLAN 35+ funciona diferente <CheckCircle2 className="text-primary" />
          </h3>
          <ul className="space-y-4">
            {[
              "No depende de motivación diaria - estructura fija",
              "7 días = 1 ciclo completo y repetible",
              "20 min semanales vs. planificación diaria",
              "Se adapta a semanas reales y energía variable",
              "Prioriza constancia sobre perfección"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-center font-medium">
                <span className="text-primary">✅</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export const Included = () => (
  <section className="py-20 bg-white">
    <div className="section-padding">
      <h2 className="text-3xl md:text-4xl text-center mb-16">Qué incluye el sistema completo</h2>
      
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white border-2 border-primary rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">GUÍA PRINCIPAL</div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-primary/10 p-6 rounded-2xl">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl mb-4">PLAN 35+ - Alimentación y Movimiento (PDF)</h3>
              <p className="text-charcoal/70 mb-6">La base del sistema que le da sentido a todo.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Guía de 7 días estructurados", "21 comidas con imagen", "Ejercicios simples para casa", "Mentalidad a largo plazo"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-primary w-4 h-4" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Sistema de Seguimiento Semanal",
            icon: <ClipboardList className="w-8 h-8 text-primary" />,
            desc: "Convierte el plan en algo medible sin obsesionarte con detalles.",
            features: ["Checklist simple", "Espacio de cumplimiento", "Mini evaluación práctica"]
          },
          {
            title: "Lista de Compras Inteligente",
            icon: <ShoppingCart className="w-8 h-8 text-primary" />,
            desc: "Reduce improvisación y decisiones en el supermercado.",
            features: ["Lista por categorías", "Mínimos esenciales", "Adaptable a presupuesto"]
          },
          {
            title: "Mini Guía de Organización",
            icon: <Clock className="w-8 h-8 text-primary" />,
            desc: "Implementa el plan con un hábito semanal de solo 20 minutos.",
            features: ["Método exacto 20 min", "Estructura &gt; Motivación", "Ajustar sin abandonar"]
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-beige/40 p-8 rounded-2xl border border-primary/5 shadow-sm"
          >
            <div className="mb-6">{item.icon}</div>
            <h4 className="text-xl mb-4">{item.title}</h4>
            <p className="text-sm text-charcoal/70 mb-6">{item.desc}</p>
            <ul className="space-y-2">
              {item.features.map((f, j) => (
                <li key={j} className="text-xs flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const HowItWorks = () => (
  <section className="py-20 bg-beige/20">
    <div className="section-padding">
      <h2 className="text-3xl md:text-4xl text-center mb-16">Cómo funciona el sistema</h2>
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Entiende", desc: "Enfoque con la Guía Principal" },
              { step: "2", title: "Aplica", desc: "Plan de 7 días (21 comidas + ejercicios)" },
              { step: "3", title: "Mide", desc: "Seguimiento con el Sistema Semanal" },
              { step: "4", title: "Simplifica", desc: "Lista de Compras Inteligente" },
              { step: "5", title: "Sostiene", desc: "Hábito de 20 min semanal" }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-charcoal/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center mt-16 text-xl text-primary font-semibold italic">
          "Un ciclo repetible y ajustable que funciona con tu vida real."
        </p>
      </div>
    </div>
  </section>
);

export const ForWho = () => (
  <section className="py-20 bg-white">
    <div className="section-padding">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-primary/5 p-10 rounded-3xl">
          <h3 className="text-2xl mb-8 text-primary flex items-center gap-3">
            Es para ti si... <CheckCircle2 />
          </h3>
          <ul className="space-y-4">
            {[
              "Tienes 35 años o más",
              "Quieres comer mejor sin dietas extremas",
              "Buscas estructura clara, no perfección imposible",
              "Prefieres algo práctico y repetible",
              "Ya probaste 'hacerlo intenso' sin sostenerlo",
              "Tienes poco tiempo y alta carga mental"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary shrink-0 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 p-10 rounded-3xl">
          <h3 className="text-2xl mb-8 text-charcoal/60 flex items-center gap-3">
            No es para ti si... <XCircle />
          </h3>
          <ul className="space-y-4 text-charcoal/60">
            {[
              "Buscas resultados rápidos o milagrosos",
              "Quieres entrenamientos intensos diarios",
              "Esperas un plan rígido sin margen de adaptación",
              "Disfrutas de retos agresivos o extremos",
              "Buscas transformaciones inmediatas"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <XCircle className="text-gray-400 shrink-0 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export const Proof = () => (
  <section className="py-20 bg-beige/40">
    <div className="section-padding">
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-sm border-l-8 border-primary relative">
        <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
        <p className="text-2xl italic leading-relaxed text-charcoal/80">
          "Después de probar este sistema durante 4 semanas, reduje mi tiempo de decisión sobre comidas de 30 minutos diarios a 20 minutos semanales, manteniendo constancia incluso en semanas de alta carga laboral y estrés. Lo más importante: no tuve que reiniciar ni una sola vez."
        </p>
      </div>
    </div>
  </section>
);

export const Pricing = () => (
  <section id="pricing" className="py-20 bg-white">
    <div className="section-padding">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-[2.5rem] p-8 md:p-16 text-center border border-primary/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest animate-pulse">
          Solo Enero 2025
        </div>
        
        <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Oferta de Lanzamiento</h2>
        <h3 className="text-3xl md:text-5xl mb-8">Acceso completo al Sistema PLAN 35+</h3>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-2xl text-charcoal/40 line-through">$29.99</span>
          <span className="text-6xl font-bold text-accent">$9.99</span>
          <span className="text-xl font-bold text-accent">USD</span>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-10 inline-block text-left mx-auto">
          <ul className="space-y-3 text-sm">
            {["Guía Principal PLAN 35+", "Sistema de Seguimiento Semanal", "Lista de Compras Inteligente", "Mini Guía de Organización", "Entrega digital inmediata"].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <button className="cta-primary w-full md:w-auto px-12 py-5 text-xl">
            👉 OBTENER PLAN 35+ AHORA - $9.99
          </button>
          <p className="text-xs text-charcoal/50 flex items-center justify-center gap-2">
            🔒 Compra segura a través de Hotmart • Primeras 500 copias
          </p>
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
          <p className="text-sm italic text-charcoal/70">
            "Por menos de lo que gastas en comida improvisada en 2 días, obtén un sistema estructurado que puedes usar durante años."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const FinalMessage = () => (
  <section className="py-20 bg-primary text-white text-center">
    <div className="section-padding max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl mb-12 italic">Un último mensaje...</h2>
      <div className="space-y-6 text-xl md:text-2xl mb-12">
        <p>Después de los 35, el verdadero cambio no se trata de hacer más, sino de hacer mejor.</p>
        <p className="font-bold">No necesitas extremos, necesitas constancia.</p>
        <p className="font-bold">No necesitas perfección, necesitas estructura.</p>
        <p className="font-bold">No necesitas motivación diaria, necesitas organización semanal.</p>
      </div>
      <p className="text-lg text-white/70 mb-8">
        PLAN 35+ es un primer paso claro hacia una forma más equilibrada de cuidarte.
      </p>
      <div className="text-3xl font-display font-bold">
        Porque después de los 35, avanzar no depende de la motivación. Depende de la estructura.
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-beige py-12 border-t border-primary/10">
    <div className="section-padding text-center">
      <div className="text-2xl font-display font-bold text-primary mb-4">PLAN 35+</div>
      <p className="text-sm text-charcoal/60 mb-8">Sostenibilidad. Estructura. Bienestar.</p>
      <div className="flex justify-center gap-8 text-xs text-charcoal/40 uppercase tracking-widest">
        <span>© 2025 Plan 35+</span>
        <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
        <a href="#" className="hover:text-primary transition-colors">Términos</a>
      </div>
    </div>
  </footer>
);
