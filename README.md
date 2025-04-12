
# Resume Match AI Coach

An AI-powered application that analyzes your resume against job descriptions to help you optimize your application success rate.

![Resume Match AI Coach](public/preview.png)

## Overview

Resume Match AI Coach is a web application that helps job seekers improve their resumes by analyzing them against specific job descriptions. The application uses AI to provide personalized feedback, match keywords, and suggest improvements to increase the chances of getting past Applicant Tracking Systems (ATS).

## Features

- **Resume Upload**: Upload your resume in PDF or DOCX format for analysis
- **Job Description Input**: Paste the job description you're applying for
- **AI-Powered Analysis**: Get intelligent feedback on how well your resume matches the job description
- **Keyword Matching**: See which important keywords from the job description are present or missing in your resume
- **Improvement Suggestions**: Receive actionable tips to enhance your resume for the specific role
- **Resume Score**: Get an overall match score to understand how well your resume aligns with the job requirements

## Tech Stack

- **Frontend**: React.js with TypeScript
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: React Hooks and Context API
- **File Processing**: React Dropzone for file uploads
- **AI Integration**: Custom AI analysis service

## Getting Started

### Prerequisites

- Node.js (v14.0 or later)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd resume-match-ai-coach
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Upload your resume using the file upload component
2. Paste the job description you're applying for in the text area
3. Click "Analyze My Resume" to start the analysis
4. Review the AI feedback and suggestions to improve your resume
5. Make changes to your resume based on the recommendations
6. Repeat the process for different job descriptions to tailor your resume accordingly

## Project Structure

```
resume-match-ai-coach/
├── public/              # Static files
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── ui/          # UI components (shadcn/ui)
│   │   └── ...          # Custom components
│   ├── services/        # API and service integrations
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions and helpers
├── index.html           # HTML entry point
└── ...                  # Configuration files
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [React Dropzone](https://react-dropzone.js.org/) for file upload functionality
- [Lucide React](https://lucide.dev/) for the icon set

## Contact

For any questions or feedback, please open an issue on the repository.
