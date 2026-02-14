import React, { Suspense, lazy } from "react"
// import Lenis from "lenis"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

// Lazy load pages for performance
const Home = lazy(() => import("@/pages/Home").then(module => ({ default: module.Home })));
const Approach = lazy(() => import("@/pages/Approach").then(module => ({ default: module.Approach })));
const Services = lazy(() => import("@/pages/Services").then(module => ({ default: module.Services })));
const Work = lazy(() => import("@/pages/Work").then(module => ({ default: module.Work })));
const Studio = lazy(() => import("@/pages/Studio").then(module => ({ default: module.Studio })));
const Contact = lazy(() => import("@/components/layout/Contact").then(module => ({ default: module.Contact })));

// Lazy load case studies
const NexusSaaS = lazy(() => import("@/pages/case-studies/NexusSaaS").then(module => ({ default: module.NexusSaaS })));
const VentureFlow = lazy(() => import("@/pages/case-studies/VentureFlow").then(module => ({ default: module.VentureFlow })));
const AuraLifestyle = lazy(() => import("@/pages/case-studies/AuraLifestyle").then(module => ({ default: module.AuraLifestyle })));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Loading component
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-background">
    <div className="animate-pulse space-y-4 text-center">
      <div className="h-12 w-12 border-4 border-brand-purple border-t-transparent rounded-full animate-spin mx-auto"></div>
    </div>
  </div>
);

function App() {
  // Removed Lenis for native scrolling support

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand-purple/20 selection:text-brand-purple">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/nexus-saas" element={<NexusSaaS />} />
            <Route path="/work/venture-flow" element={<VentureFlow />} />
            <Route path="/work/aura-lifestyle" element={<AuraLifestyle />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
