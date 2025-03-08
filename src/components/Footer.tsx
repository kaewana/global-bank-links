
import { Heart, Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-semibold text-lg">GlobalBankLinks</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              A comprehensive directory of banking institutions worldwide, organized by region and searchable by name.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-500 hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#regions" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Regions
                </a>
              </li>
              <li>
                <a href="#search" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Find Banks
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Regions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#regions" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  North America
                </a>
              </li>
              <li>
                <a href="#regions" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Europe
                </a>
              </li>
              <li>
                <a href="#regions" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Asia Pacific
                </a>
              </li>
              <li>
                <a href="#regions" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Latin America
                </a>
              </li>
              <li>
                <a href="#regions" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Middle East & Africa
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-primary transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 mb-4 sm:mb-0">
              © {new Date().getFullYear()} GlobalBankLinks. All rights reserved.
            </p>
            <div className="flex items-center text-sm text-slate-500">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for everyone
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
