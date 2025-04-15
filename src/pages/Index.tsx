
import React from 'react';
import { GraduationCap, Rocket, Users, Star, Briefcase, Github, Linkedin } from 'lucide-react';
import ProfileSection from '@/components/ProfileSection';
import WorkExperienceCard from '@/components/WorkExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import AchievementBadge from '@/components/AchievementBadge';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#2C1B47] to-[#1E1B2C] py-12 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
      <div className="absolute inset-0">
        <div className="stars absolute inset-0" />
        <div className="twinkling absolute inset-0" />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <ProfileSection 
          name="Mohit Mori"
          image="/lovable-uploads/cb34bb6a-5f20-42fc-9b62-662a77ea3086.png"
          socials={[
            { icon: Github, link: "https://github.com/mmori7" },
            { icon: Linkedin, link: "https://www.linkedin.com/in/mohit77/" }
          ]}
        />
        
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center text-white">
            <Briefcase className="mr-3 text-blue-400" />
            Work Experience
          </h2>
          <WorkExperienceCard
            title="Event Manager"
            company="Estacy Events"
            location="Surat, GJ, India"
            period="Sep 2020 - Aug 2022"
            type="Part-Time"
            responsibilities={[
              "Managed logistics, including venue selection, scheduling, and vendor coordination, to ensure seamless event execution.",
              "Collaborated with clients to understand and fulfill their vision through creative solutions.",
              "Supervised event staff, delegating tasks and providing on-the-job training to foster teamwork and ensure quality execution.",
              "Solved on-site challenges quickly, adjusting plans to maintain positive guest experiences and high client satisfaction."
            ]}
          />
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center text-white">
            <Rocket className="mr-3 text-cyan-400" />
            Projects
          </h2>
          <div className="space-y-6">
            <ProjectCard
              role="Owner"
              title="resume-match-ai-coach"
              location= "Los Angeles, CA, USA"
              description={[
                "Developed a resume-matching AI coach using OpenAI's GPT-3.5, enhancing job application success rates by 40%.",
                "Implemented a user-friendly interface with Next.js and Tailwind CSS, improving user engagement and satisfaction."
              ]}
              technologies="Reactjs, Tailwind CSS, TypeScript, HTML, CSS, OpenAI API"
            />
            <ProjectCard
              role="Owner"
              title="Expense Tracker"
              location="Los Angeles, CA, USA"
              description={[
                "Integrated Chart.js to visualize expense data through dynamic, interactive charts, improving data interpretation by 30%.",
                "Implemented an interface color-changing feature that refreshes every 10 seconds to boost user engagement."
              ]}
              technologies="HTML, CSS, JavaScript, Chart.js"
            />
            <ProjectCard
              role="Owner"
              title="Information Website"
              location="Surat, GJ, India"
              description={[
                "Built an informational website using HTML, CSS, and Java, providing a centralized resource for community members to easily locate local service providers.",
                "Focused on a clean and intuitive interface to enhance user experience and facilitate efficient navigation."
              ]}
              technologies="HTML, CSS, Java"
              projectLink="https://bit.ly/CONTACTS"
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center text-white">
            <GraduationCap className="mr-3 text-purple-400" />
            Education
          </h2>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white">California State University Long Beach</h3>
            <p className="text-gray-300">Computer Science</p>
            <p className="text-gray-300">GPA: 3.45</p>
          </div>
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center text-white">
            <Star className="mr-3 text-yellow-400" />
            Achievements
          </h2>
          <AchievementBadge 
            title="Goldman Sachs Certificate"
            description="Solved database problem"
          />
        </section>
      </div>
    </div>
  );
};

export default Index;
