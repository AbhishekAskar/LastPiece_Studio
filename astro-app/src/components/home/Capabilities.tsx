import { RefreshCw, Layout, Sparkles, Monitor, Code2, Smartphone } from "lucide-react"

export function Capabilities() {
    const capabilities = [
        {
            icon: Sparkles,
            title: "The Launch Package",
            description: "Zero to brand & site in 4-6 weeks.",
            color: "text-purple-600 bg-purple-100",
            cardBg: "bg-purple-50/60 hover:bg-purple-50 placeholder:via-purple-50"
        },
        {
            icon: RefreshCw,
            title: "The Redesign Sprint",
            description: "Modernize your site to fix Trust & Conversion.",
            color: "text-blue-600 bg-blue-100",
            cardBg: "bg-blue-50/60 hover:bg-blue-50 placeholder:via-blue-50"
        },
        {
            icon: Monitor,
            title: "Web Design",
            description: "High-level visual design that aligns with your brand identity."
        },
        {
            icon: Code2,
            title: "Development",
            description: "Clean, performant code built with Next.js and Tailwind."
        },
        {
            icon: Smartphone,
            title: "Responsive",
            description: "Perfect experience across all devices and screen sizes."
        },
        {
            icon: Layout,
            title: "UI/UX",
            description: "User-centric interfaces designed for conversion and clarity."
        }
    ]

    return (
        <section className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        What we do best.
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We don't try to be everything to everyone. We focus on building high-performance websites.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <cap.icon className="w-10 h-10 text-brand-purple shrink-0" />
                                <h3 className="text-xl font-bold text-slate-900">{cap.title}</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

