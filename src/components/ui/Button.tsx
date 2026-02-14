import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { m } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95",
                outline:
                    "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-300",
                ghost: "hover:bg-slate-100 hover:text-slate-900",
                link: "text-primary underline-offset-4 hover:underline",
                white: "bg-white text-slate-900 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
            },
            size: {
                default: "h-12 px-6 py-2 text-base font-semibold",
                sm: "h-9 rounded-md px-3 text-sm",
                lg: "h-14 rounded-full px-8 text-lg font-bold tracking-wide",
                icon: "h-10 w-10",
                xl: "h-16 rounded-full px-10 text-xl font-black tracking-wide", // New size for Hero
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // We use m.button for animations
        const Comp = m.button as any

        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden group")}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">{props.children}</span>
                {variant === 'default' && (
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                )}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
