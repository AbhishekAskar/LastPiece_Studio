import { m } from "framer-motion"
import { ArrowRight, Check, X, Target, Users, Zap, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { MotionWrapper } from "@/components/ui/MotionWrapper"
import { VARIANTS_HERO, VARIANTS_CONTAINER, VARIANTS_CARD } from "@/lib/animations"

export function Studio() {
    return (
        <>
            {/* 1) HERO */}
            <section className="relative flex items-center justify-center overflow-hidden gradient-mesh px-4 md:px-6 pt-32 pb-16 md:pt-48 md:pb-24 min-h-[60vh] md:min-h-[70vh]">
                <m.div
                    variants={VARIANTS_HERO}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl text-center mx-auto relative z-10 will-change-transform"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
                        We build <span className="text-brand-purple">what was missing.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto mb-8 md:mb-10 px-2">
                        Bridging the gap between freelance agility and agency strategy.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="h-12 md:h-14 px-8 text-base md:text-lg rounded-full shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/40">
                            Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </m.div>

                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-blue/40 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-multiply opacity-60 will-change-transform" />
                <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-purple/40 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-multiply opacity-60 will-change-transform" />
            </section>

            <div className="pb-16">
                {/* 2) WHY LASTPIECE EXISTS */}
                <section className="px-4 md:px-6 max-w-5xl mx-auto pb-16 md:pb-24">
                    <MotionWrapper
                        className="bg-brand-purple/5 rounded-3xl md:rounded-[2.5rem] p-8 md:p-16 border border-slate-100"
                    >
                        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
                            {/* Problem Section */}
                            <div className="space-y-4 md:space-y-6">
                                <span className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">
                                    The Problem
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                                    Most websites feel disconnected.
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 leading-[1.6] md:leading-[1.8]">
                                    They check the boxes visually but lack substance, personality, or genuine thought behind the design decisions.
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-12 md:w-16 h-px bg-slate-300"></div>

                            {/* Our Role Section */}
                            <div className="space-y-4 md:space-y-6">
                                <span className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">
                                    Where we come in
                                </span>
                                <p className="text-xl md:text-3xl text-slate-900 font-semibold leading-[1.4] md:leading-[1.6]">
                                    LastPiece exists to bring intention, clarity, and personality back into digital experiences.
                                </p>
                            </div>
                        </div>
                    </MotionWrapper>
                </section>

                {/* 3) OUR PHILOSOPHY */}
                <section className="px-4 md:px-6 max-w-7xl mx-auto pb-16 md:pb-24">
                    <MotionWrapper
                        className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">How we think</h2>
                        <p className="text-base md:text-lg text-slate-600">Principles that guide every pixel we ship.</p>
                    </MotionWrapper>

                    <m.div
                        variants={VARIANTS_CONTAINER}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                    >
                        {[
                            { icon: Target, title: "Intentionality", desc: "No filler. Everything has a purpose.", color: "bg-purple-50/60 border-purple-100" },
                            { icon: Eye, title: "Clarity", desc: "We remove noise to amplify the message.", color: "bg-blue-50/60 border-blue-100" },
                            { icon: Zap, title: "Performance", desc: "Fast, accessible, and conversion-ready.", color: "bg-amber-50/60 border-amber-100" },
                            { icon: Users, title: "Human", desc: "Digital products for real people.", color: "bg-emerald-50/60 border-emerald-100" }
                        ].map((item, index) => (
                            <m.div
                                key={index}
                                variants={VARIANTS_CARD}
                                whileHover="hover"
                                className={`${item.color} p-6 md:p-8 rounded-2xl md:rounded-3xl border hover:shadow-lg transition-all duration-300 group`}
                            >
                                <div>
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center mb-4 md:mb-6 text-slate-900 shadow-sm">
                                        <item.icon size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h3>
                                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </m.div>
                        ))}
                    </m.div>
                </section>

                {/* 4) HOW WORKING TOGETHER FEELS */}
                <section className="px-4 md:px-6 max-w-6xl mx-auto pb-16 md:pb-24">
                    <MotionWrapper
                        className="bg-[#0B0F19] text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden"
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-purple/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>

                        <div className="grid md:grid-cols-2 gap-10 md:gap-16 relative z-10 items-center">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6">Partnership, not just a vendor.</h2>
                                <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6 md:mb-8">
                                    We don't believe in bloating projects with unnecessary hours or fancy buzzwords. We believe in shipping work that moves the needle.
                                    LastPiece isn't just a name—it's about adding that final, crucial element of strategy.
                                </p>
                            </div>
                            <div className="space-y-4 md:space-y-6">
                                {[
                                    { title: "Transparent", desc: "No hidden fees or surprise timelines.", color: "bg-emerald-500/10 border-emerald-400/20" },
                                    { title: "Direct", desc: "You work with the makers, not managers.", color: "bg-blue-500/10 border-blue-400/20" },
                                    { title: "Proactive", desc: "We suggest improvements, not just take orders.", color: "bg-purple-500/10 border-purple-400/20" }
                                ].map((trait, i) => (
                                    <div key={i} className={`flex gap-4 items-start p-4 rounded-xl ${trait.color} border hover:brightness-110 transition-all`}>
                                        <div className="mt-1 w-2 h-2 rounded-full bg-white shrink-0"></div>
                                        <div>
                                            <h4 className="font-bold text-white text-base md:text-lg">{trait.title}</h4>
                                            <p className="text-slate-300 text-xs md:text-sm">{trait.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>
                </section>

                {/* 5) VALUES */}
                <section className="px-4 md:px-6 max-w-7xl mx-auto pb-16 md:pb-24">
                    <MotionWrapper className="mb-8 md:mb-12 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900">Values that drive results</h2>
                    </MotionWrapper>
                    <m.div
                        variants={VARIANTS_CONTAINER}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                    >
                        {[
                            { icon: Target, title: "Focus", desc: "We do fewer things, better.", color: "bg-purple-50/60 border-purple-100" },
                            { icon: Users, title: "Empathy", desc: "Understanding the user is job one.", color: "bg-pink-50/60 border-pink-100" },
                            { icon: Zap, title: "Speed", desc: "Momentum is a key feature.", color: "bg-blue-50/60 border-blue-100" },
                            { icon: Heart, title: "Craft", desc: "Details matter. A lot.", color: "bg-rose-50/60 border-rose-100" }
                        ].map((value, index) => (
                            <m.div
                                key={index}
                                variants={VARIANTS_CARD}
                                whileHover="hover"
                                className={`border ${value.color} p-6 md:p-8 rounded-2xl h-full hover:shadow-md transition-all`}
                            >
                                <value.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-purple mb-3 md:mb-4" />
                                <h3 className="font-bold text-base md:text-lg text-slate-900 mb-2">{value.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                            </m.div>
                        ))}
                    </m.div>
                </section>

                {/* 6) BUILT FOR SPEED & QUALITY (Credibility) */}
                <section className="px-4 md:px-6 max-w-4xl mx-auto pb-16 md:pb-24 text-center">
                    <MotionWrapper>
                        <div className="inline-block px-4 py-1.5 md:px-6 md:py-2 bg-purple-50 rounded-full text-brand-purple font-bold text-sm md:text-base mb-6 md:mb-8">
                            Why choose us?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 md:mb-12">Built for speed & quality.</h2>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
                            <div className="p-6 md:p-8 bg-blue-50/60 border border-blue-100 rounded-3xl hover:shadow-md transition-all">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Small Team Advantage</h3>
                                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                    No bureaucracy. No game of telephone. You speak directly to the people building your product.
                                </p>
                            </div>
                            <div className="p-6 md:p-8 bg-purple-50/60 border border-purple-100 rounded-3xl hover:shadow-md transition-all">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Systems Thinking</h3>
                                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                    We don't just design pages; we build scalable design systems that grow with your company.
                                </p>
                            </div>
                        </div>
                    </MotionWrapper>
                </section>

                {/* 7) DIFFERENCE (Table) */}
                <section className="px-4 md:px-6 max-w-5xl mx-auto pb-16 md:pb-24">
                    <MotionWrapper
                        className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm"
                    >
                        <div className="overflow-x-auto">
                            <div className="min-w-[600px]">
                                <div className="grid grid-cols-4 bg-gradient-to-br from-purple-50 to-pink-50 p-6 border-b border-slate-200 font-bold text-sm md:text-base text-slate-900">
                                    <div className="col-span-1"></div>
                                    <div className="text-center opacity-60">Freelancers</div>
                                    <div className="text-center opacity-60">Agencies</div>
                                    <div className="text-center text-brand-purple">LastPiece</div>
                                </div>
                                {[
                                    { label: "Strategic Thinking", freelance: false, agency: true, lp: true, bg: "bg-blue-50/30" },
                                    { label: "Direct Communication", freelance: true, agency: false, lp: true, bg: "bg-green-50/30" },
                                    { label: "Cost Efficiency", freelance: true, agency: false, lp: true, bg: "bg-amber-50/30" },
                                    { label: "High-End Craft", freelance: false, agency: true, lp: true, bg: "bg-rose-50/30" },
                                ].map((row, i) => (
                                    <div key={i} className={`grid grid-cols-4 p-6 border-b border-slate-100 last:border-0 items-center ${row.bg}`}>
                                        <div className="font-medium text-slate-900 text-sm md:text-base">{row.label}</div>
                                        <div className="flex justify-center">
                                            {row.freelance ? (
                                                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                                    <Check className="text-emerald-600 w-5 h-5" />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                                                    <X className="text-slate-400 w-5 h-5" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex justify-center">
                                            {row.agency ? (
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <Check className="text-blue-600 w-5 h-5" />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                                                    <X className="text-slate-400 w-5 h-5" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="w-8 h-8 bg-brand-purple/10 rounded-full flex items-center justify-center">
                                                <Check className="text-brand-purple w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>
                </section>

                {/* 8) FINAL CTA */}
                <section className="px-6 max-w-3xl mx-auto pb-24 text-center">
                    <MotionWrapper>
                        <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
                            Let's build something <span className="text-brand-purple">meaningful.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                            Ready to find the missing piece for your digital presence?
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 text-lg md:text-xl rounded-full shadow-2xl shadow-brand-purple/30 hover:shadow-brand-purple/50 transform hover:-translate-y-1 transition-all">
                                Start your project <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </MotionWrapper>
                </section>
            </div>
        </>
    )
}
