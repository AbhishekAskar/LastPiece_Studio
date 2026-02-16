import { RefreshCw, Layout, Sparkles, Monitor, Code2, Smartphone } from "lucide-react"

export function Capabilities() {
    const capabilities = [
        {
            icon: Sparkles,
            title: "The Launch Package",
            description: "Zero to brand & site in 4-6 weeks.",
            color: "text-purple-600",
            cardBg: "bg-purple-50"
        },
        {
            icon: RefreshCw,
            title: "The Redesign Sprint",
            description: "Modernize your site to fix Trust & Conversion.",
            color: "text-blue-600",
            cardBg: "bg-blue-50"
        },
        {
            icon: Monitor,
            title: "Web Design",
            description: "High-level visual design that aligns with your brand identity.",
            color: "text-emerald-600",
            cardBg: "bg-emerald-50"
        },
        {
            icon: Code2,
            title: "Development",
            description: "Clean, performant code built with Next.js and Tailwind.",
            color: "text-indigo-600",
            cardBg: "bg-indigo-50"
        },
        {
            icon: Smartphone,
            title: "Responsive",
            description: "Perfect experience across all devices and screen sizes.",
            color: "text-rose-600",
            cardBg: "bg-rose-50"
        },
        {
            icon: Layout,
            title: "UI/UX",
            description: "User-centric interfaces designed for conversion and clarity.",
            color: "text-amber-600",
            cardBg: "bg-amber-50"
        }
    ]

    return (
        <section className="py-16 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        What we do best?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We don't try to be everything to everyone. We focus on building high-performance websites.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {capabilities.map((cap, index) => (
                        <div
                            key={index}
                            className={`p-5 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up ${cap.cardBg}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <cap.icon className={`w-8 h-8 ${cap.color.split(' ')[0]} shrink-0`} />
                                <h3 className="text-lg font-bold text-slate-900">{cap.title}</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

