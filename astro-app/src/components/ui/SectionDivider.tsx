import { cn } from "@/lib/utils"

interface SectionDividerProps {
    className?: string
    variant?: "fade" | "line"
}

export function SectionDivider({ className, variant = "fade" }: SectionDividerProps) {
    if (variant === "line") {
        return (
            <div className={cn("w-full h-px bg-slate-200", className)} />
        )
    }

    return (
        <div
            className={cn(
                "w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none",
                className
            )}
        />
    )
}
