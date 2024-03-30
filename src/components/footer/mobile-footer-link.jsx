import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

export default function MobileFooterLinks() {
    return (
        <div className="lg:hidden container mx-auto md:px-8 text-white space-y-6">
            <Accordion
                type="single"
                collapsible
                className="w-full border border-gray-700 rounded-[10px]"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="px-4 font-medium">
                        USA Underwriter
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-900 p-4 flex flex-col font-normal">
                        <span> NAIC #: 30457</span>
                        <span>P.O. Box 2426</span>
                        <span>Rancho Cucamonga, CA, 91729</span>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="px-4 font-medium">
                        Customer Service & Support
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-900 p-4 flex flex-col font-normal">
                        <span> Monday - Friday, 9:00 am - 6:00 pm ET</span>
                        <span>+1 (248) 541-2800</span>
                        <span>customerservice@usaunderwriters.com</span>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none">
                    <AccordionTrigger className="px-4 font-medium">
                        Claims Administration
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-900 p-4 flex flex-col font-normal">
                        <span> Monday - Friday, 9:00 am - 6:00 pm ET</span>
                        <span>+1 (855) 230-1656</span>
                        <span>P.O. Box 647 | Battle Creek, MI 49016</span>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion
                type="single"
                collapsible
                className="w-full border border-gray-700 rounded-[10px]"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="px-4 font-medium">
                        Underwriting Support
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-900 p-4 flex flex-col font-normal">
                        <span> Monday - Friday, 9:00 am - 6:00 pm ET</span>
                        <span>+1 (248) 541-2800</span>
                        <span>customerservice@usaunderwriters.com</span>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="px-4 font-medium">
                        Policy Suspensions And Coverage Approvals
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-900 p-4 flex flex-col font-normal">
                        <span> Monday - Friday, 9:00 am - 6:00 pm ET</span>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none">
                    <AccordionTrigger className="px-4 font-medium">
                        PIP Qualification Question and Submissions for Coverage
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-900 p-4 flex flex-col font-normal ">
                        <span> +1 (248) 541-2800</span>
                        <span>policybinding@usaunderwriters.com</span>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
