function visibleEntries(entries) {
  return (entries || []).filter(
    (e) => String(e.value ?? "").trim() || String(e.image_url ?? "").trim()
  );
}

export default function FamilyInfoHomeSection({ page }) {
  if (!page?.show_on_home) return null;

  const summary = (page.home_summary || "").trim();
  const imageUrl = (page.home_image_url || "").trim();
  const title = page.title || "Family Information";

  const sectionsFiltered = (page.sections || [])
    .map((section) => ({
      ...section,
      entries: visibleEntries(section.entries),
    }))
    .filter(
      (s) =>
        s.entries.length > 0 ||
        String(s.description ?? "").trim() ||
        String(s.image_url ?? "").trim()
    );

  if (!summary && !imageUrl && sectionsFiltered.length === 0 && !title) return null;

  return (
    <section id="family-information" className="portfolio-section" data-reveal>
      <div className="section-heading">
        <h2>{title}</h2>
      </div>

      {(summary || imageUrl) && (
        <div className="personal-home-teaser" data-tilt="5">
          {imageUrl ? (
            <figure className="personal-home-media">
              <img src={imageUrl} alt="" loading="lazy" />
            </figure>
          ) : null}
          {summary ? (
            <div className="personal-home-copy">
              <p className="personal-home-summary">{summary}</p>
            </div>
          ) : null}
        </div>
      )}

      {sectionsFiltered.length > 0 ? (
        <div className="family-home-fields reveal-stagger mt-6">
          {sectionsFiltered.map((section) => (
            <article className="card detail-card family-home-card" data-tilt="6" key={section.id}>
              {section.image_url ? (
                <figure className="personal-section-media">
                  <img src={section.image_url} alt="" loading="lazy" />
                </figure>
              ) : null}
              <div className="card-body">
                {section.title ? <h3>{section.title}</h3> : null}
                {section.description ? (
                  <p className="personal-section-desc">{section.description}</p>
                ) : null}
                {section.entries.length > 0 ? (
                  <dl className="personal-entries family-home-entries">
                    {section.entries.slice(0, 12).map((entry) => (
                      <div key={entry.id} className="family-entry-row">
                        {entry.image_url ? (
                          <img
                            className="family-entry-photo"
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
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}