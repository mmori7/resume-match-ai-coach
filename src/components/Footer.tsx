
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ResumeMatch AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-navy-light hover:text-teal transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-navy-light hover:text-teal transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-navy-light hover:text-teal transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
