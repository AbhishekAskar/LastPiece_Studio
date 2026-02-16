import { Brain, Eye, Zap, Users } from "lucide-react"


export function SelectedWork() {
    const approaches = [
        {
            icon: Brain,
            title: "Clarity-First Thinking",
            desc: "We prioritize understanding the 'why' before designing the 'what'.",
            color: "bg-purple-100"
        },
        {
            icon: Eye,
            title: "Conversion Awareness",
            desc: "Every design decision is made with your business goals in mind.",
            color: "bg-blue-100"
        },
        {
            icon: Zap,
            title: "Performance & Accessibility",
            desc: "Fast, inclusive experiences that rank better and serve everyone.",
            color: "bg-emerald-100"
        },
        {
            icon: Users,
            title: "Collaborative Process",
            desc: "We build with you, not just for you. Transparency at every step.",
            color: "bg-orange-100"
        }
    ]

    return (
        <section className="section-padding px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* How We Approach New Work - Credibility Section */}
                <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
                        {/* Left Side: Header */}
                        <div className="lg:col-span-5">
                            <span className="text-brand-purple font-bold tracking-widest uppercase text-xs mb-4 block">
                                Our Methodology
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                How we approach new work?
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We bring the same level of strategic thinking and craftsmanship to every client partnership. It's not just about pixels; it's about solving real business problems through design.
                            </p>
                        </div>

                        {/* Right Side: Grid */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {approaches.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
                                    >
                                        <div className={`w-12 h-12 ${item.color.replace('border-', 'bg-').replace('/80', '')} rounded-xl flex items-center justify-center text-slate-700 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon size={22} className="text-slate-900" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
