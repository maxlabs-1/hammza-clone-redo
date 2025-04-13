
import React from "react";
import { ArrowUp, Linkedin, Github, FileText, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-secondary to-secondary/80 py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Let's work together</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm currently available for new opportunities in DevOps and cloud infrastructure roles.
              If you're looking for someone to help optimize your development processes, 
              scale your infrastructure, or implement modern CI/CD practices, let's connect.
            </p>
            
            <a 
              href="mailto:alex.johnson@example.com" 
              className="text-lg font-medium inline-flex items-center hover:text-primary transition-colors hover-lift"
            >
              alex.johnson@example.com
            </a>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://linkedin.com/in/alexjohnsondevops" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2 hover-lift"
                >
                  <Linkedin size={18} className="text-blue-600" /> LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/alexjohnson-devops" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2 hover-lift"
                >
                  <Github size={18} className="text-gray-800" /> GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://dev.to/alexjohnson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2 hover-lift"
                >
                  <FileText size={18} className="text-gray-700" /> Dev.to
                </a>
              </li>
              <li>
                <a 
                  href="https://medium.com/@alexjohnson-devops" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2 hover-lift"
                >
                  <MessageCircle size={18} className="text-green-600" /> Medium
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/alexj_devops" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2 hover-lift"
                >
                  <Twitter size={18} className="text-blue-400" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm mt-4 sm:mt-0 hover:text-primary transition-colors bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/50"
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
