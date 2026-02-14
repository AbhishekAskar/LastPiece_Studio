
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

interface ProjectCardProps {
    title: string
    category: string
    summary: string
    gradientFrom: string
    gradientTo: string
    link: string
}

export function ProjectCard({ title, category, summary, gradientFrom, gradientTo, link }: ProjectCardProps) {
    return (
        <Link to={link}>
            <div
                className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Project Image */}
                    <div
                        className={`h-72 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/20 text-4xl font-black">{title}</span>
                        </div>
                        <div className="absolute top-4 right-4">
                            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                                <ArrowRight className="text-white" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8">
                        <div className="inline-block px-4 py-1.5 bg-slate-50 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wide mb-4">
                            {category}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-purple transition-colors">
                            {title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            {summary}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

interface BackButtonProps {
    to?: string
}

export function BackButton({ to = "/work" }: BackButtonProps) {
    return (
        <Link to={to}>
            <button
                className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-purple font-medium transition-colors mb-8 animate-fade-in"
            >
                <ArrowLeft size={20} />
                Back to Work
            </button>
        </Link>
    )
}
