/** Home page section anchors (courses is on page only, not in nav). */
export const HOME_NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#achievements", label: "Achievements" },
];

/** Life / gallery page — separate from home family section. */
export const PERSONAL_INFO_PATH = "/personal-information";
export const PERSONAL_INFO_SLUG = "personal-information";
export const FAMILY_INFO_SLUG = "family-information";

export const NAV_LINKS = [
  ...HOME_NAV_LINKS,
  { href: PERSONAL_INFO_PATH, label: "Personal Info", isPersonalPage: true },
];