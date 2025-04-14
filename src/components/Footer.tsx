
import React from "react";
import { ArrowUp, Linkedin, Github, FileText, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-background/80 to-background py-24">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 mb-16">
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Connect</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://linkedin.com/in/mujtabaahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-card hover:bg-accent/20 transition-all hover:-translate-y-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              >
                <Linkedin size={20} className="text-blue-400" /> LinkedIn
              </a>
              <a 
                href="https://github.com/mujtabaahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-card hover:bg-accent/20 transition-all hover:-translate-y-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              >
                <Github size={20} className="text-gray-400" /> GitHub
              </a>
              <a 
                href="https://dev.to/mujtabaahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-card hover:bg-accent/20 transition-all hover:-translate-y-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              >
                <FileText size={20} className="text-purple-400" /> Dev.to
              </a>
              <a 
                href="https://medium.com/@mujtabaahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-card hover:bg-accent/20 transition-all hover:-translate-y-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              >
                <MessageCircle size={20} className="text-green-400" /> Medium
              </a>
              <a 
                href="https://twitter.com/mujtaba_ahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-card hover:bg-accent/20 transition-all hover:-translate-y-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              >
                <Twitter size={20} className="text-blue-400" /> Twitter
              </a>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Let's work together</h3>
              <p className="text-lg text-muted-foreground mb-6">
                I'm currently available for new opportunities in DevOps and cloud infrastructure roles.
                If you're looking for someone to help optimize your development processes, 
                scale your infrastructure, or implement modern CI/CD practices, let's connect.
              </p>
              
              <a 
                href="mailto:mjkhattak@hotmail.com" 
                className="text-lg font-medium inline-flex items-center hover:text-primary transition-colors hover-lift glass-card px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full"
              >
                mjkhattak@hotmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mujtaba Ahmad. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm mt-4 sm:mt-0 hover:text-primary transition-colors glass-card px-4 py-2 rounded-full hover:bg-accent/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            aria-label="Scroll to top"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
