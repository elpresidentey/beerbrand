import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Placeholder title="Shop" />} />
            <Route path="/journals" element={<Placeholder title="Journals" />} />
            <Route path="/illustrators" element={<Placeholder title="Illustrators" />} />
            <Route path="/about" element={<Placeholder title="About Us" />} />
            <Route path="/contact" element={<Placeholder title="Contact" />} />
            <Route path="/faq" element={<Placeholder title="FAQ" />} />
            <Route path="/delivery" element={<Placeholder title="Delivery" />} />
            <Route path="/trade" element={<Placeholder title="Trade" />} />
            <Route path="/stockists" element={<Placeholder title="Stockists" />} />
            <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
            <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
