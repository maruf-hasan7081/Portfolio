"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import FamilyInfoHomeSection from "./FamilyInfoHomeSection";
import ResearchSection from "./ResearchSection";
import ResumeViewer from "./ResumeViewer";
import SiteNavbar from "./SiteNavbar";
import { stringList } from "@/lib/formatList";
import { HOME_NAV_LINKS, PERSONAL_INFO_PATH } from "@/lib/navLinks";

const PROJECT_FILTERS = [
  { key: "all", label: "All projects" },
  { key: "web", label: "Web" },
  { key: "csharp", label: "C#" },
  { key: "sql", label: "SQL" },
  { key: "software-engineering", label: "Software Engineering" },
  { key: "nlp", label: "NLP" },
  { key: "data", label: "Data Science" },
];

function SocialLinks({ links, placement }) {
  return links.filter((link) => link.placement === placement).map((link) => (
    <a key={link.id} className="btn btn-outline social-link" href={link.url} target="_blank" rel="noreferrer">
      {link.label}
    </a>
  ));
}

function Arrow({ external = false }) {
  return (
    <svg className="action-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={external ? "M6 18 18 6M8 6h10v10" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export default function PortfolioFromData({ portfolio }) {
  const [projectFilter, setProjectFilter] = useState("all");
  if (!portfolio?.profile) return null;

  const {
    profile, social_links = [], education = [], skill_groups = [], projects = [],
    experiences = [], courses = [], achievements = [], research_publications = [],
    family_information: familyInformation = null,
  } = portfolio;
  const visibleProjects = projects.filter((project) => (
    projectFilter === "all" || project.category?.split(/\s+/).includes(projectFilter)
  ));
  const name = (profile.full_name || profile.site_name || "").trim();
  const nameBreak = name.lastIndexOf(" ");

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteNavbar profile={profile} />
      <main id="main-content" className="page-shell" tabIndex={-1}>
        <section id="home" className="portfolio-hero" data-reveal aria-labelledby="hero-title">
          <div className="hero-copy">
            {profile.welcome_title && <p className="hero-welcome"><span aria-hidden />{profile.welcome_title}</p>}
            <h1 id="hero-title">
              {nameBreak > 0 ? <>{name.slice(0, nameBreak)} <span className="hero-name-accent">{name.slice(nameBreak + 1)}</span></> : name}
            </h1>
            {profile.nickname && <p className="hero-nickname">Also known as {profile.nickname}</p>}
            {profile.current_study && <p className="hero-study">{profile.current_study}</p>}
            {profile.research_interests && <p className="hero-description"><strong>Research interests</strong> {profile.research_interests}</p>}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Explore My Projects <Arrow /></a>
              <a href="#contact" className="btn btn-outline contact-button">Contact <Arrow external /></a>
            </div>
            <div className="hero-social">
              <SocialLinks links={social_links} placement="home" />
            </div>
          </div>

          {profile.photo_url && (
            <div className="portrait-stage">
              <div className="portrait-grid" aria-hidden="true" />
              <div className="portrait-orbit" aria-hidden="true" />
              <figure className="portrait-frame">
                <img src={profile.photo_url} alt={name} fetchPriority="high" />
                {profile.location && (
                  <figcaption>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2" /></svg>
                    {profile.location}
                  </figcaption>
                )}
              </figure>
            </div>
          )}
        </section>

        <section id="projects" className="portfolio-section" data-reveal>
          <div className="section-heading">
            <div className="project-heading">
              <h2>My Projects</h2>
              <p className="project-count" role="status">
                {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
              </p>
            </div>
            <div className="project-filters" role="group" aria-label="Filter projects">
              {PROJECT_FILTERS.map(({ key, label }) => (
                <button key={key} type="button" className="btn filter-button" aria-pressed={projectFilter === key} onClick={() => setProjectFilter(key)}>
                  {label}
                </button>
              ))}
            </div>
            <label className="mobile-project-filter">
              <span>Category</span>
              <select className="select" value={projectFilter} onChange={(event) => setProjectFilter(event.target.value)}>
                {PROJECT_FILTERS.map(({ key, label }) => <option key={key} value={key}>{label}</option>)}
              </select>
            </label>
          </div>
          <div className="project-grid reveal-stagger" key={projectFilter}>
            {visibleProjects.map((project) => (
              <article className="card project-card" data-tilt="11" key={project.id}>
                {project.image_url && <figure><img src={project.image_url} alt="" loading="lazy" decoding="async" /></figure>}
                <div className="card-body">
                  <span className="badge project-category">
                    {PROJECT_FILTERS.find((filter) => filter.key === project.category)?.label || project.category}
                  </span>
                  <h3>{project.title}</h3>
                  {project.subtitle && <p className="card-subtitle">{project.subtitle}</p>}
                  <p className="whitespace-pre-line">{project.description}</p>
                  <div className="card-actions">
                    {project.live_url && <a className="btn btn-primary btn-sm" href={project.live_url} target="_blank" rel="noreferrer">Live site <Arrow external /></a>}
                    {project.github_url && <a className="btn btn-outline btn-sm" href={project.github_url} target="_blank" rel="noreferrer">GitHub <Arrow external /></a>}
                  </div>
                </div>
              </article>
            ))}
            {visibleProjects.length === 0 && <p className="empty-projects">No projects in this category yet.</p>}
          </div>
        </section>

        <section id="education" className="portfolio-section" data-reveal>
          <div className="section-heading"><h2>Education</h2></div>
          <div className="detail-grid reveal-stagger">
            {education.map((item) => (
              <article className="card detail-card" data-tilt="8" key={item.id}>
                <div className="card-body">
                  <h3>{item.degree}</h3>
                  <p className="card-subtitle">{item.institution}</p>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-actions"><SocialLinks links={social_links} placement="education" /></div>

          {(profile.show_resume_section !== false && profile.cv_pdf_url) || (profile.show_video_cv !== false && profile.video_cv_url) ? (
            <div className="cv-grid">
              {profile.show_resume_section !== false && profile.cv_pdf_url && (
                <ResumeViewer pdfUrl={profile.cv_pdf_url} title={profile.resume_section_title || "My Resume"} cacheVersion={profile.updated_at} />
              )}
              {profile.show_video_cv !== false && profile.video_cv_url && (
                <div id="video-cv" className="cv-panel">
                  <h3>{profile.video_cv_title || "Video CV"}</h3>
                  {profile.video_cv_subtitle && <p>{profile.video_cv_subtitle}</p>}
                  <video key={`${profile.video_cv_url}-${profile.updated_at || ""}`} controls playsInline preload="none">
                    <source src={profile.video_cv_url} type="video/mp4" />
                    <a href={profile.video_cv_url}>Open video CV</a>
                  </video>
                </div>
              )}
            </div>
          ) : null}
        </section>

        <section id="experience" className="portfolio-section" data-reveal>
          <div className="section-heading"><h2>Work Experience</h2></div>
          <div className="experience-list reveal-stagger">
            {experiences.map((experience) => (
              <article className="card detail-card" key={experience.id}>
                <div className="card-body">
                  <div className="card-heading"><h3>{experience.title}</h3>{experience.badge && <span className="badge">{experience.badge}</span>}</div>
                  <p className="card-subtitle">{experience.company}</p>
                  {experience.date_range && <p className="card-date">{experience.date_range}</p>}
                  <ul className="experience-highlights">
                    {stringList(experience.highlights).map((line) => <li key={line}>{line}</li>)}
                  </ul>
                  {!!experience.links?.length && (
                    <div className="card-actions">
                      {experience.links.map((link) => (
                        <a key={link.url} className="btn btn-outline btn-sm" href={link.url} target="_blank" rel="noreferrer">{link.label} <Arrow external /></a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="portfolio-section" data-reveal>
          <div className="section-heading"><h2>My Skills</h2></div>
          {stringList(profile.development_skills).length > 0 && (
            <ul className="skill-summary">{stringList(profile.development_skills).map((skill) => <li key={skill}>{skill}</li>)}</ul>
          )}
          <div className="detail-grid reveal-stagger">
            {skill_groups.map((group) => (
              <article className="card detail-card" data-tilt="8" key={group.id}>
                <div className="card-body">
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => <span className={item.is_primary ? "badge badge-primary" : "badge"} key={item.id}>{item.label}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="courses" className="portfolio-section" data-reveal>
          <div className="section-heading"><h2>Courses &amp; Training</h2></div>
          <div className="detail-grid reveal-stagger">
            {courses.map((course) => (
              <article className="card detail-card" data-tilt="8" key={course.id}>
                <div className="card-body">
                  <div className="card-heading"><h3>{course.title}</h3>{course.status && <span className="badge">{course.status}</span>}</div>
                  <p className="card-subtitle">{course.provider}</p>
                  {course.duration_text && <p className="card-date">{course.duration_text}</p>}
                  <div className="tag-list">
                    {stringList(course.technologies).map((tech) => <span className="badge" key={tech}>{tech}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ResearchSection items={research_publications} />

        <section id="achievements" className="portfolio-section" data-reveal>
          <div className="section-heading"><h2>Achievements &amp; Certifications</h2></div>
          <div className="detail-grid reveal-stagger">
            {achievements.map((item) => (
              <article className="card detail-card" data-tilt="8" key={item.id}>
                <div className="card-body">
                  {item.emoji && <span className="achievement-icon" aria-hidden="true">{item.emoji}</span>}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.certificate_url && (
                    <div className="card-actions">
                      <a className="btn btn-outline btn-sm" href={item.certificate_url} target="_blank" rel="noreferrer">View certificate <Arrow external /></a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <FamilyInfoHomeSection page={familyInformation} />

        <section id="contact" className="portfolio-section contact-section" data-reveal>
          <div>
            <div className="section-heading"><h2>Contact Me</h2></div>
            <h3>{profile.contact_intro_title}</h3>
            <p>{profile.contact_intro_text}</p>
            <address>
              {profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
              {profile.phone && <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>}
              {profile.location && <span>{profile.location}</span>}
            </address>
            <div className="section-actions"><SocialLinks links={social_links} placement="contact" /></div>
          </div>
          <ContactForm recipientEmail={profile.email} />
        </section>
      </main>
      <footer className="site-footer page-shell" data-reveal>
        <div>
          <Link className="footer-brand" href="/#home">{profile.full_name}</Link>
          {profile.footer_bio && <p>{profile.footer_bio}</p>}
        </div>
        <nav aria-label="Footer navigation">
          {HOME_NAV_LINKS.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/#courses">Courses</Link>
          <Link href="/#family-information">Family</Link>
          <Link href={PERSONAL_INFO_PATH}>Personal Info</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <p className="copyright">© {profile.copyright_year} {profile.full_name}</p>
      </footer>
    </>
  );
}
