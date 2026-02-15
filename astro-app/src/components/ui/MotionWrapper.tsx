import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    initial?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
}

export function MotionWrapper({
    children,
    className,
    delay = 0,
    initial = { opacity: 0, y: 20 },
    whileInView = { opacity: 1, y: 0 },
    viewport = { once: true, margin: "-100px" },
    transition = { duration: 0.5, delay, ease: "easeOut" }
}: MotionWrapperProps) {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
