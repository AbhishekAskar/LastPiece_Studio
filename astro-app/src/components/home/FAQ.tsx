import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "How long does a typical project take?",
            answer: "It depends on the scope, but our typical 'Launch Package' takes 4-6 weeks from kick-off to launch. We work in sprints to ensure consistent progress."
        },
        {
            question: "Do you build the sites or just design them?",
            answer: "We do both. We are experts in Next.js, React, and Tailwind CSS. We believe design and development should happen under one roof for the best quality."
        },
        {
            question: "What is your pricing model?",
            answer: "We work on a fixed-price project basis. No hidden hourly billing. You'll know exactly what the investment is before we start."
        },
        {
            question: "Do you offer post-launch support?",
            answer: "Yes, we offer monthly growth retainers to help you iterate, test, and improve your site after launch."
        }
    ]

    return (
        <section className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Common Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const colors = [
                            "bg-purple-50 border-purple-200",
                            "bg-blue-50 border-blue-200",
                            "bg-emerald-50 border-emerald-200",
                            "bg-rose-50 border-rose-200"
                        ]
                        const activeColors = [
                            "text-purple-600",
                            "text-blue-600",
                            "text-emerald-600",
                            "text-rose-600"
                        ]
                        const colorClass = colors[index % colors.length]
                        const activeColor = activeColors[index % activeColors.length]
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={index}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? colorClass : 'border-slate-200 hover:border-slate-300 bg-white'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-transparent"
                                >
                                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-900'}`}>{faq.question}</span>
                                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 ' + activeColor : 'text-slate-400'}`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
