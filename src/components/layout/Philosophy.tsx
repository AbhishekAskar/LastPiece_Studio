

export function Philosophy() {

    return (
        <section className="py-32 bg-slate-900 relative overflow-hidden">
            {/* Background Parallax - Static for performance */}
            <div
                className="absolute inset-0 opacity-20"
            >
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-purple rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div
                    className="animate-fade-in"
                >
                    <span className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-6 block">Our Philosophy</span>
                </div>

                <h2
                    className="font-bold mb-8 leading-tight text-2xl md:text-3xl lg:text-4xl animate-fade-in-up"
                    style={{ animationDelay: '0.1s' }}
                >
                    <span className="text-white">"Great design is</span> <span className="text-slate-500">invisible.</span><br />
                    <span className="text-white">It doesn't just look good,</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-blue-400">it feels inevitable."</span>
                </h2>

                <div
                    className="flex justify-center mb-8 animate-fade-in"
                    style={{ animationDelay: '0.3s' }}
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-blue-500 rounded-full"></div>
                </div>

                <blockquote
                    className="text-xl md:text-2xl font-light italic text-slate-300 mb-8 animate-fade-in"
                    style={{ animationDelay: '0.4s' }}
                >
                    We believe in subtracting the unnecessary until only the essential remains.
                </blockquote>

                <p
                    className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in"
                    style={{ animationDelay: '0.5s' }}
                >
                    In a world of digital noise, clarity is the ultimate differentiator. We build products that respect your users' time and intelligence.
                </p>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        </section>
    )
}
