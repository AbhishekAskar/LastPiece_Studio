import { motion } from "framer-motion"

export function Philosophy() {
    return (
        <section className="py-16 md:py-24 px-6 bg-slate-900 relative overflow-hidden">
            {/* Gradient blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        Your website should be your best salesperson.
                    </h2>
                    <div className="h-1 w-20 bg-white/30 rounded-full mb-10 mx-auto"></div>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-6 font-light">
                        Strategy first. Design second. Code that scales.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        We don't just make things look good. We build digital products that communicate your value, build trust, and convert visitors into customers.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
