// app/(main)/page.js
import Hero from "../../components/sections/Hero";
import USPCards from "../../components/sections/USPCards";
import ProcessBreakdown from "../../components/sections/ProcessBreakdown ";
import PricingSection from "../../components/sections/PricingSection";
import PortfolioTeaser from "../../components/sections/PortfolioTeaser ";
import CTASection from "../../components/sections/CTASection";
import { getBlurData } from "../../utils/getBlurData";

async function getImagesWithBlur() {
  const images = [
    { src: "fitness.jpg", alt: "Fitness website" },
    { src: "ippo.jpg", alt: "Boxing website" },
    { src: "restaurant.jpg", alt: "Restaurant website" },
  ];

  return await Promise.all(
    images.map(async (img) => ({
      ...img,
      blurDataURL: await getBlurData(img.src),
    }))
  );
}

export default async function Home() {
  const images = await getImagesWithBlur();

  return (
    <div className="overflow-hidden">
      <Hero images={images} />
      <USPCards />
      <PortfolioTeaser />
      <ProcessBreakdown />
      <PricingSection />
      <CTASection />
    </div>
  );
}
