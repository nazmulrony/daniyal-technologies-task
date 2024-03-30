import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
} from "@/components/ui/carousel";
import { featuresData } from "../../../dummydata";
import FeatureCard from "./feature-card";

export default function FeatureCarousel() {
    return (
        <div className="md:hidden">
            <Carousel>
                <CarouselContent>
                    {featuresData.map((feature) => (
                        <CarouselItem key={feature.id}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselDots />
            </Carousel>
        </div>
    );
}
