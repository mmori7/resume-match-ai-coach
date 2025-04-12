
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon, LightbulbIcon, AlertTriangle, FileEdit } from 'lucide-react';

export interface Suggestion {
  category: string;
  icon: 'idea' | 'warning' | 'edit';
  title: string;
  description: string;
}

interface FeedbackSectionProps {
  suggestions: Suggestion[];
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ suggestions }) => {
  const iconMap: Record<string, LucideIcon> = {
    idea: LightbulbIcon,
    warning: AlertTriangle,
    edit: FileEdit
  };

  const iconColorClass: Record<string, string> = {
    idea: 'text-teal',
    warning: 'text-yellow-500',
    edit: 'text-blue-500'
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">AI Feedback & Suggestions</h2>
      <div className="space-y-3">
        {suggestions.map((suggestion, index) => {
          const Icon = iconMap[suggestion.icon];
          
          return (
            <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className={`${iconColorClass[suggestion.icon]} p-1 rounded-full bg-gray-100`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  {suggestion.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600">{suggestion.description}</p>
              </CardContent>
            </Card>
          );
        })}
        
        {suggestions.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            Analyze your resume to receive AI-powered suggestions.
          </p>
        )}
      </div>
    </div>
  );
};

export default FeedbackSection;
