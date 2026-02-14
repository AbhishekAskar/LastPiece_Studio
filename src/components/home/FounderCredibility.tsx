import { Quote } from "lucide-react"
import { MotionWrapper } from "@/components/ui/MotionWrapper"

export function FounderCredibility() {
    return (
        <section className="py-16 md:py-24 px-6 bg-slate-50">
            <div className="max-w-5xl mx-auto">
                <MotionWrapper
                    viewportAmount={0.3}
                    className="bg-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-sm border border-slate-100"
                >
                    <Quote className="absolute top-10 left-10 text-brand-purple/10 w-32 h-32 rotate-180" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                            "The agency model is broken. We fixed it."
                        </h3>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Most agencies treat you like a number. They pass you off to junior designers while charging senior rates. At LastPiece, you work directly with experts. No bloat, no fluff, just shipping great work.
                        </p>
                    </div>
                </MotionWrapper>
            </div>
        </section >
    )
}
