
import { ArrowLeft, LayoutTemplate, Activity, MousePointer2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useState, useEffect } from "react"

export function NexusSaaS() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="bg-slate-50 min-h-screen pt-32">
            {/* Floating Back Button */}
            <div
                className={`fixed top-24 md:top-28 left-6 z-40 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-5 pointer-events-none'}`}
            >
                <a href="/work" className="bg-white/50 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md text-slate-600 hover:text-brand-purple px-4 py-2 rounded-full flex items-center gap-2 transition-all text-sm font-medium group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    <span className="hidden md:inline">Back to Work</span>
                    <span className="md:hidden">Back</span>
                </a>
            </div>

            {/* Project Hero */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <a href="/work" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-purple mb-8 transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Work
                    </a>
                    <div
                        className="animate-fade-in"
                    >
                        <div className="bg-white/50 backdrop-blur-sm border border-slate-200 inline-block px-4 py-1.5 rounded-full mb-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Concept Project</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
                            Enterprise Analytics Platform
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl leading-relaxed">
                            A clarity-first SaaS dashboard concept designed to reduce cognitive overload and improve decision-making for data-driven teams.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visual Showcase */}
            <section className="px-6 pb-20">
                <div
                    className="max-w-7xl mx-auto h-[60vh] md:h-[80vh] rounded-[3rem] overflow-hidden relative shadow-2xl animate-fade-in-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 text-4xl md:text-5xl font-black tracking-[0.2em] uppercase">
                            ANALYTICS
                        </span>
                    </div>
                </div>
            </section>

            {/* Concept Details - Grid Layout */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                        {/* Sidebar - Context */}
                        <div className="md:col-span-4 space-y-10">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 sticky top-32">
                                <div className="mb-10">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Focus Areas</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-900 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            Information Hierarchy
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-900 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            Workflow Clarity
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-900 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-slate-900" />
                                            Performance-First UI
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Demonstrated Skill</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Our ability to structure complex digital products and simplify dense data without losing fidelity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-8 space-y-24">
                            {/* Problem */}
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 mb-6">Problem we explored</h2>
                                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-indigo-500 pl-6">
                                    SaaS dashboards are often known for their complexity. Cluttered interfaces, confusing navigation, and slow data interpretation lead to cognitive overload. We wanted to explore how a complex analytics tool could feel <span className="text-slate-900 font-semibold">calm, fast, and intuitive</span> without sacrificing density.
                                </p>
                            </div>

                            {/* Approach */}
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 mb-10">Our Approach</h2>
                                <div className="space-y-12">
                                    <div className="flex gap-6 group">
                                        <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <LayoutTemplate className="text-indigo-600" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">Simplify Navigation</h3>
                                            <p className="text-slate-600 leading-relaxed">We flattened the navigation structure, reducing click-depth and making primary actions accessible from a global command palette.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group">
                                        <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <Activity className="text-purple-600" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">Improve Data Scanning</h3>
                                            <p className="text-slate-600 leading-relaxed">By optimizing typographic hierarchy and using whitespace as a grouping mechanism, we made key metrics stand out instantly.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group">
                                        <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <MousePointer2 className="text-blue-600" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">Reduce Friction</h3>
                                            <p className="text-slate-600 leading-relaxed">Optimizing user flows for common tasks like report generation and team onboarding to be linear and obvious.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Concept Direction */}
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 mb-8">Concept Direction</h2>
                                <div className="bg-slate-900 p-10 rounded-[2.5rem] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                                        <div className="text-center p-4">
                                            <div className="w-12 h-1 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
                                            <h4 className="font-bold text-white mb-2 text-lg">Modular Layout</h4>
                                            <p className="text-sm text-slate-400">Drag-and-drop widget system</p>
                                        </div>
                                        <div className="text-center p-4 border-t sm:border-t-0 sm:border-l border-white/10">
                                            <div className="w-12 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>
                                            <h4 className="font-bold text-white mb-2 text-lg">Intentional Type</h4>
                                            <p className="text-sm text-slate-400">Inter font family for readability</p>
                                        </div>
                                        <div className="text-center p-4 border-t sm:border-t-0 sm:border-l border-white/10">
                                            <div className="w-12 h-1 bg-white mx-auto mb-6 rounded-full"></div>
                                            <h4 className="font-bold text-white mb-2 text-lg">Reduced Noise</h4>
                                            <p className="text-sm text-slate-400">Subtle divider lines</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specific CTA */}
            <section className="py-24 px-6 bg-slate-50 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Need a dashboard this clear?</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Let's discuss how we can simplify your product's UX.
                    </p>
                    <a href="/contact">
                        <Button size="lg" className="h-14 px-8 shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/40">
                            Book Strategy Call
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    )
}
