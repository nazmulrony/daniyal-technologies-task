import { featuresData } from "../../../dummydata";
import FeatureCard from "./feature-card";
import FeatureCarousel from "./feature-carousel";

export default function FeatureCards() {
    return (
        <div className="lg:mt-10 mt-6 mb-10 lg:mb-0">
            <div className=" grid-cols-3 gap-10 hidden md:grid">
                {featuresData.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
            <FeatureCarousel />
        </div>
    );
}
