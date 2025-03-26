
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LanguageIndex from "./pages/LanguageIndex";
import LanguageRedirect from "./components/LanguageRedirect";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <LanguageRedirect />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:language" element={<LanguageIndex />} />
            <Route path="/:language/pricing" element={<LanguageIndex />} />
            <Route path="/:language/research" element={<LanguageIndex />} />
            <Route path="/:language/about" element={<LanguageIndex />} />
            <Route path="/:language/contact" element={<LanguageIndex />} />
            <Route path="/:language/team" element={<LanguageIndex />} />
            <Route path="/:language/appointment" element={<LanguageIndex />} />
            <Route path="/pricing" element={<Index />} />
            <Route path="/research" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            <Route path="/team" element={<Index />} />
            <Route path="/appointment" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
