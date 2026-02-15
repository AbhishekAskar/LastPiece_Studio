
import { Rocket, RefreshCcw, MousePointerClick, LayoutGrid, Zap } from "lucide-react"

const capabilities = [
    {
        icon: Rocket,
        color: "text-blue-600",
        bg: "bg-pastel-blue",
        title: "Launching new brands",
        desc: "Strategic digital identity tailored for ambitious new ventures.",
    },
    {
        icon: RefreshCcw,
        color: "text-purple-600",
        bg: "bg-pastel-purple",
        title: "Redesigning websites",
        desc: "Modernizing outdated presences into premium experiences.",
    },
    {
        icon: MousePointerClick,
        color: "text-emerald-600",
        bg: "bg-pastel-green",
        title: "High-conversion pages",
        desc: "Landing pages optimized for user action and business growth.",
    },
    {
        icon: LayoutGrid,
        color: "text-orange-600",
        bg: "bg-pastel-orange",
        title: "Expressive UI systems",
        desc: "Scalable design systems that speak your brand's unique language.",
    },
    {
        icon: Zap,
        color: "text-rose-600",
        bg: "bg-pastel-pink",
        title: "Performance builds",
        desc: "Fast, reliable, and accessible code for the modern web.",
    },
]

export function Capabilities() {
    return (
        <section id="capabilities" className="py-16 px-6 max-w-7xl mx-auto">
            <div
                className="mb-10 animate-fade-in"
            >
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Capabilities</h2>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {capabilities.map((cap, index) => (
                    <div
                        key={index}
                        className={`${cap.bg} p-8 rounded-xl border border-slate-200/60 flex flex-col items-start gap-6 hover:shadow-xl transition-shadow cursor-default animate-fade-in-up`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <cap.icon className={`w-8 h-8 ${cap.color}`} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">{cap.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                                {cap.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
