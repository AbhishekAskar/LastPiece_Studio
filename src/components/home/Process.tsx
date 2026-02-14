import { m } from "framer-motion"
import { MotionWrapper } from "@/components/ui/MotionWrapper"
import { VARIANTS_CONTAINER, VARIANTS_SECTION } from "@/lib/animations"

export function Process() {
    const steps = [
        { number: "01", label: "Strategy", description: "Market & User Research" },
        { number: "02", label: "UX / UI", description: "Wireframes & Visuals" },
        { number: "03", label: "Development", description: "Clean, Fast Code" },
        { number: "04", label: "Testing", description: "QA & Performance" },
        { number: "05", label: "Launch", description: "Go Live & Support" }
    ]

    return (
        <section className="section-padding px-6 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <MotionWrapper className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                            How we work
                        </h2>
                        <p className="text-lg text-slate-600 max-w-xl">
                            A streamlined path from chaos to clarity.
                        </p>
                    </MotionWrapper>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <m.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10 hidden md:block origin-left will-change-transform"
                    />

                    <m.div
                        variants={VARIANTS_CONTAINER}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-5 gap-8"
                    >
                        {steps.map((step, index) => (
                            <m.div
                                key={index}
                                variants={VARIANTS_SECTION}
                                className="flex flex-col items-center text-center group relative bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-2xl"
                            >
                                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 md:border-slate-50 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-purple transition-all duration-300 z-10">
                                    <span className="text-xl font-black text-brand-purple">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {step.label}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium">
                                    {step.description}
                                </p>
                            </m.div>
                        ))}
                    </m.div>
                </div>
            </div>
        </section>
    )
}
