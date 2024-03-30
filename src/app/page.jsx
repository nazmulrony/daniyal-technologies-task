import Features from "@/components/home/features";
import HeroCarousel from "../components/home/hero-carousel";
import QuickCoverageHub from "@/components/home/quick-coverage-hub";

export default function Home() {
    return (
        <main>
            <HeroCarousel />
            <Features />
            <QuickCoverageHub />
        </main>
    );
}
