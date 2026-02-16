import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { MotionWrapper } from "@/components/ui/MotionWrapper"
import { useRef } from "react"

export function Work() {
    const carouselRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const current = carouselRef.current
            const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    const projects = [
        {
            id: 1,
            title: "Enterprise Analytics Platform",
            bgTitle: "ANALYTICS",
            label: "Concept Project",
            desc: "A clarity-first SaaS dashboard concept designed to reduce cognitive overload and improve decision-making.",
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
            desc: "A startup landing experience concept focused on trust-building, narrative clarity, and conversion psychology.",
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
                    className="max-w-5xl text-center mx-auto relative z-10 animate-fade-in"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
                        Our work isn't just <span className="text-brand-purple">visual.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto px-2">
                        It's strategic. It's built to perform. And it's designed to last.
                    </p>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-blue/40 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-multiply opacity-60" />
                <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-purple/40 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-multiply opacity-60" />
            </section>



            <div className="pb-16">
                {/* Project Carousel */}
                <section className="px-4 md:px-6 max-w-[95%] mx-auto py-8">
                    <div className="flex flex-col md:flex-row items-end md:items-center justify-between mb-8 md:mb-12">
                        <MotionWrapper>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Concept Projects</h2>
                            <p className="text-slate-500 mt-2 text-lg">Explorations in digital product design.</p>
                        </MotionWrapper>

                        {/* Carousel Controls */}
                        <div className="flex gap-2 mt-4 md:mt-0">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-colors bg-white shadow-sm"
                                aria-label="Previous project"
                            >
                                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-colors bg-white shadow-sm"
                                aria-label="Next project"
                            >
                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                            </button>
                        </div>
                    </div>

                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 scrollbar-hide -mx-4 px-4 md:px-0"
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="min-w-[80vw] md:min-w-[600px] snap-center shrink-0"
                            >
                                <Link to={project.link} className="group block h-full">
                                    <div
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col md:flex-row h-full transform-gpu hover:-translate-y-1"
                                    >
                                        {/* Image / Gradient Side */}
                                        <div className={`w-full md:w-1/2 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden h-[200px] md:h-[350px]`}>
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}></div>
                                            <div className="absolute inset-0 bg-grid-white/10"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-white/20 text-3xl md:text-4xl font-black tracking-[0.2em] uppercase">{project.bgTitle}</span>
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white relative z-10">
                                            <div>
                                                <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-wide mb-3 md:mb-4">
                                                    {project.label}
                                                </div>
                                                <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-2 md:mb-4 group-hover:text-brand-purple transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-4 md:mb-6 font-light">
                                                    {project.desc}
                                                </p>
                                                <div>
                                                    <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Primary Focus</span>
                                                    <span className="text-sm md:text-base text-slate-900 font-medium">{project.focus}</span>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex items-center gap-2 text-brand-purple font-bold group-hover:translate-x-2 transition-transform text-sm md:text-base">
                                                View Concept <ArrowRight size={16} className="md:w-5 md:h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
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
            </div >
        </>
    )
}
