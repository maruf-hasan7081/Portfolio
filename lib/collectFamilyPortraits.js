export function collectFamilyPortraits(page) {
  const portraits = [];
  for (const section of page?.sections || []) {
    for (const entry of section.entries || []) {
      const url = (entry.image_url || "").trim();
      const name = String(entry.value ?? "").trim();
      if (!url || !name || name.startsWith("[")) continue;
      portraits.push({
        id: entry.id,
        label: entry.label,
        name,
        url,
      });
    }
  }
  return portraits;
}