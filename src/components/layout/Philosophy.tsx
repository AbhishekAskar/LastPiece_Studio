import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Philosophy() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const yBg = useTransform(scrollYProgress, [0, 1], [0, -50])

    return (
        <section
            id="philosophy"
            ref={ref}
            className="py-16 px-6 bg-slate-900 text-white relative overflow-hidden"
        >
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-bold mb-8 leading-tight text-2xl md:text-3xl lg:text-4xl"
                >
                    &quot;Websites should feel like a natural extension of a brand.&quot;
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-center mb-8"
                >
                    <div className="h-px w-20 bg-primary/50"></div>
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl font-light italic text-slate-300 mb-8"
                >
                    &quot;Design follows meaning. Technology follows purpose.&quot;
                </motion.blockquote>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    We build digital experiences that communicate clearly, perform fast, and
                    feel intentional. No fluff, just effective design that works for your
                    goals.
                </motion.p>
            </div>

            {/* Decorative Blobs */}
            <motion.div style={{ y: yBg }} className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <motion.div style={{ y: yBg }} className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        </section>
    )
}
