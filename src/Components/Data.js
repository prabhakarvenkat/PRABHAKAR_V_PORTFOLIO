import project1 from "../assets/Projects/AI_Chatbot_with_Groq_streamlit.png";
import project2 from "../assets/Projects/GeminiConvoBot.png";
import project3 from "../assets/Projects/Stock_Analysis_with_CrewAI.png";
import project4 from "../assets/Projects/Trading_Bot_with_ALPACA.png";
import project5 from "../assets/Projects/Home_Price_Prediction.png";
import project6 from "../assets/Projects/Flask_Basic.png";
import project7 from "../assets/Projects/ICR---Identifying-Age-Related-Condition.png";
import project8 from "../assets/Projects/Resume_ATS-Tracker.png";
import project9 from "../assets/Projects/California_House_Pricing.png";
import project0 from "../assets/Projects/Portfolio.png";

import certificate1 from "../assets/Certification/Machine Learning.jpg";
import certificate2 from "../assets/Certification/Data Analytics.jpg";
import certificate3 from "../assets/Certification/Business Intelligence.jpg";

import HtmlLogo from "../assets/SVG/Tech Icons/HTML5.svg";
import CssLogo from "../assets/SVG/Tech Icons/Scrapy.svg";
import JsLogo from "../assets/SVG/Tech Icons/JavaScript.svg";
import ReactLogo from "../assets/SVG/Tech Icons/Python.svg";
import TailwindLogo from "../assets/SVG/Tech Icons/SQL.svg";
import GitLogo from "../assets/SVG/Tech Icons/Git.svg";
import JavaLogo from "../assets/SVG/Tech Icons/scikitlearn.svg";
import CanvaLogo from "../assets/SVG/Tech Icons/PyTorch.svg";
import GsapLogo from "../assets/SVG/Tech Icons/Langchain.svg";
import TauriLogo from "../assets/SVG/Tech Icons/NLP.svg";
import { GitHubSkillIcon } from "./MiniComponents";
import { TensorFlowIcon } from "./MiniComponents";
import { version } from "react-dom";
import { Link } from "react-scroll";

export const NavBar_data = [
  { name: "home" },
  { name: "skills" },
  { name: "projects" },
  { name: "certifications" },
  { name: "contact" },
];

export const skill_data = [
  { name: "HTML5", icon: HtmlLogo },
  { name: "Scrapy", icon: CssLogo },
  { name: "SQL", icon: TailwindLogo },
  { name: "JavaScript", icon: JsLogo },
  { name: "Python", icon: ReactLogo },
  { name: "Langchain", icon: GsapLogo },
  { name: "TensorFlow", Component: TensorFlowIcon },
  { name: "Scikit-learn", icon: JavaLogo },
  { name: "NLP", icon: TauriLogo },
  { name: "Git", icon: GitLogo },
  { name: "GitHub", Component: GitHubSkillIcon },
  { name: "PyTorch", icon: CanvaLogo },
];

