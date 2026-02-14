import { type ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode
    className?: string
    delay?: number
    layout?: boolean
    variants?: any // Keep primarily to avoid breaking TS if passed, but ignored
    initial?: string
    whileInView?: string
    viewport?: any
    whileHover?: string
    animate?: any
    exit?: any
    transition?: any
    viewportAmount?: number
}

export function MotionWrapper({ children, className = "" }: MotionWrapperProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
