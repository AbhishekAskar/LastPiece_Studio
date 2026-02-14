import { m } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function WhyUs() {
    const benefits = [
        "Proven track record with 50+ successful projects",
        "Data-driven design approach focused on conversion",
        "Full-stack development capabilities",
        "Transparent communication & agile process",
        "Post-launch support & optimization",
        "Scalable solutions built for growth"
    ]

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <m.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-purple uppercase tracking-widest mb-6">
                        Why Choose Us
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                        We don't just design.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-blue-600">
                            We solve business problems.
                        </span>
                    </h2>
                </m.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Most agencies focus on making things look pretty. We focus on making things work. By combining aesthetic excellence with strategic thinking, we build digital products that drive real business results.
                        </p>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <m.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 bg-white p-1 rounded-full shadow-sm border border-slate-100">
                                        <CheckCircle2 className="text-brand-purple" size={16} />
                                    </div>
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </m.li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-purple/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
                        <m.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden">
                                    <img
                                        src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                                        alt="Client"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Michael Roberts</h4>
                                    <p className="text-sm text-slate-500">CEO, TechFlow Inc.</p>
                                </div>
                            </div>
                            <p className="text-slate-600 italic mb-6 text-lg">
                                "LastPiece Studio completely transformed our online presence. Our conversion rates doubled within the first month of launching the new site. Truly exceptional work."
                            </p>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </m.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
