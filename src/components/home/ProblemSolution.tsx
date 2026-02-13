import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

export function ProblemSolution() {
    return (
        <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Problem Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -left-10 -top-10 w-64 h-64 bg-rose-50 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-20 top-20 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-50"
                        />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">
                                Most websites are <span className="text-rose-400">leaking revenue.</span>
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    "Generic templates that don't build trust",
                                    "Confusing copy that kills conversion",
                                    "Slow performance that frustrates users",
                                    "Mobile experiences that feel broken"
                                ].map((problem, i) => (
                                    <li key={i} className="flex items-start gap-4 text-lg text-slate-600">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 shrink-0">
                                            <X size={14} strokeWidth={3} />
                                        </div>
                                        <span>{problem}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Solution Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
                        <div className="relative z-10 bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
                            <h2 className="text-3xl font-black mb-8 tracking-tight">
                                We build <span className="text-emerald-300">growth systems.</span>
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    "Custom design that separates you from competitors",
                                    "Outcome-driven copy that sells your value",
                                    "Blazing fast performance (95+ Core Web Vitals)",
                                    "Seamless experience across all devices"
                                ].map((solution, i) => (
                                    <li key={i} className="flex items-start gap-4 text-lg text-slate-300">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-300 shrink-0 border border-emerald-500/20">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span>{solution}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
