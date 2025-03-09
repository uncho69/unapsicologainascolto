import React, { useEffect, useState } from 'react';
import { 
  Calendar, MapPin, Video, Phone, Mail, Clock, Heart, Star, Users, 
  Brain, Sparkles, Smile, BookOpen, GraduationCap, Instagram, Menu 
} from 'lucide-react';
import ContactForm from './ContactForm';  // Importa il componente creato

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Stato per il menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <h1
            className={`text-2xl font-light ${
              isScrolled ? 'text-gray-800' : 'text-white'
            } pl-0`}
          >
            Dott.ssa Sara Brasili
          </h1>

          {/* Menu Desktop */}
          {/* ▼▼▼ Modifica: link desktop con stesso colore di Dott.ssa Sara Brasili ▼▼▼ */}
          <div
            className={`hidden md:flex gap-8 items-center ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <a href="#services" className="relative group">
              <span className="hover:text-rose-400 transition-colors">Servizi</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative group">
              <span className="hover:text-rose-400 transition-colors">Chi Sono</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#publications" className="relative group">
              <span className="hover:text-rose-400 transition-colors">Pubblicazioni</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative group">
              <span className="hover:text-rose-400 transition-colors">Contatti</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full"></span>
            </a>
          </div>
          {/* ▲▲▲ Fine modifica ▲▲▲ */}

          {/* Bottone Hamburger (solo mobile) */}
          <button 
            className={`block md:hidden ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Mobile a tendina */}
        {menuOpen && (
          <div className="md:hidden bg-white text-gray-800 shadow-md rounded-b-xl">
            <div className="flex flex-col px-4 py-4 gap-4">
              <a 
                href="#services" 
                onClick={() => setMenuOpen(false)}
                className="hover:text-rose-400 transition-colors"
              >
                Servizi
              </a>
              <a 
                href="#about" 
                onClick={() => setMenuOpen(false)}
                className="hover:text-rose-400 transition-colors"
              >
                Chi Sono
              </a>
              <a 
                href="#publications" 
                onClick={() => setMenuOpen(false)}
                className="hover:text-rose-400 transition-colors"
              >
                Pubblicazioni
              </a>
              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="hover:text-rose-400 transition-colors"
              >
                Contatti
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-7xl font-light mb-6 animate-fade-up">
            Alla ricerca dei colori
          </h1>
          <p className="text-2xl font-light mb-8 animate-fade-up animate-delay-100">
            Psicologa Clinica e Psicoterapeuta in formazione
          </p>
          <div className="flex justify-center gap-6 animate-fade-up animate-delay-200">
            <a
              href="#contact"
              className="bg-white text-gray-800 px-10 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 button-glow"
            >
              Inizia il Tuo Percorso
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all group"
            >
              <span className="group-hover:translate-x-2 transition-transform inline-block">
                Scopri di Più →
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center mb-4 text-gradient font-light">
            I Miei Servizi
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Un approccio personalizzato per accompagnarti nel tuo percorso di
            crescita personale
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card bg-white p-8 rounded-2xl card-shadow">
              <div className="relative">
                <MapPin className="w-12 h-12 mb-4 text-rose-600 animate-float" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-100 rounded-full -z-10 animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-medium mb-4">Sedute a Milano</h3>
              <p className="text-gray-600 mb-4">
                Consulenze in presenza a Milano, in un ambiente accogliente e
                riservato.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2 animate-slide-in">
                  <Star className="w-4 h-4 text-rose-400" />
                  <span>Ambiente confortevole</span>
                </li>
                <li className="flex items-center gap-2 animate-slide-in animate-delay-100">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Posizione centrale</span>
                </li>
              </ul>
            </div>
            <div className="service-card bg-white p-8 rounded-2xl card-shadow">
              <div className="relative">
                <MapPin className="w-12 h-12 mb-4 text-rose-600 animate-float" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-100 rounded-full -z-10 animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-medium mb-4">Sedute a Roma</h3>
              <p className="text-gray-600 mb-4">
                Incontri nel centro storico di Roma, in uno spazio tranquillo e
                professionale.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2 animate-slide-in">
                  <Star className="w-4 h-4 text-rose-400" />
                  <span>Ambiente confortevole</span>
                </li>
                <li className="flex items-center gap-2 animate-slide-in animate-delay-100">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Facilmente raggiungibile</span>
                </li>
              </ul>
            </div>
            <div className="service-card bg-white p-8 rounded-2xl card-shadow">
              <div className="relative">
                <Video className="w-12 h-12 mb-4 text-rose-600 animate-float" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-100 rounded-full -z-10 animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-medium mb-4">Sedute Online</h3>
              <p className="text-gray-600 mb-4">
                Consulenze comode da casa tua, con la stessa qualità ed
                efficacia.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2 animate-slide-in">
                  <Star className="w-4 h-4 text-rose-400" />
                  <span>Massima flessibilità</span>
                </li>
                <li className="flex items-center gap-2 animate-slide-in animate-delay-100">
                  <Video className="w-4 h-4 text-rose-400" />
                  <span>Piattaforma sicura</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl text-center mb-16 text-gradient font-light">
            Le Mie Specializzazioni
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform cursor-default">
              <div className="relative inline-block">
                <Brain className="w-16 h-16 mx-auto mb-4 text-rose-600 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-rose-200 rounded-full opacity-20 group-hover:scale-110 transition-transform"></div>
              </div>
              <h3 className="text-lg font-medium mb-2">Ansia e Stress</h3>
              <p className="text-gray-600">
                Gestione delle emozioni e tecniche di rilassamento
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform cursor-default">
              <div className="relative inline-block">
                <Heart className="w-16 h-16 mx-auto mb-4 text-rose-600 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-rose-200 rounded-full opacity-20 group-hover:scale-110 transition-transform"></div>
              </div>
              <h3 className="text-lg font-medium mb-2">Relazioni</h3>
              <p className="text-gray-600">
                Miglioramento dei rapporti interpersonali
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform cursor-default">
              <div className="relative inline-block">
                <Users className="w-16 h-16 mx-auto mb-4 text-rose-600 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-rose-200 rounded-full opacity-20 group-hover:scale-110 transition-transform"></div>
              </div>
              <h3 className="text-lg font-medium mb-2">Terapia di Coppia</h3>
              <p className="text-gray-600">Supporto per le dinamiche di coppia</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform cursor-default">
              <div className="relative inline-block">
                <Sparkles className="w-16 h-16 mx-auto mb-4 text-rose-600 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-rose-200 rounded-full opacity-20 group-hover:scale-110 transition-transform"></div>
              </div>
              <h3 className="text-lg font-medium mb-2">Crescita Personale</h3>
              <p className="text-gray-600">
                Sviluppo dell'autostima e realizzazione
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative group">
              <img
                src="/fotosara.jpeg"
                alt="Foto di Sara"
                className="rounded-2xl shadow-2xl hover-scale relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-500 rounded-2xl transform rotate-3 scale-105 -z-10 transition-transform group-hover:rotate-6"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl mb-8 text-gradient font-light">Chi Sono</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Sono Sara Brasili, Psicologa Clinica, Psicoterapeuta
                specializzanda presso la Scuola di Formazione in Psicoterapia
                Cognitiva (CTC), esperta in Sessuologia Clinica.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Fin da bambina, ho sempre saputo che la mia strada sarebbe stata
                quella dell'ascolto, guidata dal profondo desiderio di
                comprendere e sostenere. Per me, ogni percorso di supporto
                psicologico è un incontro unico tra mondi, un viaggio che si
                costruisce a partire dalla fiducia. Credo fermamente nel potere
                trasformativo della parola, uno strumento attraverso cui si
                dipanano emozioni, si creano legami e si intrecciano storie.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Abbraccio la bellezza e la complessità delle relazioni umane,
                convinta che l'amore sia il motore più potente della nostra
                esistenza, una forza silenziosa che dà forma alle nostre vite.
                Lavoro con pazienti di tutte le età, dai bambini agli adulti, e
                il mio obiettivo è offrire uno spazio in cui ognuno possa
                trovare sicurezza e libertà per scrivere nuove narrazioni di sé
                e aprirsi a nuove possibilità di stare nel mondo.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="bg-rose-100 p-3 rounded-full transition-transform group-hover:scale-110">
                    <Heart className="w-6 h-6 text-rose-600" />
                  </div>
                  <span className="text-gray-700">
                    Approccio Empatico e Trasformativo
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-rose-100 p-3 rounded-full transition-transform group-hover:scale-110">
                    <Star className="w-6 h-6 text-rose-600" />
                  </div>
                  <span className="text-gray-700">Ascolto Attivo e Profondo</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-rose-100 p-3 rounded-full transition-transform group-hover:scale-110">
                    <Smile className="w-6 h-6 text-rose-600" />
                  </div>
                  <span className="text-gray-700">
                    Spazio Sicuro per Nuove Narrazioni
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosa Faccio Section */}
      <section id="cosa-faccio" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl text-center mb-8 text-gradient font-light">
            Di cosa mi occupo 
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Nel mio lavoro come psicologa clinica, offro uno spazio di ascolto e
            supporto dedicato a chi sta attraversando momenti di difficoltà, a
            chi sente il bisogno di comprendere meglio se stesso e le proprie
            emozioni, a chi desidera ritrovare un equilibrio interiore. Ogni
            persona porta con sé un racconto fatto di esperienze, emozioni e
            pensieri che, a volte, possono diventare un limite, qualcosa che
            imprigiona e confonde, un peso difficile da comprendere e affrontare
            da soli. Il mio compito è creare un contesto sicuro in cui dare voce
            a ciò che preoccupa, disorienta o blocca, aiutando a trovare nuovi
            significati e strumenti per stare meglio. Nello specifico, mi occupo
            di tematiche come ansia e stress, problematiche relazionali,
            difficoltà a gestire e regolare le emozioni, scarsa autostima,
            conflitti interiori, fatiche legate a cambiamenti di vita, crisi
            esistenziali e di tutti quei momenti in cui il peso della vita
            sembra farsi più intenso. È attraverso il dialogo e la relazione che
            diventa possibile esplorare pensieri ed emozioni, sciogliere nodi
            irrisolti, individuare schemi di pensiero ricorrenti, riscoprire
            risorse interiori dimenticate, acquisendo così una maggiore
            consapevolezza di sé e dando un nuovo significato alla propria
            storia. Credo profondamente nel potere dell’incontro, nella
            possibilità di dare voce a ciò che dentro di noi chiede di essere
            ascoltato, nell’importanza di un sostegno che non si limiti ad
            alleviare un sintomo, ma che aiuti a ritrovare una direzione e un
            senso. Ogni percorso è unico, ogni storia merita di essere accolta
            con rispetto e attenzione. Il mio lavoro è quello di camminare
            accanto, con delicatezza e professionalità, nel viaggio più
            complesso e prezioso che possiamo intraprendere: quello verso noi
            stessi.
          </p>
        </div>
      </section>

      {/* Specializzazioni Approfondite Section */}
      <section
        id="specializzazioni-approfondite"
        className="py-20 bg-gradient-to-br from-rose-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl text-center mb-16 text-gradient font-light">
            Su di me 
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-medium mb-4">
                Affettività e Sessualità: l’amore come il motore della nostra
                esistenza
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nel mio percorso formativo ho scelto di dedicarmi
                all’approfondimento delle tematiche affettive e relazionali,
                perché credo che l’amore sia il motore più potente della nostra
                esistenza. È una forza silenziosa eppure inarrestabile, che
                intreccia le nostre vite, modella i nostri desideri e definisce
                il nostro modo di essere nel mondo. Le relazioni che costruiamo
                definiscono chi siamo: coltivarle con cura significa arricchire
                la nostra vita e dare profondità al nostro essere. Un aspetto
                intrinsecamente legato all’affettività e all’identità di ogni
                persona è la sessualità. Nonostante la sua importanza
                fondamentale, troppo spesso viene trascurata, medicalizzata o
                distorta da narrazioni superficiali e cariche di tabù. La
                sessualità non è solo istinto o biologia, ma un linguaggio
                attraverso cui ci raccontiamo, esploriamo chi siamo e ci
                connettiamo con l’altro. È un territorio complesso, fatto di
                piacere e vulnerabilità, desideri e paure, norme culturali e
                libertà individuali. Nel mio lavoro come sessuologa clinica,
                accompagno le persone nella scoperta e nella comprensione della
                propria sessualità in tutte le sue sfaccettature. Mi rivolgo in
                particolare a chi sente di non riconoscersi nei modelli
                tradizionali, a chi vive la propria sessualità con dubbi o
                difficoltà, e a chi ha bisogno di uno spazio sicuro per
                esplorare e comprendere meglio se stesso. Infine, supporto
                individui e coppie nell'affrontare disfunzioni sessuali,
                aiutandoli a ritrovare il piacere e il benessere nella propria
                intimità. Credo fermamente che ogni persona abbia il diritto di
                esplorare, conoscere e vivere la propria sessualità in modo
                autentico, sereno e libero da pregiudizi.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">
                Accompagnare la crescita: un supporto per bambini e genitori
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                L’infanzia è un mondo fatto di emozioni intense, spesso difficili
                da esprimere con le parole. Prendere in carico un bambino
                significa accoglierlo nella sua interezza: comprendere il suo
                modo unico di stare al mondo, riconoscere i segnali della sua
                sofferenza e costruire insieme un percorso che lo aiuti a
                trovare nuove strade per esprimersi, sentirsi compreso e stare
                meglio. Grazie alla mia formazione in psicodiagnosi in età
                evolutiva, utilizzo strumenti specifici e scientificamente
                validati per inquadrare la problematica e individuare i bisogni
                del bambino: i disegni, le storie inventate, i giochi simbolici
                diventano finestre preziose sul suo mondo interiore, aiutandomi
                a comprendere il nucleo della sua sofferenza e a costruire un
                intervento su misura. Ma il mio lavoro non si ferma al bambino.
                I genitori sono una parte fondamentale del percorso: sono i suoi
                primi punti di riferimento, coloro che vivono con lui ogni giorno
                le sue gioie, le sue paure, i suoi successi e i suoi fallimenti.
                Spesso un genitore si sente smarrito di fronte alle difficoltà di
                un figlio, si chiede se sta facendo abbastanza, se ha sbagliato
                qualcosa, se c’è una strada giusta da seguire. Io sono qui per
                aiutarli a trovare risposte, ma soprattutto per costruire con
                loro un percorso di costante collaborazione. Perché la parte più
                importante del lavoro avviene a casa, nella quotidianità, nei
                piccoli gesti di ogni giorno. Non si tratta solo di ‘gestire’ un
                comportamento, ma di dare significato a ciò che sta dietro di
                esso, imparare a riconoscere i bisogni emotivi del proprio
                figlio e rispondere con maggiore consapevolezza e sicurezza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section
        id="publications"
        className="py-20 bg-gradient-to-br from-rose-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl text-center mb-8 text-gradient font-light">
            Pubblicazioni
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Contributi scientifici su riviste internazionali
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl card-shadow hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Frontiers in Psychology</h3>
                  <p className="text-gray-500 text-sm">2024</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Aschieri F, Brasili S, Cavallini A and Cera G (2024) Psychometric
                properties of the Italian version of the Parent Experience of
                Assessment Scale.
              </p>
              <a
                href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1271713/full"
                className="text-rose-600 hover:text-rose-700 inline-flex items-center gap-1 group"
              >
                <span>Leggi l'articolo</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl card-shadow hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Frontiers in Psychology</h3>
                  <p className="text-gray-500 text-sm">2024</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Aschieri, F., Cera, G., Fiorelli, E., and Brasili, S. (2024). A
                retrospective study exploring Parents' perceptions of their
                Child's assessment.
              </p>
              <a
                href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1271746/full"
                className="text-rose-600 hover:text-rose-700 inline-flex items-center gap-1 group"
              >
                <span>Leggi l'articolo</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl text-center mb-8 text-gradient font-light">
            Formazione Accademica
          </h2>

          {/* Nuovo blocco per Laurea Triennale */}
          <div className="relative z-10 mb-16">
            <div className="flex justify-center">
              <div className="w-full md:w-1/2 text-center">
                <div className="bg-white p-6 rounded-2xl card-shadow hover:shadow-xl transition-all hover:-translate-y-1 inline-block">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-rose-600" />
                    <h3 className="text-xl font-medium">Laurea Triennale</h3>
                  </div>
                  <h4 className="text-lg text-gray-700 mb-2">
                    Scienze e Tecniche Psicologiche
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Università Cattolica del Sacro Cuore
                  </p>
                  <p className="text-rose-600 font-medium">Con Lode</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Nascosta la linea su mobile (hidden md:block) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-rose-200"></div>

            <div className="relative z-10 mb-16">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12 relative">
                  {/* Pallino rosso nascosto su mobile */}
                  <div className="hidden md:block md:absolute md:-right-16 w-8 h-8 bg-rose-400 rounded-full border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-2xl card-shadow hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-rose-600" />
                      <h3 className="text-xl font-medium">Laurea Magistrale</h3>
                    </div>
                    <h4 className="text-lg text-gray-700 mb-2">
                      Psicologia clinica e della salute: persona, relazioni
                      famigliari e di comunità
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Università Cattolica del Sacro Cuore
                    </p>
                    <p className="text-rose-600 font-medium">
                      110/110 con Lode - 13/07/2023
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 relative mt-8 md:mt-32">
                  <div className="hidden md:block md:absolute md:-left-16 w-8 h-8 bg-rose-400 rounded-full border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-2xl card-shadow hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-rose-600" />
                      <h3 className="text-xl font-medium">Master</h3>
                    </div>
                    <h4 className="text-lg text-gray-700 mb-2">
                      Psicodiagnosi in età evolutiva: Test proiettivi, narrativi
                      e relazionali
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12 relative">
                  <div className="hidden md:block md:absolute md:-right-16 w-8 h-8 bg-rose-400 rounded-full border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-2xl card-shadow hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-rose-600" />
                      <h3 className="text-xl font-medium">Master</h3>
                    </div>
                    <h4 className="text-lg text-gray-700 mb-2">
                      Sessuologia Clinica
                    </h4>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 relative mt-8 md:mt-32">
                  <div className="hidden md:block md:absolute md:-left-16 w-8 h-8 bg-rose-400 rounded-full border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-2xl card-shadow hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-rose-600" />
                      <h3 className="text-xl font-medium">
                        Scuola di Specializzazione
                      </h3>
                    </div>
                    <h4 className="text-lg text-gray-700 mb-2">
                      Scuola di Formazione in Psicoterapia Cognitiva CTC
                    </h4>
                    <p className="text-gray-600 mb-2">In corso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl text-center mb-4 text-gradient font-light">
            Contattami
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            {/* Inserisci qui eventuali informazioni aggiuntive */}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="bg-rose-100 p-4 rounded-full transition-all group-hover:scale-110 group-hover:bg-rose-200">
                    <Phone className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Telefono</h3>
                    <p className="text-gray-600">+39 3453381256</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-rose-100 p-4 rounded-full transition-all group-hover:scale-110 group-hover:bg-rose-200">
                    <Mail className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-gray-600">brasilisara2@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-rose-100 p-4 rounded-full transition-all group-hover:scale-110 group-hover:bg-rose-200">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Orari</h3>
                    <p className="text-gray-600">Lun - Ven: ? - ?</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-light mb-4">Dott.ssa Sara Brasili</h3>
              <p className="text-gray-600">
                Psicologa Clinica e Psicoterapeuta in formazione specializzata
                in crescita personale e benessere emotivo.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <a
                  href="https://www.instagram.com/unapsicologainascolto?igsh=MjFiejNmd3B1dmZl&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-rose-600 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <span className="text-gray-600">Seguimi su Instagram</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Sedi</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  Via Giovanni Arrivabene 51, 00191 – Roma (RM) - Neurosystem
                  Kids &amp; Co.
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  Viale Leonardo da Vinci 43, 20090 – Trezzano sul Naviglio (MI)
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  Via Claudio Monteverdi 1, 20124 – Milano (MI) - Istituto
                  Psicologico Italiano
                </li>
                <li className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-rose-400" />
                  Consulenze Online
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Orari</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-rose-400" />
                  Lunedì - Venerdì
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-rose-400" />
                  9:00 - 19:00
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-400" />
                  Su appuntamento
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Contatti</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-400" />
                  +39 3453381256
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-400" />
                  brasilisara2@gmail.com prova
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 pt-8 border-t">
            <p>
              © {new Date().getFullYear()} Dott.ssa Sara Brasili - Psicologa
              Clinica e Psicoterapeuta in formazione. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
