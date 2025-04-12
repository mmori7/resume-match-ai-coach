
import { Suggestion } from "@/components/FeedbackSection";

// This is a mock service that simulates the Gemini API
// In a real implementation, this would make actual calls to the Gemini API

export interface AnalysisResponse {
  score: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  suggestions: Suggestion[];
}

function extractKeywords(text: string): string[] {
  // Simple keyword extraction logic
  // In a real implementation, this would be more sophisticated
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const commonWords = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'for', 'in', 'on', 'at', 'to', 'by', 
    'with', 'about', 'as', 'into', 'like', 'through', 'after', 'over', 'between',
    'out', 'of', 'during', 'without', 'before', 'under', 'within', 'along', 'following',
    'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did',
    'will', 'would', 'shall', 'should', 'may', 'might', 'must', 'can', 'could'
  ]);
  
  // Extract unique keywords with min length 4 and not in common words
  return Array.from(new Set(
    words.filter(word => 
      word.length >= 4 && !commonWords.has(word)
    )
  ));
}

function getIndustryKeywords(): string[] {
  // Mock list of common industry keywords
  return [
    'react', 'javascript', 'typescript', 'node.js', 'frontend', 'backend',
    'fullstack', 'algorithm', 'mongodb', 'nosql', 'database', 'cloud',
    'aws', 'azure', 'redux', 'hooks', 'responsive', 'docker', 'kubernetes',
    'agile', 'scrum', 'jira', 'git', 'github', 'ci/cd', 'testing', 'jest',
    'python', 'java', 'scala', 'golang', 'rust', 'c++', 'api', 'rest',
    'graphql', 'sql', 'postgresql', 'mysql', 'leadership', 'teamwork'
  ];
}

export async function analyzeResume(resumeFile: File, jobDescription: string): Promise<AnalysisResponse> {
  // In a real implementation, we would send the resume and job description to the Gemini API
  // For now, we'll simulate the analysis with a delay

  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      const jobKeywords = extractKeywords(jobDescription);
      const industryKeywords = getIndustryKeywords();
      
      // Mock matching logic (random for now)
      const matchedKeywords: string[] = [];
      const missingKeywords: string[] = [];
      
      // Add some job description keywords as matched
      jobKeywords.forEach(keyword => {
        if (Math.random() > 0.4) {
          matchedKeywords.push(keyword);
        } else {
          missingKeywords.push(keyword);
        }
      });
      
      // Add some industry keywords that might be missing
      industryKeywords.forEach(keyword => {
        if (!matchedKeywords.includes(keyword) && !missingKeywords.includes(keyword) && Math.random() > 0.8) {
          missingKeywords.push(keyword);
        }
      });
      
      // Calculate match score
      const score = Math.round((matchedKeywords.length / (matchedKeywords.length + missingKeywords.length)) * 100);
      
      // Generate suggestions based on score ranges
      const suggestions: Suggestion[] = [];
      
      if (score < 60) {
        suggestions.push({
          category: "formatting",
          icon: "warning",
          title: "Your resume needs significant improvement",
          description: "Your resume doesn't align well with the job requirements. Consider tailoring it specifically to this role by highlighting relevant experience and skills."
        });
      }
      
      if (missingKeywords.length > 5) {
        suggestions.push({
          category: "keywords",
          icon: "edit",
          title: "Add missing keywords",
          description: `Include some of these missing keywords in your resume: ${missingKeywords.slice(0, 5).join(', ')}...`
        });
      }
      
      suggestions.push({
        category: "structure",
        icon: "idea",
        title: "Optimize your resume structure",
        description: "Use bullet points to highlight accomplishments and quantify your achievements with metrics where possible."
      });
      
      suggestions.push({
        category: "skills",
        icon: "idea",
        title: "Highlight technical skills",
        description: "Create a dedicated skills section that clearly displays your technical abilities relevant to this position."
      });
      
      resolve({
        score,
        matchedKeywords,
        missingKeywords,
        suggestions
      });
    }, 2000);
  });
}
