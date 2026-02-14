import { type Variants, type Easing } from "framer-motion";

// --- Configuration ---

// Cinematic easing (smooth, premium feel)
export const EASE: Easing = [0.25, 0.1, 0.25, 1.0]; // cubic-bezier

// Standard durations - Faster for production smoothness
export const DURATION = {
    FAST: 0.2, // Was 0.3
    MEDIUM: 0.4, // Was 0.6
    SLOW: 0.6, // Was 0.9
    HERO: 0.8, // Was 1.2
};

// --- Variants ---

// Level 1: Hero (Cinematic entry)
export const VARIANTS_HERO: Variants = {
    hidden: { opacity: 0, y: 20 }, // Reduced distance
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.HERO,
            ease: EASE
        }
    },
};

// Level 1: Hero Container (Stagger children)
export const VARIANTS_HERO_CONTAINER: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // Reduced stagger
            delayChildren: 0.1,
        },
    },
};

// Level 2: Section (Reveal on scroll)
export const VARIANTS_SECTION: Variants = {
    hidden: { opacity: 0, y: 30 }, // Reduced distance
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.MEDIUM,
            ease: EASE
        }
    },
};

// Level 3: UI Interactions (Hover, Tap)
export const VARIANTS_BUTTON: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.02, // Reduced scale
        transition: { duration: DURATION.FAST, ease: EASE }
    },
    tap: {
        scale: 0.98,
        transition: { duration: 0.1, ease: EASE }
    },
};

// Level 3: Card (Entrance + Hover Lift)
export const VARIANTS_CARD: Variants = {
    hidden: { opacity: 0, y: 15 }, // Reduced distance
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.MEDIUM,
            ease: EASE
        }
    },
    hover: {
        y: -4, // Reduced lift
        scale: 1.01,
        transition: { duration: DURATION.FAST, ease: EASE }
    },
};

// Level 4: Page Transitions
export const VARIANTS_PAGE: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: DURATION.MEDIUM, ease: EASE }
    },
    exit: {
        opacity: 0,
        transition: { duration: DURATION.FAST, ease: EASE }
    },
};

// Utility for container staggers
export const VARIANTS_CONTAINER: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05, // Very fast stagger
        },
    },
};
