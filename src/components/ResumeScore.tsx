
import React from 'react';

interface ResumeScoreProps {
  score: number;
  loading: boolean;
}

const ResumeScore: React.FC<ResumeScoreProps> = ({ score, loading }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-teal stroke-teal';
    if (score >= 60) return 'text-yellow-500 stroke-yellow-500';
    return 'text-red-500 stroke-red-500';
  };
  
  const scoreColorClass = getScoreColor(score);

  return (
    <div className="resume-score-ring">
      {loading ? (
        <div className="h-[180px] w-[180px] flex items-center justify-center">
          <div className="h-10 w-10 border-4 border-t-teal rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <svg width="180" height="180" viewBox="0 0 180 180">
            <circle
              cx="90"
              cy="90"
              r={radius}
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="90"
              cy="90"
              r={radius}
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className={scoreColorClass}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className={`text-4xl font-bold ${scoreColorClass}`}>{score}%</span>
            <span className="text-sm font-medium text-gray-500">Match Score</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ResumeScore;
