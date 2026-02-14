import { Puzzle, Twitter, Linkedin, Dribbble, Instagram } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/Button"
import { m } from "framer-motion"
import { VARIANTS_BUTTON } from "@/lib/animations"

export function Footer() {
    const links = {
        services: [
            { label: "Launch Package", href: "/services" },
            { label: "Redesign Sprint", href: "/services" },
            { label: "Product Design", href: "/services" },
            { label: "Growth & CRO", href: "/services" }
        ],
        company: [
            { label: "Approach", href: "/approach" },
            { label: "Work", href: "/work" },
            { label: "Studio", href: "/studio" },
            { label: "Contact", href: "/contact" }
        ],
        socials: [
            { label: "Twitter / X", href: "#", icon: Twitter },
            { label: "LinkedIn", href: "#", icon: Linkedin },
            { label: "Dribbble", href: "#", icon: Dribbble },
            { label: "Instagram", href: "#", icon: Instagram }
        ]
    }

    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <div className="bg-brand-purple text-white p-2 rounded-xl flex items-center justify-center shadow-lg shadow-brand-purple/20 group-hover:scale-105 transition-transform">
                                <Puzzle size={24} fill="currentColor" className="-rotate-12" />
                            </div>
                            <h2 className="text-white text-xl font-black tracking-tight">
                                LastPiece <span className="text-brand-purple">Studio</span>
                            </h2>
                        </Link>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-8">
                            Your missing piece online. We build high-converting websites and digital products for ambitious brands.
                        </p>
                        <div className="flex gap-4">
                            {links.socials.map((social, i) => (
                                <m.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -4, backgroundColor: "#8B5CF6", color: "#fff" }}
                                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </m.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2 sm:col-span-6">
                        <h3 className="text-white font-bold mb-6">Services</h3>
                        <ul className="space-y-4">
                            {links.services.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.href} className="text-slate-400 hover:text-brand-purple transition-colors flex items-center gap-1 group">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ... (rest of the footer links) */}
                    <div className="lg:col-span-2 sm:col-span-6">
                        <h3 className="text-white font-bold mb-6">Company</h3>
                        <ul className="space-y-4">
                            {links.company.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.href} className="text-slate-400 hover:text-brand-purple transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold mb-6">Ready to start?</h3>
                        <p className="text-slate-400 text-sm mb-6">
                            Let&apos;s build your first meaningful digital experience.
                        </p>
                        <Link to="/contact">
                            <m.div variants={VARIANTS_BUTTON} initial="initial" whileHover="hover" whileTap="tap">
                                <Button className="w-full bg-white text-slate-900 hover:bg-brand-purple hover:text-white border-0 pointer-events-none">
                                    Book Strategy Call
                                </Button>
                            </m.div>
                        </Link>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} LastPiece Studio. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
