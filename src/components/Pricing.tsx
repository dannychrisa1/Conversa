import { smallSphere, stars } from "../assets"
import { LeftLine, RightLine } from "./design/PricingList"
import { Heading } from "./Heading"
import { PricingList } from "./PricingList"
import { Section } from "./Section"

export const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] 
                lg:flex">
                    <img src={smallSphere} width={255} height={255} alt="sphere"
                        className="relative z-1" />
                </div>
                <div className="absolute top-1 left-1/2 w-[60rem] -translate-x-1/2
                -translate-y-1/2 pointer-events-none">
                    <img src={stars} alt="stars" width={950} height={400} className="w-full" />
                </div>
                <Heading title="Pay once, use forever" className="md:text-center" tag="Get started with Conversa" />
                <div className="relative">
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>
                <div className="flex justify-center mt-10">
                    <a href="#pricing" className="text-xs font-code font-bold 
                    tracking-wider uppercase border-b">
                        See the full details
                    </a>
                </div>
            </div>

        </Section>
    )
}