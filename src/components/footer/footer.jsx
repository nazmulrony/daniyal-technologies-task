import { HiClock } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import MobileFooterLinks from "./mobile-footer-link";
export default function Footer() {
    return (
        <div className=" mt-10">
            <div className="bg-gray-800 py-8 l lg:py-16">
                <div className="hidden  container md:px-8 mx-auto lg:grid grid-cols-3 gap-y-12 text-white">
                    <div>
                        <div className="flex flex-col max-w-[18.75rem]">
                            <h3 className="text-xl font-semibold mb-2">
                                USA Underwriter
                            </h3>
                            <span className="text-sm">NAIC #: 30457</span>
                            <span className="text-sm">P.O. Box 2426</span>
                            <span className="text-sm">
                                Rancho Cucamonga, CA, 91729
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col max-w-[18.75rem] ">
                            <h3 className="text-xl font-semibold mb-2">
                                Underwriting Support
                            </h3>
                            <span className="text-sm flex items-center">
                                <HiClock className="mr-1" /> Monday - Friday,
                                9:00 am - 6:00 pm ET
                            </span>
                            <span className="text-sm flex items-center">
                                <FaPhone className="mr-1 text-xs" />
                                +1 (248) 541-2800
                            </span>
                            <span className="text-sm flex items-center">
                                <HiMail className="mr-1" />{" "}
                                customerservice@usaunderwriters.com
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex flex-col max-w-[18.75rem] ">
                            <h3 className="text-xl font-semibold mb-2">
                                Policy Suspensions And Coverage Approvals
                            </h3>

                            <span className="text-sm flex items-center">
                                <FaPhone className="mr-1 text-xs" />
                                Monday - Friday, 9:00 am - 6:00 pm ET
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col max-w-[18.75rem]">
                            <h3 className="text-xl font-semibold mb-2">
                                Customer Service & Support
                            </h3>
                            <span className="text-sm flex items-center">
                                <HiClock className="mr-1" /> Monday - Friday,
                                9:00 am - 6:00 pm ET
                            </span>
                            <span className="text-sm flex items-center">
                                <FaPhone className="mr-1 text-xs" />
                                +1 (248) 541-2800
                            </span>
                            <span className="text-sm flex items-center">
                                <HiMail className="mr-1" />{" "}
                                customerservice@usaunderwriters.com
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col max-w-[18.75rem]">
                            <h3 className="text-xl font-semibold mb-2">
                                Claims Administration
                            </h3>
                            <span className="text-sm flex items-center">
                                <HiClock className="mr-1" />
                                Monday - Friday, 9:00 am - 6:00 pm ET
                            </span>
                            <span className="text-sm flex items-center">
                                <FaPhone className="mr-1 text-xs" />
                                +1 (855) 230-1656
                            </span>
                            <span className="text-sm flex items-center">
                                <FaLocationDot className="mr-1" /> P.O. Box 647
                                | Battle Creek, MI 49016
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex flex-col max-w-[18.75rem] ">
                            <h3 className="text-xl font-semibold mb-2">
                                PIP Qualification Question and Submissions for
                                Coverage
                            </h3>

                            <span className="text-sm flex items-center">
                                <FaPhone className="mr-1 text-xs" />
                                +1 (248) 541-2800
                            </span>
                            <span className="text-sm flex items-center">
                                <HiMail className="mr-1" />{" "}
                                policybinding@usaunderwriters.com
                            </span>
                        </div>
                    </div>
                </div>
                <MobileFooterLinks />
            </div>
            <div className="bg-gray-800 text-white lg:text-gray-900 lg:bg-gray-100 py-4 text-sm">
                <div className="container mx-auto md:px-8 flex flex-col lg:flex-row justify-between items-center">
                    <p className="flex flex-col lg:flex-row">
                        Copyright 2022 USA Underwriters{" "}
                        <span className="hidden lg:flex ">
                            <span className="font-semibold cursor-pointer">
                                | Privacy Policy
                            </span>{" "}
                            <span className="font-semibold cursor-pointer">
                                | Terms of Use
                            </span>
                        </span>
                        <span className="lg:hidden text-center mb-4">
                            <span className=" cursor-pointer">
                                Privacy Policy
                            </span>{" "}
                            <span className=" cursor-pointer">
                                | Terms of Use
                            </span>
                        </span>
                    </p>
                    <span>
                        ( Built by Neutrix - Powered by Neutrix Systems )
                    </span>
                </div>
            </div>
        </div>
    );
}
