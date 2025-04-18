
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Bot, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FileUpload from '@/components/FileUpload';
import JobDescriptionInput from '@/components/JobDescriptionInput';
import AnalysisResults, { AnalysisResultData } from '@/components/AnalysisResults';
import { analyzeResume } from '@/services/aiService';

const Index: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResultData | null>(null);
  const { toast } = useToast();

  const handleFileUploaded = (file: File) => {
    setResume(file);
    // Reset analysis results when new file is uploaded
    setAnalysisResults(null);
  };

  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
    // Reset analysis results when job description changes
    setAnalysisResults(null);
  };

  const handleAnalyze = async () => {
    if (!resume) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume first.",
        variant: "destructive",
      });
      return;
    }

    if (!jobDescription.trim()) {
      toast({
        title: "Job Description Required",
        description: "Please paste the job description to compare with your resume.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const results = await analyzeResume(resume, jobDescription);
      setAnalysisResults(results);
      
      toast({
        title: "Analysis Complete",
        description: "Your resume has been analyzed successfully!",
      });
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: "There was a problem analyzing your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />




      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <section className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Optimize Your Resume with AI</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload your resume and get AI-powered feedback based on job descriptions. Improve your chances of landing your dream job.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="p-6 h-full">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-teal" />
                  Resume & Job Description
                </h2>
                
                <div className="space-y-6">
                  <FileUpload onFileUploaded={handleFileUploaded} />
                  
                  <JobDescriptionInput
                    value={jobDescription}
                    onChange={handleJobDescriptionChange}
                    disabled={isAnalyzing}
                  />

                  <Button 
                    onClick={handleAnalyze} 
                    className="w-full bg-teal hover:bg-teal-dark"
                    disabled={isAnalyzing || !resume || !jobDescription.trim()}
                  >
                    {isAnalyzing ? 
                      "Analyzing..." : 
                      "Analyze My Resume"
                    }
                  </Button>
                </div>
              </Card>
            </div>
