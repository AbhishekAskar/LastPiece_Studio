import { Check, Puzzle } from "lucide-react"
import { MotionWrapper } from "@/components/ui/MotionWrapper"

export function WhyLastPiece() {
    const points = [
        "Business-first approach",
        "Direct access to founders",
        "Rapid experimentation",
        "Technical excellence"
    ]

    return (
        <section className="py-16 md:py-24 px-6 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10">
                    <Puzzle className="w-32 h-32 text-brand-purple" />
                </div>
                <div className="absolute bottom-10 right-10">
                    <Puzzle className="w-40 h-40 text-pastel-blue" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <MotionWrapper
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                            Why work with us?
                        </h2>

                        <div className="space-y-4">
                            {points.map((point, index) => {
                                const colors = [
                                    "bg-purple-100 text-purple-600",
                                    "bg-blue-100 text-blue-600",
                                    "bg-pink-100 text-pink-600",
                                    "bg-emerald-100 text-emerald-600"
                                ]
                                const colorClass = colors[index % colors.length]

                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4"
                                    >
                                        <div className={`w-8 h-8 rounded-full ${colorClass} flex items-center justify-center flex-shrink-0`}>
                                            <Check className="w-5 h-5" />
                                        </div>
                                        <span className="text-xl font-medium text-slate-800">
                                            {point}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </MotionWrapper>

                    {/* Right side - Visual card */}
                    <MotionWrapper
                        className="transform-gpu"
                    >
                        <div className="bg-gradient-to-br from-pastel-purple/20 via-pastel-blue/20 to-pastel-pink/20 p-12 rounded-3xl border border-white/50 shadow-lg">
                            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl">

                                <p className="text-lg text-slate-700 leading-relaxed italic mb-6">
                                    "We don't just hand off code and disappear. We are creative partners invested in your long-term growth and verified outcomes."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-purple/20 rounded-full flex items-center justify-center">
                                        <Puzzle className="w-6 h-6 text-brand-purple" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">LastPiece Studio</div>
                                        <div className="text-xs text-slate-600">Design Philosophy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    )
}