export const projects_data = [
  {
    Title: "California_House_Pricing",
    Description:
      "This project is a machine learning model designed to predict house prices in California. Using a Postman API for quick access and integration, the model processes input data such as location, size, and other relevant features to estimate house prices accurately. This setup allows easy interaction and testing of predictions through Postman.",
    Image: project9,
    Link: "https://github.com/prabhakarvenkat/California_House_Pricing.git",
    TechStack: [
      "GitHub",
      "Heroku",
      "VS Code",
      "GitCLI",
      "Scikit-Learn",
      "PostMan API",
    ],
  },
  {
    Title: "Resume_ATS-Tracker",
    Description:
      "Resume ATS tracker is a Streamlit-based web application that evaluates a resume against a given job description using a generative AI model. The application provides feedback to improve the resume's compatibility with Applicant Tracking Systems (ATS) commonly used in the tech field. It uses Google Generative AI (Gemini) and PyPDF2 for processing PDF resumes.",
    Image: project8,
    Link: "https://github.com/prabhakarvenkat/Resume_ATS-Tracker.git",
    TechStack: ["Streamlit", "PyPDF2", "Gemini API"],
  },
  {
    Title: "ICR---Identifying-Age-Related-Condition",
    Description:
      "The competition aims to predict whether a person has one or more of three medical conditions (Class 1) or none (Class 0) using a model trained on health measurements. Predictive modeling simplifies the traditionally lengthy and intrusive data collection process, protecting patient privacy by focusing only on key characteristics. This work supports researchers in identifying links between health metrics and potential medical conditions.",
    Image: project7,
    Link: "https://github.com/prabhakarvenkat/ICR---Identifying-Age-Related-Conditions.git",
    TechStack: ["Scikit-learn", "Kaggle", "Python"],
  },
  {
    Title: "Flask_Basic",
    Description:
      "Flask project, built with Python, serves as a lightweight web application framework, enabling rapid development of web-based applications. It offers a simple, scalable setup for integrating APIs, handling user interactions, and rendering dynamic content, ideal for projects like machine learning model deployment or data-driven applications.",
    Image: project6,
    Link: "https://github.com/prabhakarvenkat/Flask_Basic.git",
    TechStack: ["Flask", "Python", "SQLAlchemy"],
  },
  {
    Title: "Home_Price_Prediction",
    Description:
      "Potential homebuyers consider various factors like location, property size, and proximity to amenities before purchasing a house, but price remains key. Due to demonetization, RERA enforcement, and decreased trust in developers, housing sales in India fell by 7% in 2017, with Bengaluru prices dropping by 5%. For example, numerous projects in Bengaluru fall within ₹15-62 lakh across various budget segments, making it challenging to assess house prices in this dynamic market.",
    Image: project5,
    Link: "https://github.com/prabhakarvenkat/Home_Price_Prediction.git",
    TechStack: ["html5", "css3", "js", "Python", "Flask", "Scikit-learn"],
  },
  {
    Title: "Trading_Bot_with_ALPACA",
    Description:
      "This is a Python script that creates a trading bot using the Alpaca API. The bot scans for trading opportunities based on the top losing stocks and popular crypto assets from YahooFinance. It then uses the Alpaca API to execute buy and sell orders and sends notifications via Slack about the trades it makes.",
    Image: project4,
    Link: "https://github.com/prabhakarvenkat/Trading-Bot_with_ALPACA.git",
    TechStack: ["Python", "ALPACA API", "Streamlit", "Lumibot"],
  },
  {
    Title: "AI_Chatbot_with_Groq_streamlit",
    Description:
      "This project provides a detailed explanation on building one of the fastest AI chatbots using Groq Chat, powered by the revolutionary Tensor Streaming Processor (TSP) technology developed by Groq. This technology enables unparalleled processing speeds for machine learning workloads, especially for complex Natural Language Processing (NLP) tasks.",
    Image: project1,
    Link: "https://github.com/prabhakarvenkat/AI_ChatBot_with_Groq-Streamlit.git",
    TechStack: ["Python", "Streamlit", "Groq", "Langchain"],
  },
  {
    Title: "GeminiConvoBot",
    Description:
      "The GeminiConvoBot project! This bot leverages the latest in conversational AI to provide responsive and intelligent interactions. Below you'll find information about the project, images to illustrate its capabilities, and common Git commands to get you started.",
    Image: project2,
    Link: "https://github.com/prabhakarvenkat/GeminiConvoBot.git",
    TechStack: ["Python", "Streamlit", "Gemini API"],
  },
  {
    Title: "Stock_Analysis_with_CrewAI",
    Description:
      "This project leverages cutting-edge AI technologies to analyze financial data from SEC EDGAR and Serper API to provide buy/sell recommendations and optimal holding periods for stocks.",
    Image: project3,
    Link: "https://github.com/prabhakarvenkat/Stock-Analysis_with_CrewAI.git",
    TechStack: ["Python", "CrewAI", "Streamlit", "Groq API"],
  },
  {
    Title: "MY PORTFOLIO",
    Description: "Welcome to my portfolio!",
    Image: project0,
    // "version": [
    //   {
    //     "versionNo": "v1",
    //     "Link": "https://akilraj-1153.github.io/AKILRAJ-N-Portfolio-V1/"
    //   },
    //   {
    //     "versionNo": "v2",
    //     "Link": "https://akilraj-1153.github.io/AKILRAJ-N-Portfolio-V2/"
    //   },
    //   {
    //     "versionNo": "v3",
    //     "Link": "https://akilraj-1153.github.io/AKILRAJ-N-Portfolio-V3/"
    //   },
    //   {
    //     "versionNo": "v4",
    //     "Link": "https://akilraj-1153.github.io/Akilraj_N-Portfolio/"
    //   }
    // ],
    Link: "https://github.com/prabhakarvenkat/PRABHAKAR_PORTFOLIO.git",
    TechStack: ["html5", "css3", "js", "Reactjs", "Tailwind"]
  }

];

export const certificate_data = [
  {
    title: "Machine Learning",
    issuedBy: "Standford via Coursera",
    date: "Month Year 1",
    logo: "path/to/logo1.png",
    //ImageLink:"https://cdn.jsdelivr.net/gh/Akilraj-1153/Akilraj_N-Portfolio/src/Assets/Certification/Foundations of User Experience (UX) Design.jpg",
    image: certificate1,
    description:
      "This certification develop ML models using NumPy and scikit-learn for prediction and classification, and train neural networks with TensorFlow for multi-class tasks. Utilize decision trees, ensemble methods, unsupervised learning for clustering and anomaly detection, and create recommender systems with collaborative filtering, deep learning, and reinforcement learning models.",
    link: "https://coursera.org/verify/specialization/QXXQ7UVGTGYA",
  },
  {
    title: "Data Analytics",
    issuedBy: "Google via Coursera",
    date: "Month Year 3",
    logo: "path/to/logo3.png",
    //ImageLink:"https://cdn.jsdelivr.net/gh/Akilraj-1153/Akilraj_N-Portfolio/src/Assets/Certification/HTML and CSS in depth.jpg",
    image: certificate2,
    description:
      "This certification helps to gain a practical understanding of a junior data analyst's role, learning essential skills like data cleaning, analysis, and visualization. Master tools such as spreadsheets, SQL, R, and Tableau to organize, analyze, and present data effectively in dashboards and presentations.",
    link: "https://coursera.org/verify/professional-cert/XSA7F4GTSPPD",
  },
  {
    title: "Business Intelligence",
    issuedBy: "Google via Coursera",
    date: "Month Year 4",
    logo: "path/to/logo4.png",
    //ImageLink:"https://cdn.jsdelivr.net/gh/Akilraj-1153/Akilraj_N-Portfolio/src/Assets/Certification/React Basics.jpg",
    image: certificate3,
    description:
      "This certification helps us to understand the role of BI professionals in organizations, practice data modeling and ETL processes, and design visualizations and dashboards to communicate insights and support business goals.",
    link: "https://coursera.org/verify/professional-cert/CPHVTLFXFQPD",
  },
];
