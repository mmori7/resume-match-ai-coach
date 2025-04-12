
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KeywordMatch from './KeywordMatch';
import FeedbackSection, { Suggestion } from './FeedbackSection';
import ResumeScore from './ResumeScore';

export interface AnalysisResultData {
  score: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  suggestions: Suggestion[];
}

interface AnalysisResultsProps {
  results: AnalysisResultData | null;
  loading: boolean;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results, loading }) => {
  const emptyResults: AnalysisResultData = {
    score: 0,
    matchedKeywords: [],
    missingKeywords: [],
    suggestions: []
  };

  const data = results || emptyResults;

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col items-center justify-center py-4">
        <ResumeScore score={data.score} loading={loading} />
        <p className="text-sm text-gray-500 mt-4 max-w-md text-center">
          {loading ? 'Analyzing your resume...' : 
            'This score represents how well your resume matches the job description. Higher is better!'}
        </p>
      </div>

      <Tabs defaultValue="keywords" className="w-full">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="keywords">Keywords Match</TabsTrigger>
          <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
        </TabsList>
        <TabsContent value="keywords" className="mt-4">
          <KeywordMatch 
            matchedKeywords={data.matchedKeywords}
            missingKeywords={data.missingKeywords}
          />
        </TabsContent>
        <TabsContent value="suggestions" className="mt-4">
          <FeedbackSection suggestions={data.suggestions} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalysisResults;
