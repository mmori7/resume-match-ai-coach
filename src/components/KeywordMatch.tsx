
import React from 'react';
import { Check, X } from 'lucide-react';

interface KeywordMatchProps {
  matchedKeywords: string[];
  missingKeywords: string[];
}

const KeywordMatch: React.FC<KeywordMatchProps> = ({ matchedKeywords, missingKeywords }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium flex items-center mb-2">
          <Check className="h-5 w-5 text-teal mr-2" />
          Matched Keywords ({matchedKeywords.length})
        </h3>
        {matchedKeywords.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {matchedKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No matched keywords found.</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium flex items-center mb-2">
          <X className="h-5 w-5 text-red-500 mr-2" />
          Missing Keywords ({missingKeywords.length})
        </h3>
        {missingKeywords.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {missingKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-red-100 text-red-500 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No missing keywords found.</p>
        )}
      </div>
    </div>
  );
};

export default KeywordMatch;
