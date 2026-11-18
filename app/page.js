import PortfolioFromData from "@/components/PortfolioFromData";
import { getPortfolio } from "@/lib/getPortfolio";

export const dynamic = "force-dynamic";

export default async function Home() {
  const portfolio = await getPortfolio();
  return <PortfolioFromData portfolio={portfolio} />;
}
