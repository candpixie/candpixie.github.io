import { Mail, Linkedin, Github, MapPin, Briefcase, GraduationCap, Award, Music, Code, Palette, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-gray-50 to-pink-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-200/60 to-gray-300/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium">
                Engineer • Innovator • Creator
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight">
                Candy Xie
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Chemical Engineering student at NYU with a passion for innovation, STEM education, and creating meaningful impact through technology and science.
              </p>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <a href="mailto:candyxie@nyu.edu" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                  <Mail size={20} />
                  <span>candyxie@nyu.edu</span>
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                  <MapPin size={20} />
                  <span>New York, NY</span>
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/80 hover:bg-pink-200 rounded-full transition-all hover:scale-110 shadow-md">
                  <Linkedin size={24} className="text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-white/80 hover:bg-pink-200 rounded-full transition-all hover:scale-110 shadow-md">
                  <Github size={24} className="text-gray-700" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-pink-300 to-gray-400 opacity-20 absolute -top-8 -right-8 blur-3xl"></div>
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-200/40 to-gray-300/40 backdrop-blur-sm border-4 border-white/50 shadow-2xl flex items-center justify-center">
                <span className="text-6xl">🌸</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Education Section */}
        <section className="space-y-8 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-pink-400" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Education</h2>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100/50 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">New York University, Tandon School of Engineering</h3>
                <p className="text-lg text-gray-600 mt-2">Bachelor of Science, Chemical and Biomolecular Engineering</p>
                <p className="text-pink-400 font-medium mt-1">Planned Minor: Computer Science</p>
              </div>
              <span className="text-gray-500 font-medium">Aug 2025 – May 2029</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-pink-100 text-gray-700 rounded-full text-sm">HKSES Scholarship</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">NYU Project Outreach</span>
              <span className="px-4 py-2 bg-pink-100 text-gray-700 rounded-full text-sm">HESS Social Media Head</span>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="space-y-8 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="flex items-center gap-3">
            <Award className="text-pink-400" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Featured Venture</h2>
          </div>
          <div className="bg-gradient-to-br from-pink-200/40 to-gray-200/40 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-pink-200/50">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="inline-block px-3 py-1 bg-pink-300/60 rounded-full text-sm font-semibold text-gray-800 mb-3">
                  Current Project
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-3">MeloMed</h3>
                <p className="text-gray-600 font-medium mb-2">Founder & CEO</p>
              </div>
              <span className="text-gray-500 font-medium">Sep 2025 – Present</span>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4 text-lg">
              Building an AI-driven behavioral-wellness platform that fuses music, lyric analysis, and journaling to help Gen Z users understand and regulate emotions through data-driven reflection. Designing therapeutic-intelligence features with ethical safeguards.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="flex items-center gap-3">
            <Briefcase className="text-pink-400" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
          </div>
          <div className="grid gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Jane Street</h3>
                  <p className="text-lg text-gray-600 mt-1">WiSE Program</p>
                </div>
                <span className="text-gray-500 font-medium">Jul 2025</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Selected for competitive women in STEM program to develop insights on trading</span></li>
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Gained exposure to quantitative trading concepts through strategy games like Figgie and Estimathon</span></li>
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Spotlight Enterprises Limited</h3>
                  <p className="text-lg text-gray-600 mt-1">Assistant Clubhouse Officer</p>
                </div>
                <span className="text-gray-500 font-medium">Jul 2025 – Aug 2025</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Managed clubhouse documents and monitored facilities operations with information systems</span></li>
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Acted as liaison between 1000+ residents and management</span></li>
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">China Resources Cement</h3>
                  <p className="text-lg text-gray-600 mt-1">Summer Intern</p>
                </div>
                <span className="text-gray-500 font-medium">Aug 2024</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Shadowed on-site engineering operations at Redland Concrete and Quality Control Consultants</span></li>
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Supported company-wide event coordination</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership & Research */}
        <section className="space-y-8 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="flex items-center gap-3">
            <Globe className="text-pink-400" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Leadership & Research</h2>
          </div>
          <div className="grid gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">MedicSFacts</h3>
                  <p className="text-lg text-gray-600 mt-1">Founder & President</p>
                </div>
                <span className="text-gray-500 font-medium">Dec 2022 – Dec 2024</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Built international science educational initiative with 3,600+ readers across 4 continents</span></li>
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Led team in creating newsletters, interviews, and social media campaigns</span></li>
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">IEEE Young Engineers</h3>
                  <p className="text-lg text-gray-600 mt-1">Researcher</p>
                </div>
                <span className="text-gray-500 font-medium">Apr 2023 – Jan 2025</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Investigated light pollution impacts on local ecosystem and health from UNSDGs perspectives</span></li>
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Published research paper on ResearchGate</span></li>
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Hong Kong Academy for Gifted Education</h3>
                  <p className="text-lg text-gray-600 mt-1">Innovator</p>
                </div>
                <span className="text-gray-500 font-medium">May 2024 – Aug 2025</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex gap-3"><span className="text-pink-400 mt-1">•</span><span>Designed rehabilitation product for stroke patients using Python, SketchUp, and 3D Printing</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8 scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="flex items-center gap-3">
            <Code className="text-pink-400" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Skills & Interests</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-100/60 to-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100/50">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Code size={24} className="text-pink-400" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Java</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Machine Learning & AI</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Data Analysis</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">3D Fabrication</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Adobe Creative Suite</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100/60 to-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Globe size={24} className="text-pink-400" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">English (Fluent)</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Cantonese (Fluent)</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Mandarin (Fluent)</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Spanish (Intermediate)</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100/60 to-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100/50 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Music size={24} className="text-pink-400" />
                Creative Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Recorder (Soloist & Composer)</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Violin</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Piano</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Music Composition</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Ballet</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Contemporary Dance</span>
                <span className="px-3 py-2 bg-white/80 text-gray-700 rounded-full text-sm">Debate & Public Speaking</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-200/60 to-pink-200/60 backdrop-blur-sm mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Open to opportunities in engineering, innovation, and STEM education
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:candyxie@nyu.edu" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              Get in Touch
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              LinkedIn
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              GitHub
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2025 Candy Xie. Designed with creativity and passion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
