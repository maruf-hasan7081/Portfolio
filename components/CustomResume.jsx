const PDF = "/media/MARUF_HASAN_CHOWDHURY-CV.pdf";
const PHOTO = "/media/maruf.jpeg";

export default function CustomResume() {
  return (
    <div className="rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-base-100/10 backdrop-blur-sm">
        <p className="text-xs opacity-70">Styled preview · full text from your CV</p>
        <div className="flex flex-wrap gap-2">
          <a href={PDF} download className="btn btn-primary btn-sm rounded-xl">
            Download PDF
          </a>
          <a
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm rounded-xl"
          >
            Open PDF
          </a>
        </div>
      </div>

      <div className="resume-paper custom-resume-scroll max-h-[min(85vh,820px)] overflow-y-auto">
        <div className="resume-paper-inner mx-auto max-w-3xl px-6 py-8 md:px-10 md:py-10 space-y-8">
          <header className="grid grid-cols-1 md:grid-cols-[1fr_7.5rem] gap-6 items-start border-b border-slate-200 pb-8">
            <div className="md:col-span-2 text-center mb-2">
              <p className="resume-muted text-xs font-semibold tracking-[0.35em] uppercase">
                Curriculum Vitae
              </p>
            </div>
            <div className="space-y-4 md:col-span-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                MD. MARUF HASAN CHOWDHURY
              </h3>
              <div className="grid gap-2 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-800">Address :</span> kuratoli, Kuril
                  bisshoroad, Dhaka
                </p>
                <p>
                  <span className="font-semibold text-slate-800">Phone:</span> 01704712465 or
                  01829418224
                </p>
                <p>
                  <span className="font-semibold text-slate-800">Email :</span>{" "}
                  <a
                    href="mailto:marufhasanchowdhury06@gmail.com"
                    className="text-primary font-medium link link-hover"
                  >
                    marufhasanchowdhury06@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="justify-self-center md:justify-self-end">
              <img
                src={PHOTO}
                alt="Maruf Hasan Chowdhury"
                className="w-28 h-32 object-cover rounded-lg border-2 border-slate-200 shadow-md"
              />
            </div>
          </header>

          <ResumeBlock title="Career objective">
            <div className="rounded-lg bg-slate-100/90 border border-slate-200 px-4 py-4">
              <p className="text-sm md:text-[15px] leading-relaxed text-slate-700">
                Motivated Computer Science student aiming to become a skilled Software Engineer.
                Looking for opportunities to work in a dynamic environment where I can apply my
                coding skills and gain international exposure in the tech industry.
              </p>
            </div>
          </ResumeBlock>

          <ResumeBlock title="Education">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Edu
                title="Bachelor of Science in Computer Science & Engineering"
                place="American International University of Bangladesh -(AIUB), Dhaka"
                lines={["CGPA: 3.58 out of 4", "10th Semester"]}
              />
              <Edu
                title="Higher secondary Certificate (HSC)"
                place="Scholastica model college, Narsingdi"
                lines={["GPA: 4.58 out of 5", "Year of completion: 2021"]}
              />
              <Edu
                title="Secondary School Certificate (SSC)"
                place="Ramgoti B, B, K Pilot Model High School"
                lines={["GPA: 4.39 out of 5", "Year of completion: 2019"]}
              />
            </div>
          </ResumeBlock>

          <ResumeBlock title="Skills">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate-700">
              <SkillLine
                label="Programming Languages:"
                text="C++, Java, C#, python, Html, CSS, JavaScript, php"
              />
              <SkillLine label="Database:" text="SQL, Microsoft SQL Server" />
              <SkillLine
                label="Data Structures & Algorithms:"
                text="Linked List, Stack, Queue, Recursion, Graph, Dynamic Programming, Sorting & Searching Algorithms"
              />
              <SkillLine
                label="Tools & IDEs:"
                text="CodeBlocks, Microsoft Visual Studio, visual studio code, Notepad++, AutoCAD, Google colab, Cisco packet tracer"
              />
              <SkillLine label="Operating Systems:" text="Windows, Linux" />
              <SkillLine label="Soft Skills:" text="Teamwork, Problem-Solving, Communication" />
              <SkillLine label="Server:" text="XAMPP" />
            </div>
          </ResumeBlock>

          <ResumeBlock title="Projects">
            <ul className="space-y-5">
              <Project
                title="Project Title - Payoo – Digital Wallet Web Application"
                links={[
                  { label: "GitHub link", href: "https://github.com/maruf-hasan7081/payoo-website" },
                  { label: "Live Link", href: "https://maruf-hasan7081.github.io/payoo-website/" },
                ]}
                bullets={[
                  "I have created a Digital Wallet Web App called Payoo using HTML, Tailwind CSS, DaisyUI and JavaScript.",
                  "I have implemented Login, Add Money, Cashout and Transfer Money features using JavaScript DOM.",
                ]}
              />
              <Project
                title="Project Title: Pharmacy Management System"
                links={[
                  { label: "GitHub Link", href: "https://github.com/maruf-hasan7081/CSharp_Project" },
                ]}
                bullets={[
                  "Programming language - C# and Microsoft SQL Server",
                  "3type user - Admin, cashier, customer and after registration account cashier customer then waiting for admin approval. Admin can add users, add categories, add product, all transactions",
                ]}
              />
              <Project
                title="Project Title: Restaurant Management System"
                links={[
                  { label: "GitHub Link", href: "https://github.com/maruf-hasan7081/oracal-database" },
                ]}
                bullets={["Only Oracle SQL database base project"]}
              />
              <Project
                title="Project Title: Affordable Car and Motor Bike Subscription"
                links={[
                  { label: "GitHub Link", href: "https://github.com/maruf-hasan7081/software-project" },
                ]}
                bullets={[
                  "Led the team using Agile (Scrum) to ensure smooth and timely project delivery.",
                  "Developed a complete software documentation project following real-world SDLC practices.",
                  "Managed team coordination, blocker resolution, and feature validation (e.g., GPS tracking, driver verification).",
                ]}
              />
              <Project
                title="Project Title: University management system"
                links={[{ label: "GitHub Link", href: "https://github.com/maruf-hasan7081" }]}
                bullets={[
                  "Built a multi-user web application (Student, Teacher, Admin) for managing academic activities and user information – my part focused on the Student User module.",
                  "Used HTML, CSS, PHP, JavaScript, and MySQL for full-stack web development.",
                  "Implemented course registration, grade view, view course, borrow library book, submit assignment etc. and PHP validation with database connectivity.",
                ]}
              />
              <Project
                title="Project Title: Bombings on Israel"
                links={[{ label: "GitHub Link", href: "https://github.com/maruf-hasan7081" }]}
                bullets={[
                  "It is implemented by C++ (GLUT) programming language. It is a computer graphics project. Details: Plane take-off, Plane in the air, Dropping bomb, Explosion, Plane landing.",
                ]}
              />
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Extracurriculam activities and Achievement & Certificate">
            <ul className="space-y-3 text-sm text-slate-700 list-none">
              <CertItem
                text='I Got this certificate For Excellent Performance in the "SCIENCE POSTER CONTEST -FALL 2022-2023 AS A FRESHMAN "'
                href="https://surl.li/bdrlxm"
              />
              <CertItem
                text='I Got this Certificate For Excellent Performance in the "SCIENCE POSTER CONTEST - SPRING 2022-23"'
                href="https://surl.li/hhipqw"
              />
              <CertItem
                text="I Got this Certificate for Completing the IT Essentials course as part of the Cisco Networking Academy® program"
                href="https://surl.li/yuxcyj"
              />
              <CertItem
                text='I got this Certificate for Completing the "Java Workshop for Absolute Beginners" organized by Ostad'
                href="https://drive.google.com/file/d/1E5DpH6bFHTrlXBx38wCkxL6qOFtbDHWz/view"
              />
            </ul>
          </ResumeBlock>

          <ResumeBlock title="REFERENCES">
            <div className="grid sm:grid-cols-2 gap-4">
              <Ref
                name="1. DR MUHAMMAD HASIBUR RAS HID CHAYON"
                role="ASSOCIATE PROFESSOR, Computer Science & Engineering"
                org="American International University - Bangladesh"
                email="chayon@aiub.edu"
              />
              <Ref
                name="2. MD. OSMAN GONI"
                role="Senior Software Engineer"
                org="Millennium Information Solution Ltd."
                email="mdosmangoni118@gmail.com"
                phone="01840-033118"
              />
            </div>
          </ResumeBlock>
        </div>
      </div>
    </div>
  );
}

