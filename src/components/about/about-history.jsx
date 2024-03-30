import Image from "next/image";

export default function AboutHistory() {
    return (
        <div>
            <div className="flex gap-2 lg:gap-20 flex-col lg:flex-row">
                <div className=" font-medium">
                    <span className=" text-gray-700  hidden lg:bock ">
                        About us
                    </span>
                    <h2 className="text-gray-900 font-semibold text-xl lg:text-3xl">
                        History
                    </h2>
                </div>
                <p className="text-xs md:text-sm lg:text-base text-justify font-medium text-gray-500">
                    In 1962, the Southern Michigan Mutual Insurance Company
                    celebrated it&apos;s 100th year in continuous operation and
                    was presented with a plaque by the State of Michigan as a
                    Centenary Business.
                </p>
            </div>
            <Image
                src="/images/couple-on-car.png"
                height={496}
                width={1232}
                className="w-full object-cover my-4 lg:my-12 rounded-sm lg:rounded-[10px] "
                alt="people"
            />
            <div className="space-y-3 lg:space-y-5 text-justify text-gray-500 text-xs md:text-sm lg:text-base font-medium">
                <p>
                    In 2013, Southern Michigan Mutual Insurance Company became
                    USA Underwriters. The name may have changed, but the
                    dedication to our customers, our drive to serve them and
                    their communities hasn&apos;t. USA Underwriters&apos;
                    mission as a leading Property and Casualty Insurance company
                    in Michigan, remains largely unchanged from the mission of
                    it&apos;s progenitor: to provide affordable, quality
                    insurance solutions to families and individuals.
                </p>
                <p>
                    Insurance has changed a lot in the last century and a half.
                    When Southern Michigan Mutual Insurance Company was founded,
                    automobiles simply didn&apos;t exist. That all changed —
                    right in the company&apos;s back yard — at the turn of the
                    20th century when Henry Ford&apos;s Model T began rolling
                    off the assembly line.
                </p>
                <p>
                    In an instant of history, the car supplanted the horse and
                    buggy as American&apos;s primary mode of transportation. The
                    era of the Automobile had begun, and the Southern Michigan
                    Mutual Insurance Company was front and center for one of the
                    most dramatic shifts in American history. The car
                    accelerated economic growth, and offered a freedom of travel
                    that had been nigh-unimaginable for the vast majority of
                    people through the whole of human history.
                </p>
            </div>
        </div>
    );
}
