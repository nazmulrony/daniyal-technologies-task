import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
} from "@/components/ui/carousel";
import CarouselCard from "./carousel-card";

export default function HeroCarousel() {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <CarouselCard />
                    </CarouselItem>
                    <CarouselItem>
                        <CarouselCard />
                    </CarouselItem>
                </CarouselContent>
                <CarouselDots />
            </Carousel>
        </div>
    );
}
