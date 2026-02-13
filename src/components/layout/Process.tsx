import { motion } from "framer-motion"
import { Search, Waypoints, Palette, Code, Rocket } from "lucide-react"

const steps = [
    {
        icon: Search,
        title: "Discover",
        desc: "Auditing and research",
        color: "text-primary",
    },
    {
        icon: Waypoints,
        title: "Shape",
        desc: "Strategy & logic",
        color: "text-primary",
    },
    {
        icon: Palette,
        title: "Design",
        desc: "Visual expression",
        color: "text-primary",
    },
    {
        icon: Code,
        title: "Build",
        desc: "Scalable engineering",
        color: "text-primary",
    },
    {
        icon: Rocket,
        title: "Launch",
        desc: "Performance optimization",
        color: "text-white",
        bg: "bg-primary",
        shadow: "shadow-xl shadow-primary/30",
    },
]

export function Process() {
    return (
        <section id="process" className="px-6 max-w-7xl mx-auto py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h2>
                <p className="text-slate-600">
                    How we turn ideas into completed digital products.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {/* Connector Line (Desktop Only) */}
                <div className="absolute top-[2.5rem] left-0 w-full h-px bg-slate-200 -z-10 hidden md:block" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div
                            className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10 transition-transform duration-300 group-hover:scale-110 ${step.bg
                                ? `${step.bg} ${step.shadow}`
                                : "bg-white border border-slate-200 shadow-sm"
                                }`}
                        >
                            <step.icon className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
