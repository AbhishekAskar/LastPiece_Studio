import { motion } from "framer-motion"
import { BrainCircuit, Sparkles, Zap, Users, Puzzle } from "lucide-react"

const points = [
    {
        icon: BrainCircuit,
        color: "text-primary",
        bg: "bg-pastel-blue",
        title: "Thoughtful Design",
        desc: "Every element is placed with purpose, ensuring your brand story is heard.",
    },
    {
        icon: Sparkles,
        color: "text-purple-600",
        bg: "bg-pastel-purple",
        title: "Modern Expressive UI",
        desc: "We push creative boundaries while maintaining usability and clarity.",
    },
    {
        icon: Zap,
        color: "text-emerald-600",
        bg: "bg-pastel-green",
        title: "Performance-Focused",
        desc: "Lightweight code and optimized assets for instant load times.",
    },
    {
        icon: Users,
        color: "text-orange-600",
        bg: "bg-pastel-orange",
        title: "Small-Team Collaboration",
        desc: "You work directly with the creators. No middle-men, no noise.",
    },
]

export function WhyUs() {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
                        The difference is in the details.
                    </h2>
                    <ul className="space-y-6">
                        {points.map((point, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className={`mt-1 ${point.bg} p-2 rounded-lg`}>
                                    <point.icon className={`${point.color} w-5 h-5`} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">
                                        {point.title}
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {point.desc}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="bg-gradient-to-br from-primary/10 to-pastel-blue rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden">
                        {/* Background elements */}
                        <Puzzle className="w-[300px] h-[300px] text-primary/10 rotate-12 absolute -top-10 -right-10" />
                        <Puzzle className="w-[250px] h-[250px] text-white/40 -rotate-12 absolute -bottom-10 -left-10" />

                        {/* Testimonial Card */}
                        <div className="bg-white p-10 rounded-xl shadow-2xl relative z-10 border border-slate-100 max-w-sm mx-6">
                            <p className="text-slate-900 font-medium italic mb-6">
                                &quot;LastPiece Studio didn&apos;t just build a website; they
                                captured the soul of our product.&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">
                                        Digital Founder
                                    </p>
                                    <p className="text-xs text-slate-500">Industry Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
