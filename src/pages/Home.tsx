import { Hero } from "@/components/layout/Hero"
import { WhoWeHelp } from "@/components/home/WhoWeHelp"
import { ProblemSolution } from "@/components/home/ProblemSolution"
import { Capabilities } from "@/components/home/Capabilities"
import { SelectedWork } from "@/components/home/SelectedWork"
import { Process } from "@/components/home/Process"
import { WhyLastPiece } from "@/components/home/WhyLastPiece"
import { FounderCredibility } from "@/components/home/FounderCredibility"
import { FAQ } from "@/components/home/FAQ"
import { Contact } from "@/components/layout/Contact"

export function Home() {
    return (
        <main>
            <Hero />
            <WhoWeHelp />
            <ProblemSolution />
            <Capabilities />
            <Process />
            <SelectedWork />
            <WhyLastPiece />
            <FounderCredibility />
            <FAQ />
            <Contact />
        </main>
    )
}
