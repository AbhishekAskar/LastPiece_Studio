import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { MotionWrapper } from "@/components/ui/MotionWrapper"

export function Work() {
    const projects = [
        {
            id: 1,
            title: "Enterprise Analytics Platform",
            bgTitle: "ANALYTICS",
            label: "Concept Project",
            desc: "A clarity-first SaaS dashboard concept designed to reduce cognitive overload and improve decision-making for data-driven teams.",
            focus: "Dashboard Architecture & Data Vis",
            gradientFrom: "from-indigo-400",
            gradientTo: "to-purple-500",
            link: "/work/nexus-saas"
        },
        {
            id: 2,
            title: "Financial Tech Website",
            bgTitle: "FINTECH",
            label: "Concept Project",
            desc: "A startup landing experience concept focused on trust-building, narrative clarity, and conversion psychology for fintech.",
            focus: "Conversion Design & Storytelling",
            gradientFrom: "from-emerald-400",
            gradientTo: "to-teal-500",
            link: "/work/venture-flow"
        },
        {
            id: 3,
            title: "Fashion & Lifestyle Store",
            bgTitle: "LIFESTYLE",
            label: "Concept Project",
            desc: "A premium lifestyle brand website concept designed to create emotional connection and elevate perceived value.",
            focus: "Brand Identity & E-commerce",
            gradientFrom: "from-rose-400",
            gradientTo: "to-pink-500",
            link: "/work/aura-lifestyle"
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative flex items-center justify-center overflow-hidden gradient-mesh px-4 md:px-6 pt-32 pb-16 md:pt-48 md:pb-20 min-h-[60vh] md:min-h-[70vh]">
                <div
                    className="max-w-5xl text-center mx-auto relative z-10 will-change-transform animate-fade-in"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
                        Explorations in <span className="text-brand-purple">digital clarity.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-light max-w-4xl mx-auto px-2">
                        A collection of self-initiated concepts that demonstrate our approach to product design, branding, and user experience.
                    </p>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-blue/40 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-multiply opacity-60 will-change-transform" />
                <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-purple/40 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-multiply opacity-60 will-change-transform" />
            </section>

            <div className="pb-16">
                {/* Project Grid */}
                <section className="px-4 md:px-6 max-w-7xl mx-auto py-8">
                    <div
                        className="grid grid-cols-1 gap-8 md:gap-12"
                    >
                        {projects.map((project, index) => (
                            <Link to={project.link} key={index} className="group block">
                                <div
                                    className="bg-white rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col md:flex-row h-auto md:h-[400px] transform-gpu hover:-translate-y-1"
                                >
                                    {/* Image / Gradient Side */}
                                    <div className={`w-full md:w-1/2 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden h-[200px] md:h-auto`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}></div>
                                        <div className="absolute inset-0 bg-grid-white/10"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-white/20 text-3xl md:text-4xl font-black tracking-[0.2em] uppercase">{project.bgTitle}</span>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between bg-white relative z-10">
                                        <div>
                                            <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-wide mb-4 md:mb-6">
                                                {project.label}
                                            </div>
                                            <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-3 md:mb-4 group-hover:text-brand-purple transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4 md:mb-6 font-light">
                                                {project.desc}
                                            </p>
                                            <div>
                                                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1 md:mb-2">Primary Focus</span>
                                                <span className="text-sm md:text-base text-slate-900 font-medium">{project.focus}</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 md:mt-8 flex items-center gap-2 text-brand-purple font-bold group-hover:translate-x-2 transition-transform text-sm md:text-base">
                                            View Concept <ArrowRight size={18} className="md:w-5 md:h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Philosophy Strip */}
                <section className="px-4 md:px-6 max-w-7xl mx-auto py-12 md:py-16 my-8 md:my-12">
                    <MotionWrapper
                        className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-brand-purple/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
                        <div className="relative z-10">
                            <p className="text-xl md:text-3xl text-white font-light leading-relaxed max-w-4xl mx-auto">
                                We build these concepts to keep our skills sharp and our thinking clear.
                            </p>
                        </div>
                    </MotionWrapper>
                </section>

                {/* CTA */}
                <section className="px-6 max-w-3xl mx-auto py-24 text-center">
                    <MotionWrapper>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                            Have a similar vision?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Let's apply this same level of thought to your product.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/40">
                                Start a Project <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </MotionWrapper>
                </section>
            </div>
        </>
    )
}
