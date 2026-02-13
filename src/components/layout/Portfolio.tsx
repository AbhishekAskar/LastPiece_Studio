import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

const projects = [
    {
        title: "Nexus SaaS",
        category: "Dashboard & UI System Concept",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCyjEy1m8ijpARwTCqNHF20d7oduU6_vDGl6JJ5qmwZRhRmOzHf1njfAuxULi0sHVtmJl2sc071iSS-Wybs7Kis5C-7UV6uflwruYCquyzyBCFDYhbUg031e1sHaBGd9N4MYG93RUcDzvovvBNZkOz7BbtiK448dFWLudXKduONzULoGwekF71QZVCatXhj2yaBGsos0levVdnaYR2VP3rtSk1qqjU_gofp4GTUTm_2K1DYfUnsn0Mmbp-PwlWUa2fvYUtTfYuG88",
    },
    {
        title: "Venture Flow",
        category: "Startup Landing Page Design",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2n1IYlYuvKGxBkXdbv2f4jIYzy0Cy372umij3OZcdmoTiQrpImVHqPh3Ku1QZaGZ7LI9MHPziiAk0tbidFUYIp3DLx_J-EN-YNE1UVSaproRO8muC-M0sRtZfbFgN6umBmCDoeWScmOH2DBoS6uNKQljWRxn8E9XP5qxX3ym1MDuj0CfoALz6eNKMFo19k6-kUs-94LkJlZ7LBmMohN1gED17pMDsnLX3ZZGZjFArVVCV0VKAmcQdQK65Ur5KFvUfoyIlt0aHKkY",
    },
    {
        title: "Aura Lifestyle",
        category: "Brand Identity & Digital Shop",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA719QNw8Dv2glCA_G3doheDa1wArqmOyKQc-_yNFkLYDK6UcyE_sX0MDnFYliudwpN--6kMoB8TUKUW3NR-bUw9gHz1vj_5tDNO0ZzfF-7yGIk2jbvdK9sjkccuG2rvHOzyVMKoeU3iEXDfn3uzBBUx15UX6KTa9Ek6AdBypOalhYriNweGTabp85nRlbDoDQZwRLDNk5YNg3kNMvYjqE_Rn_-85nl9JOKYyo4qayIvw030lBG9e9C0s-5nN-Y4Af-do9VrxDNPAQ",
    },
]

export function Portfolio() {
    return (
        <section id="portfolio" className="py-16 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Selected Work
                        </h2>
                        <p className="text-slate-600">
                            Concepts and projects from the studio.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button variant="link" className="group text-lg">
                            See All Projects{" "}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 relative bg-slate-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    width="800"
                                    height="600"
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        // Fallback if image fails
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-300');
                                        e.currentTarget.parentElement!.innerHTML += '<span class="text-slate-500 font-bold">Image Unavailable</span>';
                                    }}
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        View Concept
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-1">
                                {project.title}
                            </h3>
                            <p className="text-slate-500 text-sm">{project.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
