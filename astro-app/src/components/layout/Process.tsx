
import { ScanSearch, PencilRuler, Code2, Rocket } from "lucide-react"

export function Process() {
    const steps = [
        {
            icon: ScanSearch,
            title: "Discovery",
            description: "We dive deep into your business goals, target audience, and market landscape to build a solid strategy."
        },
        {
            icon: PencilRuler,
            title: "Design",
            description: "We craft visually stunning, user-centric designs that align with your brand identity and conversion goals."
        },
        {
            icon: Code2,
            title: "Development",
            description: "Our developers bring designs to life with clean, high-performance code, ensuring responsiveness and speed."
        },
        {
            icon: Rocket,
            title: "Launch & Growth",
            description: "We handle the deployment process and provide ongoing support to help your digital presence scale."
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="text-center mb-10 animate-fade-in"
                >
                    <div className="inline-block px-4 py-1.5 bg-slate-50 rounded-full text-xs font-bold text-brand-purple uppercase tracking-widest mb-4">
                        Our Workflow
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                        From concept to <span className="text-brand-purple">reality.</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Our proven process ensures transparency, efficiency, and exceptional results for every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-brand-purple/20">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
