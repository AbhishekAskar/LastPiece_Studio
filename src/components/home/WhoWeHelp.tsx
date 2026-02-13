import { motion } from "framer-motion"
import { Rocket, Building2, TrendingUp } from "lucide-react"

export function WhoWeHelp() {
    const audiences = [
        {
            icon: Rocket,
            title: "Early-Stage Founders",
            desc: "You have a product, but your website doesn't tell your story. You need credibility to raise funds or sign first customers.",
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            icon: TrendingUp,
            title: "Growth Scale-ups",
            desc: "You're scaling fast, but your design tech debt is slowing you down. You need a system that grows with your team.",
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            icon: Building2,
            title: "Established Brands",
            desc: "Your site looks dated compared to competitors. You need a premium refresh to reassert your market leadership.",
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        }
    ]

    return (
        <section className="py-16 md:py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Who is this for?
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        We work best with ambitious teams who value design as a business lever, not just decoration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-purple/20 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
