import Image from "next/image";

export default function FeatureCard({ title, description }) {
    return (
        <div className="border border-gray-100 rounded-[17px] p-4 lg:p-12 ">
            <div className="bg-gray-200 h-16 w-16 rounded-full grid place-items-center">
                <Image
                    src="/images/money-icon.svg"
                    height={32}
                    width={32}
                    alt="icon"
                />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">
                {title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-500 mb-6">
                {description}
            </p>
        </div>
    );
}
