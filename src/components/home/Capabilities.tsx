import { motion } from "framer-motion"
import { RefreshCw, Layout, Zap, Sparkles, Palette, Target } from "lucide-react"

export function Capabilities() {
    const capabilities = [
        {
            icon: Sparkles,
            title: "The Launch Package",
            desc: "Zero to brand & site in 4-6 weeks.",
            color: "text-purple-600 bg-purple-100",
            cardBg: "bg-purple-50/60 hover:bg-purple-50 placeholder:via-purple-50"
        },
        {
            icon: RefreshCw,
            title: "The Redesign Sprint",
            desc: "Modernize your site to fix Trust & Conversion.",
            color: "text-blue-600 bg-blue-100",
            cardBg: "bg-blue-50/60 hover:bg-blue-50"
        },
        {
            icon: Layout,
            title: "Website Design",
            desc: "Clarity-focused marketing & portfolio sites.",
            color: "text-emerald-600 bg-emerald-100",
            cardBg: "bg-emerald-50/60 hover:bg-emerald-50"
        },
        {
            icon: Zap,
            title: "UI Enhancement",
            desc: "Polish and structure for existing interfaces.",
            color: "text-amber-600 bg-amber-100",
            cardBg: "bg-amber-50/60 hover:bg-amber-50"
        },
        {
            icon: Palette,
            title: "Brand Identity",
            desc: "Visual identity systems that build recognition.",
            color: "text-pink-600 bg-pink-100",
            cardBg: "bg-pink-50/60 hover:bg-pink-50"
        },
        {
            icon: Target,
            title: "Landing Pages",
            desc: "High-converting pages optimized for leads.",
            color: "text-rose-600 bg-rose-100",
            cardBg: "bg-rose-50/60 hover:bg-rose-50"
        }
    ]

    return (
        <section className="section-padding px-6 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                            How we help you grow
                        </h2>
                        <p className="text-lg text-slate-600 max-w-xl">
                            We don't just "do design". We build specific assets that solve business problems.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className={`group p-8 rounded-2xl border border-transparent ${capability.cardBg} hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full`}
                        >
                            <div className={`w-12 h-12 ${capability.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <capability.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {capability.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {capability.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

