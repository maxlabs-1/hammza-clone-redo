
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-secondary py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm currently available for new opportunities in DevOps and cloud infrastructure roles.
              If you're looking for someone to help optimize your development processes, 
              scale your infrastructure, or implement modern CI/CD practices, let's connect.
            </p>
            
            <a 
              href="mailto:alex.johnson@example.com" 
              className="text-lg font-medium inline-flex items-center hover:text-primary transition-colors"
            >
              alex.johnson@example.com
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://linkedin.com/in/alexjohnsondevops" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/alexjohnson-devops" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://dev.to/alexjohnson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Dev.to
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/alexj_devops" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm mt-4 sm:mt-0 hover:text-primary transition-colors"
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
