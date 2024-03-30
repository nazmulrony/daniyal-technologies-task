import { MdHome } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import AboutHistory from "@/components/about/about-history";
import OurMission from "./our-mission";
import FeatureCards from "@/components/home/feature-cards";
export default function AboutPage() {
    return (
        <div>
            <h1 className="text-gray-900 font-medium text-4xl text-center">
                About us
            </h1>
            <div className=" flex items-center  text-xs lg:text-sm justify-center gap-2 lg:gap-4 text-gray-700 mt-4 mb-8 lg:mb-20">
                <MdHome className="text-xl" />
                <span>Home</span>
                <FaAngleRight />
                <span className="text-gray-500">About us</span>
            </div>
            <AboutHistory />
            <OurMission />
            <FeatureCards />
        </div>
    );
}
