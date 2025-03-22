// // File: src/pages/LandingPage.tsx

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { useNavigate } from "react-router-dom";

// const LandingPage: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const features = [
//     {
//       icon: "fa-solid fa-robot",
//       title: "AI-Powered Grading",
//       description:
//         "Upload assignments and receive instant, accurate feedback powered by advanced AI algorithms.",
//     },
//     {
//       icon: "fa-solid fa-chart-line",
//       title: "Performance Dashboard",
//       description:
//         "Track progress with detailed analytics and personalized improvement recommendations.",
//     },
//     {
//       icon: "fa-solid fa-graduation-cap",
//       title: "Smart Learning System",
//       description:
//         "Access adaptive learning materials that adjust to your pace and learning style.",
//     },
//     {
//       icon: "fa-solid fa-comments",
//       title: "Gemini Doubt Solver",
//       description:
//         "Get instant answers to your questions from our advanced AI assistant, available 24/7.",
//     },
//   ];

//   const testimonials = [
//     {
//       text: "EduAI has transformed how I teach. The AI grading system saves me countless hours, allowing me to focus more on individual student needs.",
//       author: "Dr. Alexandra Thompson",
//       role: "Professor of Computer Science, Stanford University",
//     },
//     {
//       text: "The personalized learning paths have helped my students achieve remarkable improvements in their test scores. It's like having a personal tutor for each student.",
//       author: "Prof. Michael Richardson",
//       role: "Head of Mathematics, MIT",
//     },
//     {
//       text: "As a student, EduAI has been a game-changer. The instant feedback and AI-powered explanations help me understand complex topics quickly.",
//       author: "Emily Anderson",
//       role: "Medical Student, Johns Hopkins University",
//     },
//   ];

//   const faqs = [
//     {
//       question: "How accurate is the AI grading?",
//       answer:
//         "Our AI grading system maintains a 99.8% accuracy rate, verified through extensive testing and continuous validation by educational experts.",
//     },
//     {
//       question: "Is the platform free for students?",
//       answer:
//         "We offer a free basic plan for students with access to core features. Premium features are available through affordable subscription plans.",
//     },
//     {
//       question: "What subjects are supported?",
//       answer:
//         "EduAI currently supports Mathematics, Sciences, Computer Science, Languages, and Humanities, with new subjects added regularly.",
//     },
//     {
//       question: "Can parents monitor student performance?",
//       answer:
//         "Yes, parents can access detailed progress reports, performance analytics, and real-time updates through a dedicated parent dashboard.",
//     },
//   ];

//   return (
//     <div className="min-h-[1024px] w-full mx-auto overflow-x-hidden">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b">
//         <div className="flex items-center justify-between px-8 h-16">
//           <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
//             <i className="fa-solid fa-brain text-purple-600 text-2xl"></i>
//             <span className="text-xl font-bold text-purple-600">EduAI</span>
//           </div>
//           <div className="flex items-center gap-8">
//             <a href="#features" className="text-gray-600 hover:text-purple-600 cursor-pointer">Features</a>
//             <a href="#testimonials" className="text-gray-600 hover:text-purple-600 cursor-pointer">Testimonials</a>
//             <a href="#faq" className="text-gray-600 hover:text-purple-600 cursor-pointer">FAQ</a>
//             <Button variant="outline" onClick={() => navigate("/login")} className="!rounded-button">Login</Button>
//             <Button onClick={() => navigate("/signup")} className="bg-purple-600 hover:bg-purple-700 !rounded-button">Sign Up</Button>
//           </div>
//         </div>
//       </nav>

