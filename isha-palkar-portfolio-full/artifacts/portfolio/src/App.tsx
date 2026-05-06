import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import SkillsPage from "@/pages/SkillsPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import Footer from "@/sections/Footer";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/projects/:id" component={ProjectDetailPage} />
      <Route path="/skills" component={SkillsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="relative min-h-screen selection:bg-primary/20">
            {/* Paper grain overlay */}
            <div className="paper-grain" />
            <CustomCursor />
            <Navbar />
            <Router />
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
