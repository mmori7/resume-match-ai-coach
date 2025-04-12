
import React from 'react';
import { FileSearch } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileSearch className="h-8 w-8 text-teal" />
            <h1 className="text-2xl font-bold text-navy">ResumeMatch AI</h1>
          </div>
          <div className="text-sm font-medium text-navy-light">
            Optimize your resume with AI feedback
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
