// import { FaCommentDots, FaSyncAlt, FaTimes } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello, I'm QueryBot!👋 \n\n Welcome to my portfolio. I'm here to help with any questions about my work, projects, or skills. How can I assist you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const chatBodyRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);
  const resetChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Hello, I'm QueryBot!👋 \n\n Welcome to my portfolio. I'm here to help with any questions about my work, projects, or skills. How can I assist you today?",
      },
    ]);
  };

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    const botResponse = { sender: "bot", text: getBotResponse(userInput) };

    setMessages((prev) => [...prev, userMessage]);
    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
    setUserInput("");
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("hello"))
      return "Hi again! 😊 How can I help you today?";
    if (lowerMessage.includes("how are you"))
      return "I'm doing great, thanks for asking! 😊 How can I assist you today?";

    // General Questions
    if (lowerMessage.includes("introduce yourself"))
      return "I'm Bisma Tanveer, a final-year IT student at Punjab University College of Information Technology (PUCIT) with expertise in Front-End Development and UI/UX Design. I'm also exploring AI and its applications to solve real-world problems.💻";
    if (lowerMessage.includes("what do you do"))
      return "I'm a final-year IT student at Punjab University College of Information Technology (PUCIT), passionate about Front-End Development, UI/UX Design, and exploring AI. I'm actively looking for opportunities that align with my skills and passion, allowing me to grow and contribute to innovative projects. 🚀";
    if (lowerMessage.includes("what is your professional background"))
      return "I'm a final-year IT student at PUCIT with expertise in front-end development and UI/UX design. I'm also exploring AI to integrate intelligent solutions into my projects.";
    if (lowerMessage.includes("what skills do you have"))
      return "I have expertise in front-end web development using React.js along with Tailwind CSS for efficient and modern UI/UX design, ensuring that the applications I build are both functional and visually appealing.";
    if (lowerMessage.includes("what programming languages do you know"))
      return "I'm proficient in JavaScript, C++, and Java. I also have basic knowledge of Python, which I'm exploring further for AI applications.";
    if (lowerMessage.includes("are you experienced in web development"))
      return "Yes! I have extensive experience in front-end web development, specializing in React.js and Tailwind CSS. I've worked on various projects, including NeuraMind (an AI-powered knowledge and assistance platform) and MediConnect (a healthcare management system). Additionally, I'm currently developing my Final Year Project Loop Together: A Carpool Scheduling Platform for Daily Commutes using the MERN stack, integrating a Ride Matching Algorithm for optimized carpooling.";
    if (lowerMessage.includes("tell me more about your design skills"))
      return "Alongside development, I focus on UI/UX design, ensuring that applications are not only functional but also visually appealing and user-friendly.";

    // Work Experience
    if (lowerMessage.includes("where have you worked"))
      return "I'm currently a final-year student, but I've built several front-end web projects, gaining hands-on experience in creating interactive and responsive applications.";
    if (lowerMessage.includes("past work experience"))
      return "I’ve worked as a Teaching Assistant at PUCIT for the 'Communication & Presentation Skills' course. Additionally, I've developed various MERN stack and AI-based projects.";
    if (lowerMessage.includes("what are some of your recent projects"))
      return "Some of my recent projects include NeuraMind, an AI powered knowledge and assistance platform and Mediconnect, a healthcare management system. Moreover, my Final Year Project is also in developing phase.";
    if (lowerMessage.includes("some examples of your work"))
      return "You can check out my projects on my <a href='https://github.com/BismaTanveer2209' target='_blank' style='color:#3B2FC4; font-weight:bold; text-decoration: underline;'>GitHub profile</a>.";
    if (lowerMessage.includes("tell me about the project mediconnect"))
      return "Mediconnect is a healthcare management system, developed using JavaServlets, MySql, JavaScript, HTML, CSS & Bootstrap, to optimize patient care and administrative tasks. It includes features for managing patient records, appointments, and doctor-patient communication.";

    // Education and Certifications
    if (lowerMessage.includes("where did you study"))
      return "I’m in my final semester at Punjab University College of Information Technology (PUCIT), pursuing a degree in Information Technology.";
    if (lowerMessage.includes("major in college"))
      return "My major is Information Technology, focusing on software development, web technologies, UI/UX designing, and AI.";

    // Services Offered
    if (lowerMessage.includes("what services do you provide"))
      return "I offer front-end web development, UI/UX design, and problem-solving expertise. I focus on creating dynamic, responsive, and user-friendly AI-driven web applications.";
    if (lowerMessage.includes("can you help me with web development"))
      return "Absolutely! I'm experienced in front-end web development using React JS and other development frameworks and can help build modern, interactive, and user-friendly websites.";
    if (lowerMessage.includes("do you offer graphic design services"))
      return "While my primary focus is development along with UI/UX designing, but I also have experience in graphic design, ensuring visually appealing and user-friendly applications.";
    if (lowerMessage.includes("can you assist with ui/ux design"))
      return "Yes! I can help design intuitive and user-friendly interfaces that enhance the user experience.";

    // Availability and Contact Information
    if (lowerMessage.includes("are you available for freelance work"))
      return "Yes, I’m open to freelance opportunities in front-end web development, UI/UX designing, and AI-driven applications.";
    if (lowerMessage.includes("how can i contact you"))
      return "You can reach me via email at bismatanveer2209@gmail.com or through my LinkedIn profile <a href='https://www.linkedin.com/in/bisma-tanveer-18b3a6246/' target='_blank' style='color:#3B2FC4; font-weight:bold; text-decoration: underline;'>LinkedIn</a>.";
    if (lowerMessage.includes("are you open to job offers"))
      return "Yes, I’m actively looking for opportunities that align with my skills and passion for front-end development, UI/UX, and AI exploration.";
    if (lowerMessage.includes("can i hire you for a project"))
      return "Definitely! Feel free to reach out with project details, and we can discuss how I can assist.";
    if (lowerMessage.includes("what are your hobbies"))
      return "I enjoy coding, exploring new technologies, and learning about AI. In my spare time, I like designing UI/UX concepts and keeping up with the latest tech trends.";
    if (lowerMessage.includes("what do you do in your free time"))
      return "In my free time, I work on personal projects, read about emerging tech, and refine my skills in UI/UX and AI.";
    if (
      lowerMessage.includes(
        "are you interested in any technologies outside of work"
      )
    )
      return "Yes, I'm particularly interested in AI and its applications in web development, exploring ways to integrate intelligent solutions into user interfaces.";
    if (lowerMessage.includes("do you have any testimonials from clients"))
      return "While I’m still building my professional portfolio, my professors and peers appreciate my problem-solving approach and dedication to my work.";
    if (lowerMessage.includes("what do others say about your work"))
      return "My professors and peers often commend me for my problem-solving skills, creativity in UI/UX, and ability to collaborate on projects.";

    return "Hmm, I didn’t quite catch that. 🤔 Could you please rephrase your question?";
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center text-white text-4xl shadow-lg cursor-pointer"
        onClick={toggleChat}
      >
        💭
      </div>
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-[420px] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          <div className="bg-purple-700 text-white p-2 text-[22px] font-semibold flex justify-between items-center rounded-t-lg">
            <div className="cursor-pointer" onClick={resetChat}>
              ⟳
            </div>
            QueryBot
            <div className="cursor-pointer" onClick={toggleChat}>
              ✖
            </div>
          </div>
          <div
            className="flex-1 p-3 overflow-y-auto space-y-2 text-sm"
            ref={chatBodyRef}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" ? (
                  <div
                    className="p-2 rounded-lg max-w-[75%] bg-gray-200 text-black text-justify"
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  ></div>
                ) : (
                  <div className="p-2 rounded-lg max-w-[75%] bg-purple-700 text-white text-right">
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-300">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-200 bg-gray-100 text-black text-[16px] outline-none w-[80%]"
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-purple-700 text-white text-md font-semibold rounded-r-lg w-[20%]"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
