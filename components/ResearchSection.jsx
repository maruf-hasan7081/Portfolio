function doiHref(doi) {
  if (!doi) return null;
  const trimmed = doi.trim();
  if (trimmed.startsWith("http")) return trimmed;
  const bare = trimmed.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "");
  return `https://doi.org/${bare}`;
}

function venueLabel(item) {
  if (item.publication_type === "journal" && item.journal_name) {
    return { kind: "Journal", name: item.journal_name };
  }
  if (item.publication_type === "conference" && item.conference_name) {
    return { kind: "Conference", name: item.conference_name };
  }
  if (item.journal_name) return { kind: "Journal", name: item.journal_name };
  if (item.conference_name) return { kind: "Conference", name: item.conference_name };
  return null;
}

export default function ResearchSection({ items = [] }) {
  return (
    <section id="research" className="portfolio-section" data-reveal>
      <div className="section-heading"><h2>Research &amp; Publications</h2></div>

      {items.length === 0 ? (
        <p className="empty-research">No publications are listed yet.</p>
      ) : (
        <div className="research-list reveal-stagger">
          {items.map((item) => {
            const venue = venueLabel(item);
            return (
              <article className="card detail-card" data-tilt="9" key={item.id}>
                <div className="card-body">
                  <div className="card-heading">
                    <span className="badge badge-primary">
                      {item.publication_type === "conference" ? "Conference" : "Journal"}
                    </span>
                    {item.year && <p className="card-date">{item.year}</p>}
                  </div>
                  <h3>{item.title}</h3>
                  {item.authors && <p className="card-subtitle">{item.authors}</p>}
                  {venue && <p>{venue.kind} · {venue.name}</p>}
                  {item.abstract && <p className="research-abstract">{item.abstract}</p>}
                  {item.doi && (
                    <div className="card-actions">
                      <a className="btn btn-outline btn-sm" href={doiHref(item.doi)} target="_blank" rel="noreferrer">
                        DOI: {item.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")} <span aria-hidden>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
