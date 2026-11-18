function withCacheBust(url, version) {
  if (!version) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${encodeURIComponent(version)}`;
}

export default function ResumeViewer({ pdfUrl, title = "My Resume", cacheVersion }) {
  if (!pdfUrl) return null;

  const src = withCacheBust(pdfUrl, cacheVersion);
  return (
    <div className="cv-panel resume-panel">
      <div className="card-heading">
        <h3>{title}</h3>
        <div className="resume-actions">
          <a href={src} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">Open PDF <span aria-hidden>↗</span></a>
          <a href={src} download className="btn btn-primary btn-sm">Download CV</a>
        </div>
      </div>
      <iframe key={src} src={src} title={title} loading="lazy" className="resume-iframe" />
    </div>
  );
}
