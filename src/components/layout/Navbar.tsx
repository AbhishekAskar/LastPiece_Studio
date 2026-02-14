import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Puzzle, Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

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

    // Toggle scroll lock when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
            >
                <div
                    className="w-full max-w-7xl flex items-center justify-between px-4 md:px-8 border border-slate-100 shadow-sm rounded-full bg-white py-3 h-16 md:h-[72px]"
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 md:gap-3 group"
                        onClick={scrollToTop}
                    >
                        <div
                            className="bg-brand-purple text-white rounded-xl flex items-center justify-center w-8 h-8 md:w-10 md:h-10 shadow-lg shadow-brand-purple/20"
                        >
                            <Puzzle strokeWidth={2.5} size={20} className="text-white -rotate-12 md:w-6 md:h-6" />
                        </div>
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
                                    "text-sm font-semibold transition-colors duration-200 relative",
                                    isActive(link.to)
                                        ? "text-brand-purple"
                                        : "text-slate-600 hover:text-brand-purple"
                                )}
                            >
                                <span>
                                    {link.name}
                                </span>
                                {isActive(link.to) && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-purple rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <Link to="/contact" className="hidden sm:block">
                            <div className="transform transition-transform hover:scale-105 active:scale-95">
                                <Button size="sm" className="h-9 md:h-10 px-4 md:px-6 rounded-full text-xs md:text-sm font-semibold pointer-events-none">
                                    Start a Project
                                </Button>
                            </div>
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

            {/* Mobile Menu Overlay - CSS Transition */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden flex flex-col transition-all duration-300 ease-in-out",
                    mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
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
            </div>
        </>
    )
}
