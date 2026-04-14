import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SupportProvider } from "@/context/SupportContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import AshramHighlights from "./pages/AshramHighlights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurGurus from "./pages/Gurus";
import Jeevni from "./pages/Jeevni";
import GoalSelection from "./pages/GoalSelection";
import Roadmap from "./pages/Roadmap";
import WellnessStore from "./pages/WellnessStore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SupportProvider>
        <BrowserRouter basename="/Yog-Sadhna-Kendra/">
          <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/ashram-highlights" element={<AshramHighlights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wellness-store" element={<WellnessStore />} />
            <Route path="/Gurus" element={<OurGurus />} />
            <Route path="/our-gurus/:id" element={<Jeevni />} />
            <Route path="/GoalSelection" element={<GoalSelection />} />
            <Route path="/roadmap" element={<Roadmap />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SupportProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
