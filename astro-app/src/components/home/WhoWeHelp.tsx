import { Rocket, Building2, TrendingUp } from "lucide-react"
import { MotionWrapper } from "@/components/ui/MotionWrapper"

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
                <MotionWrapper className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Who is this for?
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        We work best with ambitious teams who value design as a business lever, not just decoration.
                    </p>
                </MotionWrapper>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {audiences.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 group hover:shadow-lg"
                        >
                            <div className="h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
