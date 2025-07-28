import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import RomanticLoadingScreen from "@/components/romantic-loading-screen";
import RomanticMusicPlayer from "@/components/romantic-music-player";
import AdvancedParticleSystem from "@/components/advanced-particle-system";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading ? (
          <RomanticLoadingScreen onComplete={handleLoadingComplete} />
        ) : (
          <>
            <AdvancedParticleSystem />
            <Toaster />
            <Router />
            <RomanticMusicPlayer />
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
