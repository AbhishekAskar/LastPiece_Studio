import { m } from "framer-motion"
import { Send, Image as ImageIcon, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
        timeline: "Quick Turnaround (< 1 month)",
        budget: "₹30k - ₹50k"
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Basic validation
        if (!formData.name || !formData.email || !formData.description) {
            setSubmitStatus("error")
            setTimeout(() => setSubmitStatus("idle"), 4000)
            return
        }

        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // Access key from env
                    subject: "New Inquiry – LastPiece Studio",
                    from_name: formData.name,
                    email: formData.email,
                    phone: formData.phone || "Not provided",
                    timeline: formData.timeline,
                    budget: formData.budget,
                    message: formData.description,
                    to_email: "lastpiecestudio26@gmail.com"
                })
            })

            const result = await response.json()

            if (result.success) {
                setSubmitStatus("success")
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    description: "",
                    timeline: "Quick Turnaround (< 1 month)",
                    budget: "₹30k - ₹50k"
                })
                setTimeout(() => setSubmitStatus("idle"), 5000)
            } else {
                setSubmitStatus("error")
                setTimeout(() => setSubmitStatus("idle"), 4000)
            }
        } catch (error) {
            setSubmitStatus("error")
            setTimeout(() => setSubmitStatus("idle"), 4000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="section-padding px-4 md:px-6 bg-[#fff9f2] relative overflow-hidden">
            <div className="mx-auto max-w-xl relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12 relative"
                >
                    <span className="text-brand-purple text-xs font-black uppercase tracking-[0.3em] mb-3 block">
                        Inquiry
                    </span>
                    <h2 className="font-black text-slate-900 mb-4 text-2xl md:text-4xl max-w-lg mx-auto leading-tight">
                        Let&apos;s build your first meaningful digital experience.
                    </h2>

                    {/* Decorative rotated image placeholder */}
                    <div className="absolute -top-10 -right-20 opacity-10 hidden sm:block">
                        <ImageIcon className="w-24 h-24 transform rotate-12 text-slate-400 drop-shadow-2xl" />
                    </div>
                </m.div>

                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl border border-white/50 p-6 md:p-10 relative"
                >
                    <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Sarah Miller"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl h-12 md:h-14 px-4 text-base focus:ring-2 focus:ring-brand-purple/20 focus:bg-white focus:border-brand-purple/20 transition-all text-slate-900 placeholder-slate-300 outline-none shadow-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="sarah@company.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl h-12 md:h-14 px-4 text-base focus:ring-2 focus:ring-brand-purple/20 focus:bg-white focus:border-brand-purple/20 transition-all text-slate-900 placeholder-slate-300 outline-none shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+91 98765 43210"
                                pattern="[\d\s\+\-]+"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl h-12 md:h-14 px-4 text-base focus:ring-2 focus:ring-brand-purple/20 focus:bg-white focus:border-brand-purple/20 transition-all text-slate-900 placeholder-slate-300 outline-none shadow-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                Project Description
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your vision..."
                                required
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-base focus:ring-2 focus:ring-brand-purple/20 focus:bg-white focus:border-brand-purple/20 transition-all text-slate-900 placeholder-slate-300 outline-none resize-y min-h-[120px] shadow-sm"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                    Timeline
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.timeline}
                                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl h-12 md:h-14 px-4 text-base focus:ring-2 focus:ring-brand-purple/20 focus:bg-white focus:border-brand-purple/20 appearance-none text-slate-900 outline-none cursor-pointer shadow-sm pr-10"
                                    >
                                        <option>Quick Turnaround (&lt; 1 month)</option>
                                        <option>1-3 months</option>
                                        <option>3+ months</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                    Budget Range
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl h-12 md:h-14 px-4 text-base focus:ring-2 focus:ring-brand-purple/20 focus:bg-white focus:border-brand-purple/20 appearance-none text-slate-900 outline-none cursor-pointer shadow-sm pr-10"
                                    >
                                        <option>₹30k - ₹50k</option>
                                        <option>₹50k - ₹1 Lakh</option>
                                        <option>₹1 Lakh+</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Success Message */}
                        {submitStatus === "success" && (
                            <m.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3"
                            >
                                <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                                <p className="text-emerald-800 text-sm font-medium">
                                    Thank you! Your inquiry has been sent successfully. We'll get back to you soon.
                                </p>
                            </m.div>
                        )}

                        {/* Error Message */}
                        {submitStatus === "error" && (
                            <m.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3"
                            >
                                <AlertCircle className="text-red-600 shrink-0" size={20} />
                                <p className="text-red-800 text-sm font-medium">
                                    Oops! Something went wrong. Please check your information and try again.
                                </p>
                            </m.div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-brand-purple text-white h-14 md:h-16 rounded-xl font-bold text-lg shadow-xl shadow-brand-purple/25 hover:bg-brand-purple/90 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Inquiry <Send size={18} />
                                </>
                            )}
                        </button>
                        <p className="text-center text-slate-400 text-xs mt-6 font-medium">
                            Prefer direct email?{" "}
                            <a
                                href="mailto:lastpiecestudio26@gmail.com"
                                aria-label="Email LastPiece Studio"
                                className="text-brand-purple font-bold underline decoration-brand-purple/20 underline-offset-4 hover:decoration-brand-purple transition-all"
                            >
                                lastpiecestudio26@gmail.com
                            </a>
                        </p>
                    </form>
                </m.div>
            </div>
        </section>
    )
}
