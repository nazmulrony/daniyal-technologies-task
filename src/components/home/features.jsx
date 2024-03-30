import { Button } from "../ui/button";
import FeatureCards from "./feature-cards";

export default function Features() {
    return (
        <div className="my-16 lg:mt-24 lg:mb-20  ">
            <div className=" flex justify-between flex-col md:flex-row gap-6 lg:gap-10">
                <div className="md:min-w-[27.5rem] text-center md:text-left">
                    <span className="font-medium text-gray-700">
                        Our Features
                    </span>
                    <h2 className="text-gray-900 text-xl lg:text-3xl font-semibold mb-4">
                        MCCA REFUND INFORMATION
                    </h2>
                    <Button className="w-full md:w-max">MCCA Refund FAQ</Button>
                </div>
                <p className="max-w-[40rem] text-gray-500 text-justify text-xs sm:text-sm md:text-base">
                    The Michigan Catastrophic Claims Association approved
                    refunds for certain Michigan Policyholders due a surplus of
                    funds being held by the MCCA. The approved refund will be
                    $400 per eligible vehicle insured with USA Underwriters on
                    October 31st, 2021 at 11:59 PM, or $80 if the vehicle is an
                    insured historical vehicle.
                </p>
            </div>
            <FeatureCards />
        </div>
    );
}
