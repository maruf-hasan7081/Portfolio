import personalFallback from "./personalInfoFallback.json";
import { API_BASE } from "./getPortfolio";
import { PERSONAL_INFO_SLUG } from "./navLinks";

const fallbackPage = personalFallback?.sections
  ? personalFallback
  : {
      slug: PERSONAL_INFO_SLUG,
      title: "Personal Information",
      subtitle: "Start Django admin and seed data to load fields.",
      sections: [],
    };

export async function getPersonalInformation(slug = PERSONAL_INFO_SLUG) {
  try {
    const res = await fetch(
      `${API_BASE}/api/v1/personal-information/${slug}/`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`API ${res.status}`);
    return await res.json();
  } catch {
    return fallbackPage;
  }
}