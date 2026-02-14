import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Puzzle, Menu, X } from "lucide-react"
import { m, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { VARIANTS_BUTTON } from "@/lib/animations"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Services", to: "/services" },
        { name: "Approach", to: "/approach" },
        { name: "Work", to: "/work" },
        { name: "Studio", to: "/studio" },
    ]

    const isActive = (path: string) => {
        if (path === "/work") {
            return location.pathname === path || location.pathname.startsWith("/work/")
        }
        return location.pathname === path
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300",
                    scrolled ? "pt-2 md:pt-4" : "pt-4 md:pt-6"
                )}
            >
                <div
                    className={cn(
                        "w-full max-w-7xl flex items-center justify-between px-4 md:px-8 transition-all duration-300 transform-gpu",
                        "bg-white/90 backdrop-blur-sm border border-white/20 ring-1 ring-black/5 shadow-sm rounded-full",
                        scrolled ? "h-14 md:h-16" : "h-16 md:h-[72px]"
                    )}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 md:gap-3 group"
                        onClick={scrollToTop}
                    >
                        <m.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-purple text-white rounded-xl flex items-center justify-center w-8 h-8 md:w-10 md:h-10 shadow-lg shadow-brand-purple/20 transition-transform duration-300"
                        >
                            <Puzzle strokeWidth={2.5} size={20} className="text-white -rotate-12 md:w-6 md:h-6" />
                        </m.div>
                        <div className="flex flex-col">
                            <h1 className="text-base md:text-lg font-black tracking-tight text-slate-900 leading-none group-hover:text-brand-purple transition-colors">
                                LastPiece <span className="text-brand-purple">Studio</span>
                            </h1>
                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 mt-0.5 hidden sm:block">
                                Your Missing Piece Online
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                className={cn(
                                    "text-sm font-semibold transition-all duration-200",
                                    isActive(link.to)
                                        ? "text-brand-purple underline decoration-2 underline-offset-4"
                                        : "text-slate-600 hover:text-brand-purple"
                                )}
                            >
                                <m.span whileHover={{ y: -1 }} className="block">
                                    {link.name}
                                </m.span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <Link to="/contact" className="hidden sm:block">
                            <m.div variants={VARIANTS_BUTTON} initial="initial" whileHover="hover" whileTap="tap">
                                <Button size="sm" className="h-9 md:h-10 px-4 md:px-6 rounded-full text-xs md:text-sm font-semibold pointer-events-none">
                                    Start a Project
                                </Button>
                            </m.div>
                        </Link>
                        <button
                            className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <m.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden flex flex-col"
                    >
                        <nav className="flex flex-col gap-6 items-center flex-1 justify-center -mt-20">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    className={cn(
                                        "text-3xl font-bold transition-all duration-200",
                                        isActive(link.to)
                                            ? "text-brand-purple"
                                            : "text-slate-900"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-8 w-full max-w-xs">
                                <Button size="lg" className="w-full h-12 text-base rounded-full shadow-xl shadow-brand-purple/20">
                                    Start a Project
                                </Button>
                            </Link>
                        </nav>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    )
}
