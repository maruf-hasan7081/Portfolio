/** Normalize API list fields (never show raw JSON strings on the site). */
export function stringList(value) {
  if (!value) return [];
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed.map(String);
    } catch {
      return [value];
    }
    return [value];
  }
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object" && item.label) return item.label;
      if (item && typeof item === "object" && item.line) return item.line;
      return "";
    })
    .filter(Boolean);
}