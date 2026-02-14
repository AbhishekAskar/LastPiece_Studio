import { m } from "framer-motion"
import { cn } from "@/lib/utils"

interface CaseStudySectionProps {
    title?: string
    children: React.ReactNode
    variant?: "white" | "slate" | "purple"
    className?: string
}

export function CaseStudySection({ title, children, variant = "white", className }: CaseStudySectionProps) {
    const backgrounds = {
        white: "bg-white",
        slate: "bg-slate-50",
        purple: "bg-brand-purple/5"
    }

    return (
        <section className={cn("px-6 max-w-7xl mx-auto py-16", backgrounds[variant], className)}>
            {title && (
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <div className="h-1 w-20 bg-brand-purple rounded-full"></div>
                </m.div>
            )}
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {children}
            </m.div>
        </section>
    )
}
