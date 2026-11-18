'use client';

import ResumeViewer from "./ResumeViewer";

export default function PortfolioContent() {
  return (
    <>
      <header className="sticky top-0 z-50">
      
        <nav className="navbar glass max-w-6xl mx-auto mt-4 rounded-2xl px-4 shadow-2xl border border-white/10 backdrop-blur-lg">
      
          
          <div className="navbar-start">
      
            <a href="#home" className="text-xl font-extrabold tracking-wide text-primary">
              Maruf
            </a>
      
          </div>
      
      
          
          <div className="navbar-center hidden lg:flex">
      
            <ul className="menu menu-horizontal px-1 gap-2 font-medium">
      
              <li><a className="hover:text-primary transition" href="#home">Home</a></li>
      
              <li><a className="hover:text-primary transition" href="#education">Education</a></li>
      
              <li><a className="hover:text-primary transition" href="#experience">Experience</a></li>
      
              <li><a className="hover:text-primary transition" href="#courses">Courses</a></li>
      
              <li><a className="hover:text-primary transition" href="#skills">Skills</a></li>
      
              <li><a className="hover:text-primary transition" href="#projects">Projects</a></li>
      
              <li><a className="hover:text-primary transition" href="#achievements">Achievements</a></li>
      
              <li><a className="hover:text-primary transition" href="#contact">Contact</a></li>
      
            </ul>
      
          </div>
      
      
          
          <div className="navbar-end gap-2">
      
            
            <a className="btn btn-primary btn-sm rounded-xl shadow-lg hover:scale-105 transition"
               href="/media/MARUF_HASAN_CHOWDHURY-CV.pdf"
               download>
      
              Download CV
      
            </a>
      
      
            
            <button id="theme-toggle"
                    className="btn btn-ghost btn-sm rounded-xl text-lg hover:bg-base-100/20"
                    title="Theme">
      
              🌙
      
            </button>
      
      
            
            <div className="dropdown dropdown-end lg:hidden">
      
              <div tabIndex="0" role="button" className="btn btn-ghost btn-sm rounded-xl">
      
                ☰
      
              </div>
      
              <ul tabIndex="0"
                  className="dropdown-content menu p-3 shadow-xl glass rounded-2xl w-56 mt-3 border border-white/10">
      
                <li><a href="#home">Home</a></li>
      
                <li><a href="#education">Education</a></li>
      
                <li><a href="#experience">Experience</a></li>
      
                <li><a href="#courses">Courses</a></li>
      
                <li><a href="#skills">Skills</a></li>
      
                <li><a href="#projects">Projects</a></li>
      
                <li><a href="#achievements">Achievements</a></li>
      
                <li><a href="#contact">Contact</a></li>
      
              </ul>
      
            </div>
      
          </div>
      
        </nav>
      
      </header>
      
              
      
        <section id="home" className="max-w-6xl mx-auto px-4 pt-10 pb-6">
          <div className="glass rounded-3xl p-6 md:p-10 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              
              <div className="flex justify-center lg:justify-start">
                <div className="avatar">
                  <div className="w-52 md:w-64 rounded-3xl ring ring-primary ring-offset-base-100 ring-offset-4">
                    <img src="/media/maruf.jpeg" alt="Maruf Hasan Chowdhury" />
                  </div>
                </div>
              </div>
      
              
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-extrabold">Welcome to My Website</h1>
      
                <h2 className="text-xl md:text-2xl font-bold">
                  Hi, I'm <span className="text-primary">MD. MARUF HASAN CHOWDHURY</span>
                </h2>
      
                <h3 className="opacity-80 font-semibold">Nickname: Maruf / Yeakin</h3>
      
                <p className="opacity-90">
                  <span className="font-bold">Research Interests:</span>
                  Artificial Intelligence, Machine Learning, Deep Learning, Data Science, NLP, Computer Vision
                </p>
      
                <div className="opacity-90">
                  <p className="font-bold">Development Skills:</p>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Frontend: HTML, CSS, JavaScript</li>
                    <li>Backend: C#, Java, PHP, SQL</li>
                  </ul>
                </div>
      
                <p className="opacity-90">
                  <span className="font-bold">Current Study:</span>
                  CSE Student at AIUB (11th Semester)
                </p>
      
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="#projects" className="btn btn-primary rounded-2xl">Explore My Projects</a>
                  <a href="#contact" className="btn btn-outline rounded-2xl">Contact</a>
                </div>
      
                <div className="flex flex-wrap gap-3 pt-2">
                  <a className="link link-hover" href="mailto:marufhasanchowdhury06@gmail.com" target="_blank">📧 Email</a>
                  <a className="link link-hover" href="https://github.com/maruf-hasan7081" target="_blank">💻 GitHub</a>
                  <a className="link link-hover" href="https://www.linkedin.com/in/maruf-hasan-chowdhury/" target="_blank">🔗
                    LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Video CV</h2>
            <h3 className="text-sm md:text-base opacity-70 mb-6">
              Watch my video CV to learn more about me.
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <div className="aspect-video">
                  <video className="w-full h-full object-contain" controls preload="metadata">
                    <source
                      src="/media/1772697477679_original-426f7631-9542-4938-8018-aeaf184e0bcb.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="education" className="max-w-6xl mx-auto px-4 py-8">
          <div className="glass rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Education</h2>
      
            <div className="grid md:grid-cols-3 gap-5">
              <div className="card bg-base-100/20 border border-white/10 shadow">
                <div className="card-body">
                  <h3 className="font-bold">Bachelor of Science in CSE</h3>
                  <p className="opacity-80">American International University-Bangladesh (AIUB), Dhaka</p>
                  <p className="opacity-80">CGPA: 3.60 | 11th Semester Running</p>
                </div>
              </div>
      
              <div className="card bg-base-100/20 border border-white/10 shadow">
                <div className="card-body">
                  <h3 className="font-bold">Higher Secondary Certificate (HSC)</h3>
                  <p className="opacity-80">Scholastica Model College, Narsingdi</p>
                  <p className="opacity-80">GPA: 4.58 | Year: 2021</p>
                </div>
              </div>
      
              <div className="card bg-base-100/20 border border-white/10 shadow">
                <div className="card-body">
                  <h3 className="font-bold">Secondary School Certificate (SSC)</h3>
                  <p className="opacity-80">Ramgoti B.B.K Pilot Model High School</p>
                  <p className="opacity-80">GPA: 4.39 | Year: 2019</p>
                </div>
              </div>
            </div>
      
            <div className="flex flex-wrap gap-3 mt-8">
              <a className="btn btn-outline btn-sm rounded-xl" href="mailto:marufhasanchowdhury06@gmail.com" target="_blank">📧
                Email</a>
              <a className="btn btn-outline btn-sm rounded-xl" href="https://www.facebook.com/maruphasan.chowdhury.9"
                target="_blank">📘 Facebook</a>
              <a className="btn btn-outline btn-sm rounded-xl" href="https://wa.me/01704712465" target="_blank">📱 WhatsApp</a>
              <a className="btn btn-outline btn-sm rounded-xl" href="https://github.com/maruf-hasan7081" target="_blank">💻
                GitHub</a>
              <a className="btn btn-outline btn-sm rounded-xl" href="https://www.linkedin.com/in/maruf-hasan-chowdhury/"
                target="_blank">🔗 LinkedIn</a>
              <a className="btn btn-outline btn-sm rounded-xl" href="https://www.instagram.com/maruf__8048" target="_blank">📸
                Instagram</a>
            </div>

            <ResumeViewer />
          </div>
        </section>
      
        
        <section id="skills" className="max-w-6xl mx-auto px-4 py-8">
          <div className="glass rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">My Skills</h2>
      
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="card bg-base-100/20 border border-white/10 shadow">
                <div className="card-body">
                  <h3 className="font-bold">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge badge-primary">C++</span>
                    <span className="badge badge-primary">Java</span>
                    <span className="badge badge-primary">C#</span>
                    <span className="badge badge-primary">Python</span>
                    <span className="badge badge-primary">HTML</span>
                    <span className="badge badge-primary">CSS</span>
                    <span className="badge badge-primary">Tailwind</span>
                    <span className="badge badge-primary">JavaScript</span>
                    <span className="badge badge-primary">PHP</span>
                  </div>
                </div>
              </div>
      
              <div className="card bg-base-100/20 border border-white/10 shadow">
                <div className="card-body">
                  <h3 className="font-bold">Database</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge">SQL</span>
                    <span className="badge">Microsoft SQL Server</span>
                    <span className="badge">MySQL</span>
                  </div>
                </div>
              </div>
      
              <div className="card bg-base-100/20 border border-white/10 shadow">
                <div className="card-body">
                  <h3 className="font-bold">Tools & IDEs</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge">VS Code</span>
                    <span className="badge">Visual Studio</span>
                    <span className="badge">CodeBlocks</span>
                    <span className="badge">Google Colab</span>
                    <span className="badge">GitHub</span>
                  </div>
                </div>
              </div>
      
              <div className="card bg-base-100/20 border border-white/10 shadow">
                <div className="card-body">
                  <h3 className="font-bold">Data Structure</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge">Linked List</span>
                    <span className="badge">Stack</span>
                    <span className="badge">Queue</span>
                    <span className="badge">Recursion</span>
                    <span className="badge">Graph</span>
                    <span className="badge">Dynamic Programming</span>
                  </div>
                </div>
              </div>
      
              <div className="card bg-base-100/20 border border-white/10 shadow">
                <div className="card-body">
                  <h3 className="font-bold">Operating Systems</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge">Windows</span>
                    <span className="badge">Linux</span>
                  </div>
                </div>
              </div>
      
              <div className="card bg-base-100/20 border border-white/10 shadow">
                <div className="card-body">
                  <h3 className="font-bold">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge">Teamwork</span>
                    <span className="badge">Problem-Solving</span>
                    <span className="badge">Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        
        <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
          <div className="glass rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">My Projects</h2>
      
            
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                className="btn btn-sm rounded-full px-5 glass border border-white/15 hover:border-primary/60 hover:shadow-lg filter-btn"
                data-filter="web">Web</button>
      
              <button
                className="btn btn-sm rounded-full px-5 glass border border-white/15 hover:border-primary/60 hover:shadow-lg btn-ghost filter-btn"
                data-filter="csharp">C#</button>
      
              <button
                className="btn btn-sm rounded-full px-5 glass border border-white/15 hover:border-primary/60 hover:shadow-lg btn-ghost filter-btn"
                data-filter="sql">SQL</button>
      
              <button
                className="btn btn-sm rounded-full px-5 glass border border-white/15 hover:border-primary/60 hover:shadow-lg btn-ghost filter-btn"
                data-filter="software-engineering">Software Engineering</button>
      
              <button
                className="btn btn-sm rounded-full px-5 glass border border-white/15 hover:border-primary/60 hover:shadow-lg btn-ghost filter-btn"
                data-filter="nlp">NLP</button>
      
              <button
                className="btn btn-sm rounded-full px-5 glass border border-white/15 hover:border-primary/60 hover:shadow-lg btn-ghost filter-btn"
                data-filter="data">Data Science</button>
      
              <button
                className="btn btn-sm rounded-full px-5 glass border border-white/15 hover:border-primary/60 hover:shadow-lg btn-ghost filter-btn"
                data-filter="all">All</button>
            </div>
      
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
              
              <div
                className="card bg-base-100/15 border border-white/10 shadow hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.02] duration-300 project web">
                <figure className="h-44 overflow-hidden">
                  <img src="/media/pio.png" className="w-full h-full object-cover" alt="Project image" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Payoo – Digital Wallet Web App</h3>
                  <p className="opacity-80">HTML, Tailwind CSS, DaisyUI, JavaScript DOM features.</p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-primary btn-sm rounded-xl" href="https://maruf-hasan7081.github.io/payoo-website/"
                      target="_blank">Live</a>
                    <a className="btn btn-outline btn-sm rounded-xl" href="https://github.com/maruf-hasan7081/payoo-website"
                      target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
      
              <div
                className="card bg-base-100/15 border border-white/10 shadow hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.02] duration-300 project web">
                <figure className="h-44 overflow-hidden">
                  <img src="/media/job.png" className="w-full h-full object-cover" alt="Project image" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Job-Tracker Web App</h3>
                  <p className="opacity-80">HTML, Tailwind CSS, DaisyUI, JavaScript DOM features.</p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-primary btn-sm rounded-xl" href="https://maruf-hasan7081.github.io/B13_A4/"
                      target="_blank">Live</a>
                    <a className="btn btn-outline btn-sm rounded-xl" href="https://github.com/maruf-hasan7081/B13_A4"
                      target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
      
              <div
                className="card bg-base-100/15 border border-white/10 shadow hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.02] duration-300 project web">
                <figure className="h-44 overflow-hidden">
                  <img src="/media/Techwave.png" className="w-full h-full object-cover" alt="Project image" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">TechWave Web App</h3>
                  <p className="opacity-80">HTML, CSS.</p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-primary btn-sm rounded-xl" href="https://maruf-hasan7081.github.io/B13_A2/"
                      target="_blank">Live</a>
                    <a className="btn btn-outline btn-sm rounded-xl" href="https://github.com/maruf-hasan7081/B13_A2"
                      target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
      
              <div
                className="card bg-base-100/15 border border-white/10 shadow hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.02] duration-300 project web">
                <figure className="h-44 overflow-hidden">
                  <img src="/media/KV.png" className="w-full h-full object-cover" alt="Project image" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">KV Web App</h3>
                  <p className="opacity-80">HTML, CSS.</p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-primary btn-sm rounded-xl" href="https://maruf-hasan7081.github.io/Assingment1/"
                      target="_blank">Live</a>
                    <a className="btn btn-outline btn-sm rounded-xl" href="https://github.com/maruf-hasan7081/Assingment1"
                      target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
      
              
              <div
                className="card bg-base-100/15 border border-white/10 shadow hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.02] duration-300 project csharp">
                <figure className="h-44 overflow-hidden">
                  <img src="/media/PARMACY.jpg" className="w-full h-full object-cover" alt="Project image" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">PHARMACY MANAGEMENT SYSTEM</h3>
                  <p className="opacity-80">C#, SQL SERVER</p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-outline btn-sm rounded-xl" href="https://github.com/maruf-hasan7081/CSharp_Project"
                      target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
      
              
              <div
                className="card bg-base-100/15 border border-white/10 shadow hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.02] duration-300 project sql">
                <figure className="h-44 overflow-hidden">
                  <img src="/media/PARMACY.jpg" className="w-full h-full object-cover" alt="Project image" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">RESTAURANT MANAGEMENT SYSTEM</h3>
                  <p className="opacity-80">ORACLE DATABASE ONLY</p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-outline btn-sm rounded-xl" href="https://github.com/maruf-hasan7081/oracal-database"
                      target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
      
              
              <div
                className="card bg-base-100/15 border border-white/10 shadow hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.02] duration-300 project nlp">
                <figure className="h-44 overflow-hidden">
                  <img src="/media/fake.jpg" className="w-full h-full object-cover" alt="Project image" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">NLP PROJECT</h3>
                  <h3 className="card-title">FAKE NEWS DETECTION</h3>
                  <p className="opacity-80">
                    Data Loading → Cleaning → Preprocessing → TF-IDF → Train/Test → Naïve Bayes → Evaluation
                  </p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-outline btn-sm rounded-xl"
                      href="https://github.com/maruf-hasan7081/-Natural-language-processing--NLP-/blob/main/nlp_mid_project_group_08.pdf"
                      target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
      
              <div
                className="card bg-base-100/15 border border-white/10 shadow hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.02] duration-300 project nlp">
                <figure className="h-44 overflow-hidden">
                  <img src="/media/ai-content-detectors.png" className="w-full h-full object-cover" alt="Project image" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">NLP PROJECT</h3>
                  <h3 className="card-title">AI Content Detection (BERT & DistilBERT)</h3>
                  <p className="opacity-80">
                    Model-1: Load → Clean → Split → Tokenize (BERT) → Train → Evaluate
                    <br />
                    Model-2: Load → Clean → Split → Tokenize (DistilBERT) → Train → Evaluate
                  </p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-outline btn-sm rounded-xl"
                      href="https://github.com/maruf-hasan7081/-Natural-language-processing--NLP-/blob/main/final/nlp_final_project_group_08.pdf"
                      target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
      
              
              <div
                className="card bg-base-100/15 border border-white/10 shadow hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.02] duration-300 project software-engineering">
                <figure className="h-44 overflow-hidden">
                  <img src="/media/appod.png" className="w-full h-full object-cover" alt="Project image" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Software Engineering Documentation</h3>
                  <p className="opacity-80">Affordable Car and Motor Bike Subscription</p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-outline btn-sm rounded-xl" href="https://github.com/maruf-hasan7081/software-project"
                      target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
      
            </div>
          </div>
        </section>
        
         
         
      
      
      
        <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
      
        <div className="glass rounded-3xl p-8 md:p-12 shadow-xl">
      
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Work Experience
          </h2>
      
          <div className="relative border-l-2 border-primary pl-8">
      
            
            <div className="mb-10">
      
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full"></span>
      
              <div className="card bg-base-100/10 border border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      
                <div className="card-body">
      
                  <div className="flex flex-wrap items-center justify-between gap-3">
      
                    <h3 className="text-xl font-bold text-primary">
                      Java Development Intern
                    </h3>
      
                    <span className="badge badge-primary badge-outline">
                      Internship
                    </span>
      
                  </div>
      
                  <p className="font-semibold">
                    Codveda Technologies (Remote)
                  </p>
      
                  <p className="text-sm opacity-70">
                    📅 3 Dec 2025 – 3 Jan 2026
                  </p>
      
                  <ul className="mt-4 space-y-2 opacity-90">
      
                    <li>⚙️ Worked with Java OOP concepts and file handling.</li>
      
                    <li>🏦 Developed CRUD-based banking application logic.</li>
      
                    <li>🗄️ Implemented JDBC database operations.</li>
      
                    <li>🌳 Built Binary Search Tree (BST) data structure implementation.</li>
      
                    <li>💬 Developed a multithreaded chat application.</li>
      
                  </ul>
      
                  <div className="mt-5">
      
                    <a href="https://github.com/maruf-hasan7081/Java_Development_Intern_work/blob/main/Md.Maruf%20Hasan%20Chowdhury(Offer%20letter).pdf" className="btn btn-primary btn-sm rounded-xl">View Offer Letter</a>
                    <a href="https://github.com/maruf-hasan7081/Java_Development_Intern_work" className="btn btn-primary btn-sm rounded-xl">Work</a>
      
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
          </div>
      
        </div>
      
      </section>
      
      <section id="courses" className="max-w-6xl mx-auto px-4 py-16">
      
        <div className="glass rounded-3xl p-8 md:p-12 shadow-xl">
      
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            Courses & Training
          </h2>
      
          <div className="card bg-base-100/10 border border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      
            <div className="card-body">
      
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-primary">
                  Complete Web Development Course
                </h3>
      
                <span className="badge badge-primary badge-outline">
                  Ongoing
                </span>
              </div>
      
              <p className="font-semibold">
                Programming Hero (Online Bootcamp)
              </p>
      
              <p className="text-sm opacity-70">
                📅 Duration: 6 Months | Started: December 31, 2025
              </p>
      
              <div className="mt-4">
                <p className="font-semibold mb-2">Technologies Covered:</p>
      
                <div className="flex flex-wrap gap-2">
      
                  <span className="badge badge-outline">HTML</span>
                  <span className="badge badge-outline">CSS</span>
                  <span className="badge badge-outline">Tailwind CSS</span>
                  <span className="badge badge-outline">JavaScript</span>
                  <span className="badge badge-outline">React</span>
                  <span className="badge badge-outline">Node.js</span>
                  <span className="badge badge-outline">Express.js</span>
                  <span className="badge badge-outline">MongoDB</span>
                  <span className="badge badge-outline">Next.js</span>
                  <span className="badge badge-outline">Firebase</span>
                  <span className="badge badge-outline">Git</span>
                  <span className="badge badge-outline">GitHub</span>
      
                </div>
              </div>
      
            </div>
      
          </div>
      
        </div>
      
      </section>
      
        
        <section id="achievements" className="max-w-6xl mx-auto px-4 py-16">
      
          <div className="glass rounded-3xl p-8 md:p-12 shadow-xl">
      
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
              Achievements & Certifications
            </h2>
      
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
              
              <div
                className="card bg-base-100/10 border border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      
                <div className="card-body items-center text-center">
      
                  <div className="text-4xl">🏆</div>
      
                  <h3 className="font-bold text-lg">
                    Science Poster Contest
                  </h3>
      
                  <p className="opacity-80 text-sm">
                    Excellent performance in the Science Poster Contest (Fall 2022-2023) as a Freshman at AIUB.
                  </p>
      
                  <div className="card-actions mt-3">
                    <a href="https://surl.li/bdrlxm" target="_blank" className="btn btn-outline btn-sm rounded-xl">
                      View Certificate
                    </a>
                  </div>
      
                </div>
      
              </div>
      
      
              
              <div
                className="card bg-base-100/10 border border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      
                <div className="card-body items-center text-center">
      
                  <div className="text-4xl">🥇</div>
      
                  <h3 className="font-bold text-lg">
                    Java Workshop for Absolute Beginners
                  </h3>
      
                  <p className="opacity-80 text-sm">
                   	I got this Certificate for Completing the "Java Workshop for Absolute Beginners" organized by Ostad
                  </p>
      
                  <div className="card-actions mt-3">
                    <a href="https://drive.google.com/file/d/1E5DpH6bFHTrlXBx38wCkxL6qOFtbDHWz/view" target="_blank" className="btn btn-outline btn-sm rounded-xl">
                      View Certificate
                    </a>
                  </div>
      
                </div>
      
              </div>
               <div
                className="card bg-base-100/10 border border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      
                <div className="card-body items-center text-center">
      
                  <div className="text-4xl">🥇</div>
      
                  <h3 className="font-bold text-lg">
                    Science Poster Contest
                  </h3>
      
                  <p className="opacity-80 text-sm">
                    Excellent performance in the Science Poster Contest (Spring 2022-2023) at AIUB.
                  </p>
      
                  <div className="card-actions mt-3">
                    <a href="https://surl.li/hhipqw" target="_blank" className="btn btn-outline btn-sm rounded-xl">
                      View Certificate
                    </a>
                  </div>
      
                </div>
      
              </div>
      
      
              
              <div
                className="card bg-base-100/10 border border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      
                <div className="card-body items-center text-center">
      
                  <div className="text-4xl">💻</div>
      
                  <h3 className="font-bold text-lg">
                    Cisco Networking Academy
                  </h3>
      
                  <p className="opacity-80 text-sm">
                    Successfully completed the IT Essentials course under Cisco Networking Academy® program.
                  </p>
      
                  <div className="card-actions mt-3">
                    <a href="https://surl.li/yuxcyj" target="_blank" className="btn btn-outline btn-sm rounded-xl">
                      View Certificate
                    </a>
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
          </div>
      
        </section>
      
        
        <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      
          <div className="glass rounded-3xl p-8 md:p-12 shadow-xl">
      
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
              Contact Me
            </h2>
      
            <div className="grid md:grid-cols-2 gap-10">
      
              
      
              <div className="space-y-6">
      
                <h3 className="text-xl font-bold">Let's Work Together</h3>
      
                <p className="opacity-80">
                  If you have any project idea, internship opportunity,
                  or collaboration proposal feel free to contact me.
                </p>
      
                <div className="space-y-3">
      
                  <p className="flex items-center gap-3">
                    📧
                    <span>marufhasanchowdhury06@gmail.com</span>
                  </p>
      
                  <p className="flex items-center gap-3">
                    📱
                    <span>+880 1704 712465</span>
                  </p>
      
                  <p className="flex items-center gap-3">
                    📍
                    <span>Dhaka, Bangladesh</span>
                  </p>
      
                </div>
      
                <div className="flex gap-4 pt-4">
      
                  <a href="https://github.com/maruf-hasan7081" className="btn btn-outline btn-sm rounded-xl">
                    GitHub
                  </a>
      
                  <a href="https://www.linkedin.com/in/maruf-hasan-chowdhury/" className="btn btn-outline btn-sm rounded-xl">
                    LinkedIn
                  </a>
      
                </div>
      
              </div>
      
      
              
      
              <form id="contactForm" className="space-y-4">
      
                <input type="text" placeholder="Your Name" required
                  className="input input-bordered rounded-xl w-full bg-base-100/10" />
      
                <input type="email" placeholder="Your Email" required
                  className="input input-bordered rounded-xl w-full bg-base-100/10" />
      
                <textarea rows="4" placeholder="Your Message" required
                  className="textarea textarea-bordered rounded-xl w-full bg-base-100/10"></textarea>
      
                <button type="submit" className="btn btn-primary w-full rounded-xl text-lg">
                  Send Message
                </button>
      
              </form>
      
            </div>
      
          </div>
      
        </section>
      
        
        <footer className="max-w-6xl mx-auto px-4 pb-10">
      
        <div className="glass rounded-2xl p-8 shadow-xl">
      
          <div className="footer sm:footer-horizontal text-base-content">
      
            
            <aside>
              <h2 className="text-xl font-bold text-primary">
                Maruf Hasan Chowdhury
              </h2>
      
              <p className="opacity-80 mt-2 max-w-xs">
                CSE Student & Web Developer passionate about building
                modern web applications and AI-based solutions.
              </p>
            </aside>
      
      
            
            <nav>
              <h6 className="footer-title">Quick Links</h6>
              <a className="link link-hover" href="#home">Home</a>
        <a className="link link-hover" href="#education">Education</a>
              <a className="link link-hover" href="#experience">Experience</a>
              <a className="link link-hover" href="#courses">Courses</a>
              <a className="link link-hover" href="#projects">Projects</a>
              <a className="link link-hover" href="#contact">Contact</a>
            </nav>
      
      
            
            <nav>
              <h6 className="footer-title">Social</h6>
      
              <div className="grid grid-flow-col gap-4">
      
                
                <a href="https://github.com/maruf-hasan7081"
                   target="_blank"
                   className="hover:text-primary transition"
                   aria-label="GitHub">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.13 3.44 9.48 8.2 11 .6.12.82-.27.82-.6v-2.1c-3.34.74-4.04-1.65-4.04-1.65-.55-1.43-1.34-1.8-1.34-1.8-1.1-.77.08-.76.08-.76 1.2.09 1.83 1.27 1.83 1.27 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.46-1.37-5.46-6.1 0-1.35.46-2.45 1.23-3.32-.12-.31-.53-1.57.12-3.27 0 0 1-.33 3.3 1.27.96-.27 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.3-1.6 3.3-1.27 3.3-1.27.65 1.7.24 2.96.12 3.27.77.87 1.23 1.97 1.23 3.32 0 4.74-2.8 5.78-5.47 6.09.43.39.81 1.16.81 2.33v3.45c0 .33.22.72.82.6 4.76-1.52 8.2-5.87 8.2-11C23.25 5.6 18.27.5 12 .5z"/>
                  </svg>
                </a>
      
                
                <a href="https://www.linkedin.com/in/maruf-hasan-chowdhury/"
                   target="_blank"
                   className="hover:text-primary transition"
                   aria-label="LinkedIn">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z"/>
                  </svg>
                </a>
      
                
                <a href="mailto:marufhasanchowdhury06@gmail.com"
                   className="hover:text-primary transition"
                   aria-label="Email">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
      
              </div>
            </nav>
      
          </div>
      
      
          
          <div className="text-center border-t border-white/10 mt-6 pt-4 opacity-70">
            © 2026 Maruf Hasan Chowdhury | All Rights Reserved
          </div>
      
        </div>
      
      </footer>
    </>
  );
}
