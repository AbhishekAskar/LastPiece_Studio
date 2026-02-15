
import { ArrowRight } from "lucide-react"

export function Portfolio() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">

                    <div
                        className="animate-fade-in"
                    >
                        <div className="inline-block px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-purple uppercase tracking-widest mb-6">
                            Selected Work
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            Recent projects<br />
                            <span className="text-slate-400">worth seeing.</span>
                        </h2>
                    </div>

                    <div
                        className="animate-fade-in"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <a href="/work" className="group flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <span>View All Work</span>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple transition-all duration-300">
                                <ArrowRight size={18} />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="h-[400px] bg-white rounded-[2rem] overflow-hidden relative shadow-sm border border-slate-100 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-emerald-400 to-teal-600' : index === 1 ? 'from-indigo-400 to-purple-600' : 'from-orange-400 to-pink-600'} opacity-10 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="px-3 py-1 bg-white/50 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wide">
                                            {index === 0 ? 'Fintech' : index === 1 ? 'SaaS' : 'E-commerce'}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-white transition-colors">
                                            {index === 0 ? 'VentureFlow' : index === 1 ? 'Nexus Analytics' : 'Aura Lifestyle'}
                                        </h3>
                                        <p className="text-lg text-slate-600 group-hover:text-white/90 transition-colors">
                                            {index === 0 ? 'Banking Reimagined' : index === 1 ? 'Data Visualization' : 'Fashion Platform'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
