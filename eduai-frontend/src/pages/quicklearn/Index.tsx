// // import { useState } from "react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { useNavigate } from "react-router-dom";
// // import SubjectSelector from "@/components/quicklearn/SubjectSelector";
// // import CheatsheetCard from "@/components/quicklearn/CheatsheetCard";

// // const dummyCheats = [
// //   {
// //     id: "1",
// //     subject: "Mathematics",
// //     chapter: "Trigonometry Formulas",
// //     isPaid: false,
// //   },
// //   {
// //     id: "2",
// //     subject: "Mathematics",
// //     chapter: "Probability Tricks",
// //     isPaid: true,
// //   },
// //   {
// //     id: "3",
// //     subject: "History",
// //     chapter: "World War II Timeline",
// //     isPaid: false,
// //   },
// //   {
// //     id: "4",
// //     subject: "Political Science",
// //     chapter: "Important Acts of India",
// //     isPaid: true,
// //   },
// // ];

// // export default function QuickLearnIndex() {
// //   const [subject, setSubject] = useState("All");
// //   const navigate = useNavigate();

// //   const subjects = ["All", ...new Set(dummyCheats.map((c) => c.subject))];

// //   const filtered = subject === "All"
// //     ? dummyCheats
// //     : dummyCheats.filter((c) => c.subject === subject);

// //   return (
// //     <div className="p-6 space-y-6">
// //       <div className="flex gap-3 mb-4">
// //         {subjects.map((subj) => (
// //           <Button
// //             key={subj}
// //             variant={subject === subj ? "default" : "outline"}
// //             onClick={() => setSubject(subj)}
// //           >
// //             {subj}
// //           </Button>
// //         ))}
// //       </div>

// //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {filtered.map((item) => (
// //           <Card key={item.id} className="hover:shadow-lg transition">
// //             <CardHeader>
// //               <CardTitle>{item.chapter}</CardTitle>
// //               <p className="text-sm text-gray-500">Subject: {item.subject}</p>
// //             </CardHeader>
// //             <CardContent>
// //               <Button
// //                 className="w-full"
// //                 onClick={() => navigate(`/quicklearn/${item.id}`)}
// //                 disabled={item.isPaid}
// //               >
// //                 {item.isPaid ? "🔒 Premium" : "View Cheat Sheet"}
// //               </Button>
// //             </CardContent>
// //           </Card>
          
// //         ))}
// //       </div>
// //     </div>
    
// //   );
// // }

// // File: src/pages/quicklearn/Index.tsx

// import { useState } from "react";
// import SubjectSelector from "./SubjectSelector";
// import CheatsheetCard from "./CheatsheetCard";

// const dummyCheats = [
//   {
//     id: "1",
//     subject: "Mathematics",
//     chapter: "Trigonometry Formulas",
//     isPaid: false,
//   },
//   {
//     id: "2",
//     subject: "Mathematics",
//     chapter: "Probability Tricks",
//     isPaid: true,
//   },
//   {
//     id: "3",
//     subject: "History",
//     chapter: "World War II Timeline",
//     isPaid: false,
//   },
//   {
//     id: "4",
//     subject: "Political Science",
//     chapter: "Important Acts of India",
//     isPaid: true,
//   },
// ];

// export default function QuickLearnIndex() {
//   const [subject, setSubject] = useState("All");

//   const subjects = ["All", ...new Set(dummyCheats.map((c) => c.subject))];

//   const filtered = subject === "All"
//     ? dummyCheats
//     : dummyCheats.filter((c) => c.subject === subject);

//   return (
//     <div className="p-6 space-y-6">
//       {/* Subject filter */}
//       <SubjectSelector subjects={subjects} selected={subject} onChange={setSubject} />

//       {/* Cheatsheet cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filtered.map((item) => (
//           <CheatsheetCard key={item.id} {...item} />
          
//         ))}
//       </div>
//     </div>
//   );
// }

// File: src/pages/quicklearn/Index.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import SubjectSelector from "./SubjectSelector";
import CheatsheetCard from "./CheatsheetCard";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const dummyCheats = [
  {
    id: "1",
    subject: "Mathematics",
    chapter: "Trigonometry Formulas",
    isPaid: false,
  },
  {
    id: "2",
    subject: "Mathematics",
    chapter: "Probability Tricks",
    isPaid: true,
  },
  {
    id: "3",
    subject: "History",
    chapter: "World War II Timeline",
    isPaid: false,
  },
  {
    id: "4",
    subject: "Political Science",
    chapter: "Important Acts of India",
    isPaid: false,
  },
];

export default function QuickLearnIndex() {
  const [subject, setSubject] = useState("All");
  const subjects = ["All", ...new Set(dummyCheats.map((c) => c.subject))];
  const filtered = subject === "All" ? dummyCheats : dummyCheats.filter((c) => c.subject === subject);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    
    <motion.div 
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}

    >
         <Button
      onClick={() => window.location.href = "/student/dashboard"}
      variant="outline"
      className="mb-4"
    > 
      ← Back to Dashboard
    </Button>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SubjectSelector
          subjects={subjects}
          selected={subject}
          onChange={setSubject}
        />
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CheatsheetCard {...item} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="group fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/quicklearn/ai"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center"
        >
          <Sparkles className="w-6 h-6" />
        </Link>
        <motion.div 
          className="absolute bottom-14 right-1/2 translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          Generate Smart Sheet with Gemini
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

