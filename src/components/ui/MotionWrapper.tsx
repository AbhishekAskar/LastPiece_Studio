import { m, type HTMLMotionProps } from "framer-motion";
import { VARIANTS_SECTION } from "@/lib/animations";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a standard cn utility

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    className?: string;
    viewportAmount?: number; // 0 to 1, how much of the element is visible before triggering
}

export function MotionWrapper({
    children,
    delay = 0,
    className,
    viewportAmount = 0.2, // Default: trigger when 20% visible
    ...props
}: MotionWrapperProps) {
    return (
        <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount, margin: "-50px" }} // Trigger once, with margin for smoother reveal
            variants={VARIANTS_SECTION}
            transition={{ delay }} // Apply delay to the transition
            className={cn("will-change-transform", className)} // Optimize for GPU
            {...props}
        >
            {children}
        </m.div>
    );
}
