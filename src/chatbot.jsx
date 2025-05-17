// import React, { useState, useEffect, useRef } from "react";
// import { FaCommentDots, FaSyncAlt, FaTimes } from "react-icons/fa";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello, I'm ByteBuddy!👋 \n\n Welcome to my portfolio. I'm here to help with any questions about my work, projects, or skills. How can I assist you today?",
//     },
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const chatBodyRef = useRef(null);

//   const toggleChat = () => setIsOpen(!isOpen);
//   const resetChat = () => {
//     setMessages([
//       {
//         sender: "bot",
//         text: "Hello, I'm ByteBuddy!👋 \n\n Welcome to my portfolio. I'm here to help with any questions about my work, projects, or skills. How can I assist you today?",
//       },
//     ]);
//   };

//   const sendMessage = () => {
//     if (!userInput.trim()) return;

//     const userMessage = { sender: "user", text: userInput };
//     const botResponse = { sender: "bot", text: getBotResponse(userInput) };

//     setMessages((prev) => [...prev, userMessage]);
//     setTimeout(() => {
//       setMessages((prev) => [...prev, botResponse]);
//     }, 500);
//     setUserInput("");
//   };

//   useEffect(() => {
//     if (chatBodyRef.current) {
//       chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const getBotResponse = (message) => {
//     const lowerMessage = message.toLowerCase();
//     if (lowerMessage.includes("hello"))
//       return "Hi again! 😊 How can I help you today?";
//     if (lowerMessage.includes("how are you"))
//       return "I'm doing great, thanks for asking! 😊 How can I assist you today?";

//     // General Questions
//     if (lowerMessage.includes("introduce yourself"))
//       return "I'm Zahra Yasin, a final-year IT student at Punjab University College of Information Technology (PUCIT) with expertise in Front-End Development and UI/UX Design. I'm also exploring AI and its applications to solve real-world problems.💻";
//     if (lowerMessage.includes("what do you do"))
//       return "I'm a final-year IT student at Punjab University College of Information Technology (PUCIT), passionate about Front-End Development, UI/UX Design, and exploring AI. I'm actively looking for opportunities that align with my skills and passion, allowing me to grow and contribute to innovative projects. 🚀";
//     if (lowerMessage.includes("what is your professional background"))
//       return "I'm a final-year IT student at PUCIT with expertise in front-end development and UI/UX design. I'm also exploring AI to integrate intelligent solutions into my projects.";
//     if (lowerMessage.includes("what skills do you have"))
//       return "I have expertise in front-end web development using its framework React.js along with Tailwind CSS for efficient and modern UI/UX design, ensuring that the applications I build are both functional and visually appealing.";
//     if (lowerMessage.includes("what programming languages do you know"))
//       return "I'm proficient in JavaScript, C++, and Java. I also have basic knowledge of Python, which I'm exploring further for AI applications.";
//     if (lowerMessage.includes("are you experienced in web development"))
//       return "Yes! I have extensive experience in front-end web development, specializing in React.js and Tailwind CSS. I've worked on various projects, including NeuraMind (an AI-powered knowledge and assistance platform) and MediConnect (a healthcare management system). Additionally, I'm currently developing my Final Year Project Loop Together: A Carpool Scheduling Platform for Daily Commutes using the MERN stack, integrating a Ride Matching Algorithm for optimized carpooling.";
//     if (lowerMessage.includes("tell me more about your design skills"))
//       return "Alongside development, I focus on UI/UX design, ensuring that applications are not only functional but also visually appealing and user-friendly.";

//     // Additional Responses
//     if (lowerMessage.includes("where did you study"))
//       return "I’m in my final semester at Punjab University College of Information Technology (PUCIT), pursuing a degree in Information Technology.";
//     if (lowerMessage.includes("can you help me with web development"))
//       return "Absolutely! I'm experienced in front-end web development using the React JS and other development frameworks and can help build modern, interactive, and user-friendly websites.";

//     return "Hmm, I didn’t quite catch that. 🤔 Could you please rephrase your question?";
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       <div
//         className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center text-white text-4xl shadow-lg cursor-pointer"
//         onClick={toggleChat}
//       >
//         <FaCommentDots />
//       </div>
//       {isOpen && (
//         <div className="fixed bottom-4 right-4 w-80 h-[420px] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
//           <div className="bg-purple-700 text-white p-2 text-[22px] font-semibold flex justify-between items-center rounded-t-lg">
//             <FaSyncAlt className="cursor-pointer" onClick={resetChat} />
//             ByteBuddy
//             <FaTimes className="cursor-pointer" onClick={toggleChat} />
//           </div>
//           <div
//             className="flex-1 p-3 overflow-y-auto space-y-2 text-sm"
//             ref={chatBodyRef}
//           >
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 {msg.sender === "bot" ? (
//                   <div
//                     className="p-2 rounded-lg max-w-[75%] bg-gray-200 text-black text-justify"
//                     dangerouslySetInnerHTML={{ __html: msg.text }}
//                   ></div>
//                 ) : (
//                   <div
//                     className="p-2 rounded-lg max-w-[75%] bg-purple-700 text-white text-right"
//                   >
//                     {msg.text}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="flex border-t border-gray-300">
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               placeholder="Type a message..."
//               className="flex-1 p-2 border border-gray-200 bg-gray-100 text-black text-[16px] outline-none w-[80%]"
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button
//               onClick={sendMessage}
//               className="p-2 bg-purple-700 text-white text-md font-semibold rounded-r-lg w-[20%]"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default chatbot;