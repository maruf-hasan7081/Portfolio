import Link from "next/link";

function sectionImageUrl(section) {
  return (section.image_url || "").trim();
}

export default function PersonalInformationView({ page }) {
  const sections = (page?.sections || [])
    .map((section) => ({
      ...section,
      entries: (section.entries || []).filter(
        (entry) =>
          String(entry.value ?? "").trim() || String(entry.image_url ?? "").trim()
      ),
    }))
    .filter(
      (section) =>
        section.entries.length > 0 ||
        (section.description || "").trim() ||
        sectionImageUrl(section)
    );

  const fieldCount = sections.reduce(
    (count, section) => count + section.entries.length,
    0
  );

  return (
    <main id="main-content" className="page-shell personal-page" tabIndex={-1}>
      <div className="personal-hero" data-reveal>
        <Link href="/#family-information" className="btn btn-outline">
          <span aria-hidden>←</span> Back to portfolio
        </Link>
        <p className="hero-welcome">
          <span aria-hidden />
          Life &amp; gallery
        </p>
        <h1>{page?.title || "Personal Information"}</h1>
        {page?.subtitle && <p>{page.subtitle}</p>}
        {page?.home_image_url ? (
          <figure className="personal-hero-thumb">
            <img src={page.home_image_url} alt="" loading="lazy" />
          </figure>
        ) : null}
        {sections.length > 0 && (
          <p className="hero-nickname">
            {sections.length} section{sections.length === 1 ? "" : "s"} · {fieldCount} field
            {fieldCount === 1 ? "" : "s"}
          </p>
        )}
      </div>

      {sections.length === 0 ? (
        <p className="empty-research mt-8" data-reveal>
          No personal information is available yet. Add fields in Django Admin under ★ Personal Information.
        </p>
      ) : (
        <div className="portfolio-section personal-detail-grid reveal-stagger" data-reveal>
          {sections.map((section) => {
            const image = sectionImageUrl(section);
            const description = (section.description || "").trim();
            return (
              <section className="card detail-card personal-detail-card" data-tilt="8" key={section.id}>
                {image ? (
                  <figure className="personal-section-media">
                    <img src={image} alt="" loading="lazy" />
                  </figure>
                ) : null}
                <div className="card-body">
                  <h2>{section.title}</h2>
                  {description ? <p className="personal-section-desc">{description}</p> : null}
                  {section.entries.length > 0 ? (
                    <dl className="personal-entries">
                      {section.entries.map((entry) => (
                        <div key={entry.id} className="personal-entry-row">
                          {entry.image_url ? (
                            <img
                              className="personal-entry-photo"
                              src={entry.image_url}
                              alt=""
                              loading="lazy"
                            />
                          ) : null}
                          <div>
                            <dt>{entry.label}</dt>
                            <dd>{entry.value}</dd>
                          </div>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </main>
  );
}