
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileType, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface FileUploadProps {
  onFileUploaded: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUploaded }) => {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      if (
        uploadedFile.type === 'application/pdf' || 
        uploadedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        setFile(uploadedFile);
        onFileUploaded(uploadedFile);
      } else {
        toast({
          title: "Invalid file format",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
      }
    }
  }, [onFileUploaded, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false
  });

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="w-full">
      {!file ? (
        <div 
          {...getRootProps()} 
          className={`file-drop-area cursor-pointer ${isDragActive ? 'drag-active' : 'border-gray-300 hover:border-teal'}`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center">
            <Upload className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-lg font-medium">
              {isDragActive
                ? "Drop your resume here..."
                : "Drag and drop your resume here or click to browse"
              }
            </p>
            <p className="text-sm text-gray-500 mt-2">Supports PDF or DOCX files</p>
          </div>
        </div>
      ) : (
        <div className="bg-muted rounded-lg p-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-teal/10 p-2 rounded-md mr-3">
                <FileType className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={removeFile}
              className="text-gray-500 hover:text-destructive"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
