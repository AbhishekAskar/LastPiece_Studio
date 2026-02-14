import { m } from "framer-motion"

export function Philosophy() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    layout={false}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                        Design that <br /> <span className="text-brand-purple">means business.</span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        We don't just make things look good. We build digital products that communicate your value, build trust, and convert visitors into customers.
                    </p>
                </m.div>
            </div>
        </section>
    )
}
