import { m } from "framer-motion"
import { Sparkles, ShoppingBag, ArrowLeft, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { useState, useEffect } from "react"

export function AuraLifestyle() {
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
            <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isScrolled ? 1 : 0, x: isScrolled ? 0 : -20, pointerEvents: isScrolled ? 'auto' : 'none' }}
                transition={{ duration: 0.3 }}
                className="fixed top-24 md:top-28 left-6 z-40"
            >
                <Link to="/work" className="bg-white/50 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md text-slate-600 hover:text-brand-purple px-4 py-2 rounded-full flex items-center gap-2 transition-all text-sm font-medium group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    <span className="hidden md:inline">Back to Work</span>
                    <span className="md:hidden">Back</span>
                </Link>
            </m.div>

            {/* Project Hero */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link to="/work" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-purple mb-8 transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Work
                    </Link>
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/50 backdrop-blur-sm border border-slate-200 inline-block px-4 py-1.5 rounded-full mb-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Concept Project</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
                            Fashion & Lifestyle Store
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl leading-relaxed">
                            A premium lifestyle brand website concept designed to create emotional connection and elevate perceived value through digital storytelling.
                        </p>
                    </m.div>
                </div>
            </section>

            {/* Visual Showcase */}
            <section className="px-6 pb-20">
                <m.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-7xl mx-auto h-[60vh] md:h-[80vh] rounded-[3rem] overflow-hidden relative shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-600"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 text-4xl md:text-5xl font-black tracking-[0.2em] uppercase">
                            LIFESTYLE
                        </span>
                    </div>
                </m.div>
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
                                            <div className="w-2 h-2 rounded-full bg-rose-400" />
                                            Emotion-Driven UI
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-900 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-pink-500" />
                                            Immersive Product Storytelling
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-900 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-slate-900" />
                                            Micro-Interactions
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Demonstrated Skill</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Balancing high-end aesthetics with seamless e-commerce functionality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-8 space-y-24">
                            {/* Problem */}
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 mb-6">Problem we explored</h2>
                                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-rose-400 pl-6">
                                    In the crowded lifestyle market, products often feel interchangeable. We wanted to explore how a digital experience could elevate a commodity into a <span className="text-slate-900 font-semibold">coveted object of desire</span> through atmosphere, pacing, and visual storytelling.
                                </p>
                            </div>

                            {/* Approach */}
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 mb-10">Our Approach</h2>
                                <div className="space-y-12">
                                    <div className="flex gap-6 group">
                                        <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <Sparkles className="text-rose-500" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">Atmospheric Design</h3>
                                            <p className="text-slate-600 leading-relaxed">We used large-scale imagery, soft gradients, and slow-motion video backgrounds to set a calming, luxurious mood.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group">
                                        <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <Heart className="text-pink-500" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">Emotional Copy</h3>
                                            <p className="text-slate-600 leading-relaxed">Shifting the narrative from "features" to "feelings" to connect with the user's aspirations.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group">
                                        <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <ShoppingBag className="text-slate-900" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">Seamless Commerce</h3>
                                            <p className="text-slate-600 leading-relaxed">Integrating 'Add to Cart' functionality directly into lookbook-style imagery for intuitive purchasing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Concept Direction */}
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 mb-8">Concept Direction</h2>
                                <div className="bg-slate-900 p-10 rounded-[2.5rem] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                                        <div className="text-center p-4">
                                            <div className="w-12 h-1 bg-rose-400 mx-auto mb-6 rounded-full"></div>
                                            <h4 className="font-bold text-white mb-2 text-lg">Soft Palettes</h4>
                                            <p className="text-sm text-slate-400">Pastels & warm lights</p>
                                        </div>
                                        <div className="text-center p-4 border-t sm:border-t-0 sm:border-l border-white/10">
                                            <div className="w-12 h-1 bg-pink-500 mx-auto mb-6 rounded-full"></div>
                                            <h4 className="font-bold text-white mb-2 text-lg">Serif Typography</h4>
                                            <p className="text-sm text-slate-400">Editorial feel</p>
                                        </div>
                                        <div className="text-center p-4 border-t sm:border-t-0 sm:border-l border-white/10">
                                            <div className="w-12 h-1 bg-white mx-auto mb-6 rounded-full"></div>
                                            <h4 className="font-bold text-white mb-2 text-lg">Fluid Motion</h4>
                                            <p className="text-sm text-slate-400">Slow fades & paralax</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-slate-50 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Building a brand?</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Let's create something that people fall in love with.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="h-14 px-8 shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/40">
                            Book Strategy Call
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
