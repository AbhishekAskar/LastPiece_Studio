import { motion } from "framer-motion"
import { ArrowRight, Sparkles, RefreshCw, Boxes, Gauge, Lightbulb, PenTool, Code2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"

export function Services() {
    const servicePillars = [
        {
            icon: Sparkles,
            title: "The Launch Package",
            position: "For Startups (Seed - Series A)",
            description: "Go from zero to a high-converting brand and website in 4-6 weeks.",
            outcomes: ["Investor-Ready Brand", "High-Performance Site", "Scalable CMS"],
            includes: ["Brand Identity System", "Next.js Website Dev", "Sanity CMS Setup", "Analytics & SEO"],
            color: "bg-brand-purple/5 border-brand-purple/20"
        },
        {
            icon: RefreshCw,
            title: "The Redesign Sprint",
            position: "For Scale-Ups",
            description: "Modernize your outdated site to fix conversion leaks and improve trust.",
            outcomes: ["Reduced Bounce Rate", "Improved Trust Signals", "Modern Tech Stack"],
            includes: ["UX/UI Audit", "Migration to Next.js", "Design System", "Performance Opt."],
            color: "bg-blue-50 border-blue-100"
        },
        {
            icon: Boxes,
            title: "Website Design & Dev",
            position: "For Clarity & Performance",
            description: "Custom websites built for clarity, credibility, and long-term performance.",
            outcomes: ["Marketing Websites", "Startup Landing Pages", "Portfolio Sites"],
            includes: ["Modern UI Design", "Responsive Layouts", "Fast Performance", "Structured Content"],
            color: "bg-emerald-50 border-emerald-100"
        },
        {
            icon: Gauge,
            title: "UI Enhancement",
            position: "For Interface Polish",
            description: "Improve the usability, clarity, and visual structure of existing interfaces.",
            outcomes: ["Layout Refinement", "Typography Hierarchy", "Consistent Components"],
            includes: ["Design System Cleanup", "Interface Polish", "Visual Consistency", "Accessibility Tweaks"],
            color: "bg-orange-50 border-orange-100"
        }
    ]

    const processSteps = [
        { icon: Lightbulb, number: "01", title: "Diagnosis", desc: "Identifying growth blockers." },
        { icon: PenTool, number: "02", title: "Strategy", desc: "Clear roadmap to ROI." },
        { icon: Code2, number: "03", title: "Execution", desc: "High-velocity sprints." },
        { icon: CheckCircle2, number: "04", title: "Optimization", desc: "Refining with data." }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative flex items-center justify-center overflow-hidden gradient-mesh px-4 md:px-6 pt-32 pb-16 md:pt-48 md:pb-24 min-h-[60vh] md:min-h-[70vh]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl text-center mx-auto relative z-10"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 md:mb-8 leading-[1.1]">
                        Services designed for <span className="text-brand-purple">impact.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto px-2">
                        We don't sell "hours". We sell outcomes. Clear packages to help you launch, pivot, or grow.
                    </p>
                </motion.div>

                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-blue/40 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-multiply opacity-60" />
                <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-purple/40 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-multiply opacity-60" />
            </section>

            <div className="pb-16">
                {/* Service Pillars - Detailed Grid */}
                <section className="px-6 max-w-7xl mx-auto pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {servicePillars.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`p-8 rounded-[2rem] border ${service.color} hover:shadow-xl transition-all duration-300 group bg-white`}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                                        <service.icon size={28} className="text-brand-purple" />
                                    </div>
                                    <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-500 border border-slate-100 shadow-sm">
                                        {service.position}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Target Outcomes</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.outcomes.map((outcome, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-slate-100 rounded-md text-sm font-semibold text-slate-700">
                                                    {outcome}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Includes</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                                            {service.includes.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                                                    <div className="w-1.5 h-1.5 bg-brand-purple rounded-full shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Process - Horizontal Timeline */}
                <section className="px-6 max-w-7xl mx-auto py-24 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="relative z-10 px-4 md:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-black mb-6">Our Method</h2>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
                                A structured approach to ensure quality, speed, and transparency.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="absolute top-10 left-0 w-full h-0.5 bg-white/10 -z-10 hidden md:block" />

                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center relative"
                                >
                                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl border border-white/10 relative z-10">
                                        <span className="text-2xl font-black text-brand-purple">{step.number}</span>
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-400">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 max-w-3xl mx-auto py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Stop guessing. Start growing.</h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Schedule a free 30-minute strategy call to discuss your goals.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/40">
                                Book Strategy Call <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </section>
            </div>
        </>
    )
}
