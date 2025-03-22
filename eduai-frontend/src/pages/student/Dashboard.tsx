// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabaseClient";

// export default function StudentDashboard() {
//   const [fullName, setFullName] = useState("");

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       const name = data?.user?.user_metadata?.full_name;
//       if (name) setFullName(name);
//     };
//     fetchUser();
//   }, []);

//   return (
//     <div className="space-y-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Welcome, {fullName || "Student"} 👋</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p>Track your learning progress, take tests, and access personalized feedback.</p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Your Learning Options</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-2">
//           <ul className="list-disc pl-6">
//             <li>📚 Start Video Lessons</li>
//             <li>🧠 Take Chapter-Based Tests</li>
//             <li>⚡ Access 10-Minute Quick Learning Cheatsheets</li>
//             <li>📈 View your Performance Insights</li>
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpenCheck, BarChart3, ClipboardList, Gem, Rocket } from "lucide-react";
import StudentNavbar from "./StudentNavbar";
import { motion } from "framer-motion";

const studentFeatures = [
  {
    title: "Start Learning",
    description: "Explore interactive video lessons by subject and chapter.",
    icon: <BookOpenCheck className="w-6 h-6 text-purple-600" />,
    route: "/learn",
  },
  {
    title: "Your Performance",
    description: "Get insights, progress charts, and growth tracking.",
    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
    route: "/student/performance",
  },
  {
    title: "Test History",
    description: "Access all previous tests, scores, and reviews.",
    icon: <ClipboardList className="w-6 h-6 text-purple-600" />,
    route: "/student/tests",
  },
  {
    title: "Assignment History",
    description: "Access all previous assignments submitted by you.",
    icon: <ClipboardList className="w-6 h-6 text-purple-600" />,
    route: "/student/assignment-history",
  },
  {
    title: "Quick Learn (10-min)",
    description: "Grab cheat sheets and exam hacks instantly.",
    icon: <Rocket className="w-6 h-6 text-purple-600" />,
    route: "/quicklearn",
  },
  {
    title: "Gemini Doubt Solver",
    description: "Ask questions and get instant AI-powered answers.",
    icon: <Gem className="w-6 h-6 text-purple-600" />,
    route: "/student/ask-ai",
  },
  
];

export default function StudentDashboard() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <StudentNavbar />
      <div className="min-h-screen bg-blue-100 p-8">
        <motion.h1 
          className="text-4xl font-bold text-grey-700 mb-10 text-center"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome Back, Aryan! 👋
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {studentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-all rounded-xl p-6 cursor-pointer border border-purple-100"
              onClick={() => navigate(feature.route)}
              variants={cardVariants}
              whileHover="hover"
              layout
            >
              <motion.div 
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h2 className="text-xl font-semibold text-purple-700">
                  {feature.title}
                </h2>
              </motion.div>
              <p className="text-gray-600">{feature.description}</p>
              <Button variant="link" className="text-purple-600 mt-4 px-0">
                Go to {feature.title} →
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}