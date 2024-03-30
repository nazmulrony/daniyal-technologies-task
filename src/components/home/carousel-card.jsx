import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function CarouselCard() {
    return (
        <div className="bg-primary rounded-[20px] lg:rounded-[10px]  px-6 lg:px-0 py-8 lg:py-0 flex">
            <div className="text-white max-w-[35.5rem]  lg:ml-14  my-auto">
                <h1 className="text-3xl lg:text-5xl font-bold uppercase leading-tight  lg:leading-tight">
                    Get affordable, same-day coverage in no time.
                </h1>
                <p className="text-base mt-4 mb-10 ">
                    With roots over a century deep in the birthplace of the
                    automobile industry, USA Underwriters has the knowledge and
                    expertise to help tailor a policy to suit your lifestyle,
                    your budget, and your priorities.
                </p>
                <div className="flex items-center gap-2">
                    <Button variant="secondary">Report a Claim</Button>
                    <Button variant="link" className="text-white">
                        Learn More <BsArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
            <div className="flex-1 hidden lg:block">
                <Image
                    alt="person"
                    src="/images/person.png"
                    height={758}
                    width={494}
                    className="h-[500px] object-contain borer mx-auto"
                />
            </div>
        </div>
    );
}
