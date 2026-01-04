import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Kamal Sharma",
    "title": "Full-Stack Developer",
    "email": "kamalsharma5218@gmail.com",
    "phone": "+91-8307116625",
    "linkedin": "linkedin.com/in/kamalsharma5218",
    "github": "github.com/kamalstores",
    "location": "",
    "summary": "Kamal Sharma is a proficient Full-Stack Developer with a background in Computer Science and Engineering from the National Institute of Technology, specializing in real-time applications and full-stack development. He has hands-on experience building complex web applications, AI solutions, and systems leveraging a range of modern technologies and tools."
  },
  "experience": [],
  "education": [
    {
      "degree": "Bachelor of Technology in Computer Science and Engineering",
      "institution": "National Institute of Technology, Kurukshetra",
      "years": "Aug 2023 - May 2027",
      "gpa": "8.2125"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "CarRental – Car Booking Platform",
      "description": "Built a full-stack car rental marketplace featuring dual user roles, real-time booking, and secure JWT authentication.",
      "technologies": [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "bcrypt",
        "ImageKit",
        "Multer",
        "Axios"
      ],
      "link": "",
      "github": "GitHub Link"
    },
    {
      "name": "DeepSeek – AI Chatbot",
      "description": "Built a full-stack AI chatbot with responsive UI, secure auth, real-time chat, and persistent data storage.",
      "technologies": [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB Atlas",
        "OpenAI API",
        "Clerk",
        "Vercel"
      ],
      "link": "",
      "github": "GitHub Link"
    },
    {
      "name": "Face Recognition",
      "description": "Built a Python face recognition system to identify individuals by comparing images against a known faces database.",
      "technologies": [
        "Python",
        "OpenCV",
        "face_recognition",
        "NumPy",
        "OS module"
      ],
      "link": "",
      "github": "GitHub Link"
    },
    {
      "name": "Student Registration System",
      "description": "Developed a GUI-based student registration system using Tkinter for form handling and Excel for data storage.",
      "technologies": [
        "Python",
        "Tkinter",
        "PIL",
        "OpenPyXL",
        "Excel",
        "OS module"
      ],
      "link": "",
      "github": "GitHub Link"
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
