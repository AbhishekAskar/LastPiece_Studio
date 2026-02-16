import { Button } from "@/components/ui/Button"
import { Sparkles, Puzzle, Paintbrush } from "lucide-react"
import { Link } from "react-router-dom"

export function Hero() {
    return (
        <section className="relative flex items-center justify-center overflow-hidden gradient-mesh px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24 min-h-[100svh] md:min-h-[90vh]">
            {/* Content */}
            <div
                className="relative z-10 max-w-5xl text-center mx-auto flex flex-col items-center justify-center h-full animate-fade-in"
            >
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-slate-200 px-4 py-1.5 rounded-full mb-6 md:mb-8 shadow-sm"
                >
                    <Sparkles className="text-brand-purple w-3.5 h-3.5" />
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-brand-purple">
                        CRAFTING DIGITAL INTENTIONALITY
                    </span>
                </div>

                {/* Heading */}
                <h1
                    className="font-black text-slate-900 mb-6 tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.1]"
                >
                    Design that makes your brand <br className="hidden md:block" />
                    feel <span className="text-brand-purple inline-block -skew-x-6">complete</span> online.
                </h1>

                {/* Subheading */}
                <p
                    className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto font-medium"
                >
                    LastPiece Studio designs modern, expressive websites for startups, creators, and growing businesses who want to stand out online.
                </p>

                {/* Buttons */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto"
                >
                    <Link to="/contact" className="w-full sm:w-auto">
                        <Button size="lg" className="shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/40 transition-all text-base bg-brand-purple hover:bg-brand-purple/90 rounded-full h-12 md:h-14 px-8 w-full sm:w-auto">
                            Start a Project
                        </Button>
                    </Link>
                    <Link to="/approach" className="w-full sm:w-auto">
                        <Button
                            variant="white"
                            size="lg"
                            className="text-base border border-slate-200 text-slate-700 rounded-full h-12 md:h-14 px-8 w-full sm:w-auto"
                        >
                            View Approach
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Decorative Floating Icons */}
            <div
                className="absolute top-1/4 left-4 md:left-20 text-brand-purple/10 hidden lg:block"
            >
                <Puzzle size={100} strokeWidth={1.5} />
            </div>

            <div
                className="absolute bottom-1/4 right-4 md:right-20 text-slate-200 hidden lg:block"
            >
                <Paintbrush size={80} strokeWidth={1.5} />
            </div>

            {/* Background Blobs - GPU accelerated */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-blue/40 rounded-full blur-[80px] md:blur-[100px] -z-10 mix-blend-multiply opacity-60" />
            <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-purple/40 rounded-full blur-[80px] md:blur-[100px] -z-10 mix-blend-multiply opacity-60" />
        </section>
    )
}
