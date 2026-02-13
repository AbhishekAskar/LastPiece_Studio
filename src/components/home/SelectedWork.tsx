import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Brain, Eye, Zap, Users } from "lucide-react"


export function SelectedWork() {
    const projects = [
        {
            title: "Enterprise Analytics Platform",
            bgTitle: "ANALYTICS",
            label: "Concept Project",
            desc: "A clarity-focused dashboard optimizing complex data visualization.",
            gradientFrom: "from-indigo-500",
            gradientTo: "to-purple-600",
            link: "/work/nexus-saas"
        },
        {
            title: "Financial Tech Website",
            bgTitle: "FINTECH",
            label: "Concept Project",
            desc: "Building trust and conversion for a modern fintech startup.",
            gradientFrom: "from-emerald-400",
            gradientTo: "to-teal-500",
            link: "/work/venture-flow"
        },
        {
            title: "Fashion & Lifestyle Store",
            bgTitle: "LIFESTYLE",
            label: "Concept Project",
            desc: "Elevating brand perception through immersive digital storytelling.",
            gradientFrom: "from-rose-400",
            gradientTo: "to-pink-500",
            link: "/work/aura-lifestyle"
        }
    ]

    const approaches = [
        {
            icon: Brain,
            title: "Clarity-First Thinking",
            desc: "We prioritize understanding the 'why' before designing the 'what'.",
            color: "bg-purple-50/80 border-purple-100"
        },
        {
            icon: Eye,
            title: "Conversion Awareness",
            desc: "Every design decision is made with your business goals in mind.",
            color: "bg-blue-50/80 border-blue-100"
        },
        {
            icon: Zap,
            title: "Performance & Accessibility",
            desc: "Fast, inclusive experiences that rank better and serve everyone.",
            color: "bg-emerald-50/80 border-emerald-100"
        },
        {
            icon: Users,
            title: "Collaborative Process",
            desc: "We build with you, not just for you. Transparency at every step.",
            color: "bg-orange-50/80 border-orange-100"
        }
    ]

    return (
        <section className="section-padding px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="text-brand-purple font-bold tracking-widest uppercase text-xs mb-4 block">
                            Our Work
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                            Concept Projects
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
                            Explorations that show how we think, design, and solve digital problems.
                        </p>
                        <p className="mt-4 text-slate-500 text-lg max-w-3xl">
                            These are self-initiated product and website directions created to demonstrate our approach to clarity, usability, and conversion-focused design.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-20 mb-32">
                    {projects.map((project, index) => (
                        <Link to={project.link} key={index} className="group block">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                            >
                                {/* Visual Side */}
                                <div className="h-72 md:h-[450px] w-full relative overflow-hidden rounded-[2.5rem] group shadow-sm hover:shadow-2xl transition-all duration-500">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} group-hover:scale-105 transition-transform duration-700 ease-out`} />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white/20 text-3xl md:text-4xl font-black tracking-[0.2em] uppercase group-hover:text-white/30 transition-colors duration-500 transform group-hover:-translate-y-2">
                                            {project.bgTitle}
                                        </span>
                                    </div>
                                    <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                                        <span className="text-white font-bold text-xs tracking-wide uppercase">{project.label}</span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:pl-8">
                                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 group-hover:text-brand-purple transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                        {project.desc}
                                    </p>

                                    <div className="inline-flex items-center gap-3 text-brand-purple font-bold text-lg border-b-2 border-transparent group-hover:border-brand-purple transition-all pb-1">
                                        View Concept <ArrowRight size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* How We Approach New Work - Credibility Section */}
                <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl font-black text-slate-900 mb-4">How we approach new work</h3>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            We bring the same level of strategic thinking and craftsmanship to every client partnership.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {approaches.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`${item.color} p-8 rounded-3xl shadow-sm border hover:shadow-md transition-all`}
                            >
                                <div className="w-12 h-12 bg-brand-purple/5 rounded-2xl flex items-center justify-center mb-6 text-brand-purple">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
