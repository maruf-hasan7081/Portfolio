import PersonalInformationView from "@/components/PersonalInformationView";
import SiteNavbar from "@/components/SiteNavbar";
import { getPersonalInformation } from "@/lib/getPersonalInformation";
import { getPortfolio } from "@/lib/getPortfolio";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Personal Info | Maruf Hasan Chowdhury",
  description: "Life, photos and stories — separate from family section on home.",
};

export default async function PersonalInformationPage() {
  const [portfolio, personalPage] = await Promise.all([
    getPortfolio(),
    getPersonalInformation(),
  ]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteNavbar profile={portfolio.profile} active="personal" />
      <PersonalInformationView page={personalPage} />
    </>
  );
}