function ResumeBlock({ title, children }) {
  return (
    <section>
      <h4 className="resume-section-title">{title}</h4>
      <div className="resume-section-body">{children}</div>
    </section>
  );
}

function Edu({ title, place, lines }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm h-full">
      <h5 className="font-bold text-sm text-slate-900 leading-snug">{title}</h5>
      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{place}</p>
      {lines.map((line) => (
        <p key={line} className="text-xs text-slate-700 mt-1.5 font-medium">
          {line}
        </p>
      ))}
    </article>
  );
}

function SkillLine({ label, text }) {
  return (
    <p className="leading-relaxed">
      <span className="font-semibold text-slate-800">{label}</span> {text}
    </p>
  );
}

function Project({ title, links, bullets }) {
  return (
    <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm list-none">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h5 className="font-bold text-sm text-slate-900">{title}</h5>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary font-medium link link-hover"
          >
            ({l.label})
          </a>
        ))}
      </div>
      <ul className="mt-3 space-y-1.5 list-disc pl-5 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b.slice(0, 40)}>{b}</li>
        ))}
      </ul>
    </li>
  );
}

function CertItem({ text, href }) {
  return (
    <li className="flex flex-wrap gap-2 items-start">
      <span className="text-slate-400 mt-1.5">•</span>
      <span>
        {text} –{" "}
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary link link-hover">
          (Certificate)
        </a>
      </span>
    </li>
  );
}

function Ref({ name, role, org, email, phone }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
      <p className="font-bold text-slate-900 text-xs leading-snug">{name}</p>
      <p className="mt-2 font-medium">{role}</p>
      <p className="text-slate-600">{org}</p>
      <p className="mt-2">
        E-mail:{" "}
        <a href={`mailto:${email}`} className="text-primary link link-hover">
          {email}
        </a>
      </p>
      {phone && <p>Contact Number: {phone}</p>}
    </article>
  );
}