//       {/* Other Sections Above */}


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Quote, BookOpenCheck, Users, Brain, MessageCircleQuestion } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "AI-Powered Grading",
      description: "Upload assignments and receive instant, accurate feedback powered by advanced AI algorithms.",
    },
    {
      icon: <BookOpenCheck className="w-6 h-6 text-white" />,
      title: "Performance Dashboard",
      description: "Track progress with detailed analytics and personalized improvement recommendations.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Smart Learning System",
      description: "Access adaptive learning materials that adjust to your pace and learning style.",
    },
    {
      icon: <MessageCircleQuestion className="w-6 h-6 text-white" />,
      title: "Gemini Doubt Solver",
      description: "Get instant answers to your questions from our advanced AI assistant, available 24/7.",
    },
  ];

  const testimonials = [
    {
      text: "EduAI has transformed how I teach. The AI grading system saves me countless hours, allowing me to focus more on individual student needs.",
      author: "Dr. Alexandra Thompson",
      role: "Professor of Computer Science, Stanford University",
    },
    {
      text: "The personalized learning paths have helped my students achieve remarkable improvements in their test scores. It's like having a personal tutor for each student.",
      author: "Prof. Michael Richardson",
      role: "Head of Mathematics, MIT",
    },
    {
      text: "As a student, EduAI has been a game-changer. The instant feedback and AI-powered explanations help me understand complex topics quickly.",
      author: "Emily Anderson",
      role: "Medical Student, Johns Hopkins University",
    },
  ];

  const faqs = [
    {
      question: "How accurate is the AI grading?",
      answer: "Our AI grading system maintains a 99.8% accuracy rate, verified through extensive testing and continuous validation by educational experts.",
    },
    {
      question: "Is the platform free for students?",
      answer: "We offer a free basic plan for students with access to core features. Premium features are available through affordable subscription plans.",
    },
    {
      question: "What subjects are supported?",
      answer: "EduAI currently supports Mathematics, Sciences, Computer Science, Languages, and Humanities, with new subjects added regularly.",
    },
    {
      question: "Can parents monitor student performance?",
      answer: "Yes, parents can access detailed progress reports, performance analytics, and real-time updates through a dedicated parent dashboard.",
    },
  ];

  return (
    <div className="min-h-[1024px] w-full mx-auto overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="flex items-center justify-between px-8 h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}> 
            <Brain className="text-purple-600 w-6 h-6" />
            <span className="text-xl font-bold text-purple-600">EduAI</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 cursor-pointer">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 cursor-pointer">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-purple-600 cursor-pointer">FAQ</a>
            <Button variant="outline" onClick={() => navigate("/login")} className="!rounded-button">Login</Button>
            <Button onClick={() => navigate("/signup")} className="bg-purple-600 hover:bg-purple-700 !rounded-button">Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-gradient-to-r from-blue-500 via-purple-400 to-white-500 text-white">
        <div className="container mx-auto px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">Empowering Education with AI</h1>
            <p className="text-xl mb-8">Instant grading. Smart learning. Personalized feedback — all in one platform.</p>
            <div className="flex gap-4">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 !rounded-button text-lg px-8 py-6" onClick={() => navigate("/signup")}>🚀 Get Started</Button>
              <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-black !rounded-button text-lg px-8 py-6" onClick={() => navigate("/learn")}>📚 Explore Lessons</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-purple-50">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Powerful Features for Modern Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <Quote className="text-purple-600 w-6 h-6 mb-4" />
                <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to revolutionize your learning journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students and educators using EduAI every day.
          </p>
          <Button
            className="bg-white text-purple-600 hover:bg-gray-100 !rounded-button text-lg px-8 py-6"
            onClick={() => navigate("/signup")}
          >
            Create Your Free Account
          </Button>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <i className="fa-solid fa-brain text-white text-2xl"></i>
                <span className="text-xl font-bold text-white">EduAI</span>
              </div>
              <p className="mb-4">
                Transforming education through artificial intelligence.
              </p>
              <div className="flex gap-4">
                <i className="fa-brands fa-twitter cursor-pointer hover:text-white"></i>
                <i className="fa-brands fa-linkedin cursor-pointer hover:text-white"></i>
                <i className="fa-brands fa-facebook cursor-pointer hover:text-white"></i>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white cursor-pointer">About Us</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Careers</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white cursor-pointer">Documentation</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Help Center</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-8 text-center">
            <p>&copy; 2025 EduAI. All rights reserved.</p>
          </div>
        </div>
      </footer> */}

       {/* FAQ Section */}
       <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to revolutionize your learning journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students and educators using EduAI every day.
          </p>
          <Button
            className="bg-white text-purple-600 hover:bg-gray-100 !rounded-button text-lg px-8 py-6"
            onClick={() => navigate("/signup")}
          >
            Create Your Free Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Brain className="text-white w-6 h-6" />
                <span className="text-xl font-bold text-white">EduAI</span>
              </div>
              <p className="mb-4">
                Transforming education through artificial intelligence.
              </p>
              {/* <div className="flex gap-4">
                <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
              </div> */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white cursor-pointer">About Us</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Careers</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white cursor-pointer">Documentation</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Help Center</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-8 text-center">
            <p>&copy; 2025 EduAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    {/* </div>
  );
};

export default LandingPage; */}
    </div>
  );
};

export default LandingPage;