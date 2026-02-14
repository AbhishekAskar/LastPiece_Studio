import { Button } from "@/components/ui/Button"
import { m, LazyMotion, domAnimation } from "framer-motion"
import { Sparkles, Puzzle, Paintbrush } from "lucide-react"
import { Link } from "react-router-dom"
import { VARIANTS_HERO, VARIANTS_HERO_CONTAINER } from "@/lib/animations"

export function Hero() {
    return (
        <LazyMotion features={domAnimation}>
            <section className="relative flex items-center justify-center overflow-hidden gradient-mesh px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24 min-h-[100svh] md:min-h-[90vh]">
                {/* Content */}
                <m.div
                    initial="hidden"
                    animate="visible"
                    variants={VARIANTS_HERO_CONTAINER}
                    className="relative z-10 max-w-5xl text-center mx-auto flex flex-col items-center justify-center h-full"
                >
                    {/* Badge */}
                    <m.div
                        variants={VARIANTS_HERO}
                        className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-slate-200 px-4 py-1.5 rounded-full mb-6 md:mb-8 shadow-sm will-change-transform"
                    >
                        <Sparkles className="text-brand-purple w-3.5 h-3.5" />
                        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-brand-purple">
                            CRAFTING DIGITAL INTENTIONALITY
                        </span>
                    </m.div>

                    {/* Heading */}
                    <m.h1
                        variants={VARIANTS_HERO}
                        className="font-black text-slate-900 mb-6 tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.1] will-change-transform"
                    >
                        Design that makes your brand <br className="hidden md:block" />
                        feel <span className="text-brand-purple italic">complete</span> online.
                    </m.h1>

                    {/* Subheading */}
                    <m.p
                        variants={VARIANTS_HERO}
                        className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto font-medium will-change-transform"
                    >
                        LastPiece Studio designs modern, expressive websites for startups, creators, and growing businesses who want to stand out online.
                    </m.p>

                    {/* Buttons */}
                    <m.div
                        variants={VARIANTS_HERO}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto will-change-transform"
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
                    </m.div>
                </m.div>

                {/* Decorative Floating Icons - Stable & Subtle Entrance */}
                <m.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute top-1/4 left-4 md:left-20 text-brand-purple/10 hidden lg:block will-change-transform"
                >
                    <Puzzle size={100} strokeWidth={1.5} />
                </m.div>

                <m.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="absolute bottom-1/4 right-4 md:right-20 text-slate-200 hidden lg:block will-change-transform"
                >
                    <Paintbrush size={80} strokeWidth={1.5} />
                </m.div>

                {/* Background Blobs - GPU accelerated */}
                <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-blue/40 rounded-full blur-[80px] md:blur-[100px] -z-10 mix-blend-multiply opacity-60 will-change-transform" />
                <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-purple/40 rounded-full blur-[80px] md:blur-[100px] -z-10 mix-blend-multiply opacity-60 will-change-transform" />
            </section>
        </LazyMotion>
    )
}
