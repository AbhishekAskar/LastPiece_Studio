import { motion } from "framer-motion"
import { ArrowRight, Users, Eye, Zap, Layout } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"

export function Approach() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex items-start justify-center overflow-hidden gradient-mesh px-6 pt-36 pb-12 md:pt-48 md:pb-20 min-h-[70vh]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl text-center mx-auto relative z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                        Every great website starts with <span className="text-brand-purple">understanding.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-4xl mx-auto">
                        We work closely with founders, teams, and creators to shape digital experiences{" "}
                        <br className="hidden md:block" />
                        that feel natural, meaningful, and aligned with their goals.
                    </p>
                </motion.div>

                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pastel-blue/40 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-60" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pastel-purple/40 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-60" />
            </section>

            <div className="pb-16">
                {/* How we think */}
                <section className="px-6 max-w-7xl mx-auto py-16 bg-brand-purple/5 rounded-[3rem] my-10 relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="px-6 md:px-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                We design with people, not just screens, in mind.
                            </h2>
                            <div className="w-16 h-1 bg-brand-purple rounded-full mb-8"></div>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                Before visuals, we focus on clarity — what you're building, who it's for, and how it should feel.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                Design decisions come from understanding, not trends.
                            </p>
                        </motion.div>
                        <div className="flex justify-center">
                            <div className="bg-white p-8 rounded-full shadow-[0_0_80px_rgba(139,44,245,0.15)] aspect-square flex items-center justify-center w-64 md:w-80 relative">
                                {/* Decorative circles */}
                                <div className="absolute inset-0 border border-brand-purple/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-4 border border-brand-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                                <Users size={64} className="text-brand-purple" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Collaboration */}
                <section className="px-6 max-w-7xl mx-auto py-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Small Team Advantage</h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Agencies charge you for overhead. We charge for impact. You work directly with the creators, not account managers.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-6 py-3 bg-slate-50 rounded-full text-slate-700 font-medium border border-slate-100">Faster loops</span>
                                <span className="px-6 py-3 bg-slate-50 rounded-full text-slate-700 font-medium border border-slate-100">Higher quality</span>
                                <span className="px-6 py-3 bg-brand-purple/10 text-brand-purple rounded-full font-bold border border-brand-purple/20">Direct access</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Common Questions / Objection Handling */}
                <section className="px-6 max-w-7xl mx-auto py-20 bg-brand-purple/5 rounded-[3rem] my-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">How we handle the details</h2>
                            <div className="h-1 w-20 bg-brand-purple/50 rounded-full mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Timeline Control", desc: "We set clear milestones and ship weekly updates so you never have to guess where we are." },
                                { title: "Communication", desc: "No jargon. We speak your language and use simple tools (Slack, Notion) to keep syncs efficient." },
                                { title: "Post-Launch", desc: "We don't disappear. We offer training sessions and retainer options to keep your site growing." },
                                { title: "Pricing", desc: "Project-based or retainer. No hidden hourly billing surprises. You know exactly what you get." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                                >
                                    <h3 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How we work with you */}
                <section className="px-6 max-w-7xl mx-auto py-12 my-6 border-t border-slate-100">
                    <div className="max-w-3xl mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">How we work with you</h2>
                            <p className="text-xl text-slate-600 font-medium">Clear communication, structured process, and focused execution.</p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {[
                            {
                                icon: Users,
                                title: "Collaborative from day one",
                                desc: "We involve clients early in decisions so direction stays aligned.",
                                color: "bg-purple-50 border-purple-100 text-purple-600"
                            },
                            {
                                icon: Eye, // Using Eye/Target for Clarity
                                title: "Clarity before design",
                                desc: "We define goals, structure, and messaging before visuals.",
                                color: "bg-blue-50 border-blue-100 text-blue-600"
                            },
                            {
                                icon: Zap,
                                title: "Fast, focused execution",
                                desc: "Intentional iterations instead of endless back-and-forth.",
                                color: "bg-amber-50 border-amber-100 text-amber-600"
                            },
                            {
                                icon: Layout, // Using Layout for "Built for use"
                                title: "Built for real use",
                                desc: "Everything is designed to ship, scale, and perform.",
                                color: "bg-emerald-50 border-emerald-100 text-emerald-600"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`p-6 rounded-2xl border ${item.color.split(' ')[1]} ${item.color.split(' ')[0]} transition-all duration-300 hover:shadow-md h-full`}
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    <div className={`w-10 h-10 rounded-lg bg-white shrink-0 flex items-center justify-center shadow-sm border border-black/5 ${item.color.split(' ')[2]}`}>
                                        <item.icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-900 pt-1.5">{item.title}</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-base pl-14">{item.desc}</p>
                            </motion.div>
                        ))}
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
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Have something in mind?</h2>
                        <p className="text-xl text-slate-500 mb-10">Let’s talk about what you're building.</p>
                        <Link to="/contact">
                            <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/40">
                                Start your project <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </section>
            </div>
        </>
    )
}
