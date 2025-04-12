
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface JobDescriptionInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({ 
  value, 
  onChange,
  disabled = false
}) => {
  return (
    <div className="w-full">
      <Label htmlFor="jobDescription" className="text-base font-medium mb-2 block">
        Paste Job Description
      </Label>
      <Textarea
        id="jobDescription"
        placeholder="Paste the job description here to compare with your resume..."
        className="min-h-[200px] resize-y"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default JobDescriptionInput;
