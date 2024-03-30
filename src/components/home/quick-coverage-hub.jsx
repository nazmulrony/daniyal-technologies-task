import { Button } from "../ui/button";

export default function QuickCoverageHub() {
    return (
        <div className="sm:h-[20rem] lg:h-[34.65rem] rounded-[10px] bg-[url('/images/woman-on-car.png')] bg-cover bg-no-repeat overflow-hidden border relative border-red-200">
            <div className="bg-primary p-6 rounded-[10px]  w-full sm:max-w-[29rem] text-white  sm:absolute  bottom-6 left-12 lg:bottom-12 lg:left-28">
                <h3 className="font-bold text-lg">
                    Obtain cost-effective same-day insurance coverage quickly.
                </h3>
                <p className="text-xs my-4">
                    Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum
                    urna leo. Etiam enim varius dictum amet hac imperdiet
                    facilisis malesuada.
                </p>
                <Button variant="dark" className="w-full sm:w-max">
                    Claim a Report
                </Button>
            </div>
        </div>
    );
}
