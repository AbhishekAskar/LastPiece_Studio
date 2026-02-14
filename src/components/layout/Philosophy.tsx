import { m, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Philosophy() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const yBg = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section ref={containerRef} className="py-32 bg-slate-900 relative overflow-hidden">
            {/* Background Parallax */}
            <m.div
                style={{ y: yBg }}
                className="absolute inset-0 opacity-20"
            >
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-purple rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]"></div>
            </m.div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-6 block">Our Philosophy</span>
                </m.div>

                <m.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-bold mb-8 leading-tight text-2xl md:text-3xl lg:text-4xl"
                >
                    <span className="text-white">"Great design is</span> <span className="text-slate-500">invisible.</span><br />
                    <span className="text-white">It doesn't just look good,</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-blue-400">it feels inevitable."</span>
                </m.h2>

                <m.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-center mb-8"
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-blue-500 rounded-full"></div>
                </m.div>

                <m.blockquote
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl font-light italic text-slate-300 mb-8"
                >
                    We believe in subtracting the unnecessary until only the essential remains.
                </m.blockquote>

                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    In a world of digital noise, clarity is the ultimate differentiator. We build products that respect your users' time and intelligence.
                </m.p>
            </div>
            <m.div style={{ y: yBg }} className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        </section>
    )
}
