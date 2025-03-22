// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { useEffect, useState } from "react";
// // import { supabase } from "@/lib/supabaseClient";

// // export default function ParentDashboard() {
// //   const [fullName, setFullName] = useState("");

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       const { data } = await supabase.auth.getUser();
// //       const name = data?.user?.user_metadata?.full_name;
// //       if (name) setFullName(name);
// //     };
// //     fetchUser();
// //   }, []);

// //   return (
// //     <div className="space-y-6">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Welcome, {fullName || "Parent"} 📊</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <p>Monitor your student's performance and assign custom AI-powered tests.</p>
// //         </CardContent>
// //       </Card>

// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Available Tools</CardTitle>
// //         </CardHeader>
// //         <CardContent className="space-y-2">
// //           <ul className="list-disc pl-6">
// //             <li>📥 Upload and Grade Assignments with AI</li>
// //             <li>📊 View Student Analytics</li>
// //             <li>📝 Access Custom Test Generator</li>
// //             <li>🧾 Download Detailed Reports</li>
// //           </ul>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }


// import { useNavigate } from "react-router-dom";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { BarChart3, CheckCircle, UserRound, NotebookPen, Gauge } from "lucide-react";

// const mockPerformanceData = [
//   { month: "Jan", score: 75 },
//   { month: "Feb", score: 82 },
//   { month: "Mar", score: 90 },
//   { month: "Apr", score: 85 },
//   { month: "May", score: 95 },
// ];

// export default function ParentDashboard() {
//   const navigate = useNavigate();

//   return (
//     <div className="p-6 space-y-8">
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold">👨‍👩‍👧 Parent Dashboard</h1>
//           <p className="text-gray-500 mt-1">Welcome! Here's how your child is doing.</p>
//         </div>
//         <Button onClick={() => navigate("/learn")} className="bg-purple-600 text-white">Explore Learning</Button>
//       </div>

//       {/* Info Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader className="flex items-center gap-2">
//             <UserRound className="text-purple-600" />
//             <CardTitle className="text-sm">Student</CardTitle>
//           </CardHeader>
//           <CardContent className="text-xl font-semibold">Aryan</CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex items-center gap-2">
//             <NotebookPen className="text-purple-600" />
//             <CardTitle className="text-sm">Chapters Completed</CardTitle>
//           </CardHeader>
//           <CardContent className="text-xl font-semibold">18</CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex items-center gap-2">
//             <Gauge className="text-purple-600" />
//             <CardTitle className="text-sm">Average Score</CardTitle>
//           </CardHeader>
//           <CardContent className="text-xl font-semibold">88%</CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex items-center gap-2">
//             <CheckCircle className="text-purple-600" />
//             <CardTitle className="text-sm">Last Test</CardTitle>
//           </CardHeader>
//           <CardContent className="text-xl font-semibold">92%</CardContent>
//         </Card>
//       </div>

//       {/* Chart Section */}
//       <Card className="shadow-md">
//         <CardHeader className="flex items-center gap-2">
//           <BarChart3 className="text-purple-600" />
//           <CardTitle className="text-lg">Performance Over Time</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={mockPerformanceData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis domain={[0, 100]} />
//               <Tooltip />
//               <Line type="monotone" dataKey="score" stroke="#7e22ce" strokeWidth={3} activeDot={{ r: 6 }} />
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>

//       {/* Actions */}
//       <div className="text-center">
//         <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full" onClick={() => navigate("/parent/performance")}>📊 View Detailed Reports</Button>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, FileText } from "lucide-react";
import ParentNavbar from "./ParentNavbar";

export default function ParentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <ParentNavbar/>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="w-5 h-5 text-purple-600" />
              Student Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              View detailed insights on student grades, weak areas, and improvement suggestions.
            </p>
            <Button
              onClick={() => navigate("/parent/performance")}
              className="mt-4 w-full bg-purple-600 text-white"
            >
              View Performance
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Test History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Check previous test scores and AI feedback for each subject.
            </p>
            <Button
              onClick={() => navigate("/parent/test-history")}
              className="mt-4 w-full bg-blue-600 text-white"
            >
              View Test History
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="w-5 h-5 text-green-600" />
              Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Track learning time, engagement, and lesson completion.</p>
            <Button
              onClick={() => navigate("/parent/insights")}
              className="mt-4 w-full bg-green-600 text-white"
            >
              View Insights
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

