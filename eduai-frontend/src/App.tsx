// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import StudentDashboard from "./pages/student/Dashboard";
// // import ParentDashboard from "./pages/parent/Dashboard";
// // import Signup from "./pages/auth/Signup";
// // import Login from "./pages/auth/Login";
// // import Layout from "./components/Layout";
// // import ProtectedRoute from "./components/ProtectedRoute";

// // // Learn Pages
// // import LearnIndex from "./pages/learn/Index";
// // import LessonPage from "./pages/learn/Lesson";
// // import TestPage from "./pages/learn/Test";
// // import TestResult from "./pages/learn/Result";

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Auth */}
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/" element={<Login />} />

// //         {/* Dashboards */}
// //         <Route
// //           path="/student/dashboard"
// //           element={
// //             <Layout>
// //               <StudentDashboard />
// //             </Layout>
// //           }
// //         />
// //         <Route
// //           path="/parent/dashboard"
// //           element={
// //             <Layout>
// //               <ParentDashboard />
// //             </Layout>
// //           }
// //         />

// //         {/* Learn Routes */}
// //         <Route
// //           path="/learn"
// //           element={
// //             <Layout>
// //               <LearnIndex />
// //             </Layout>
// //           }
// //         />
// //         <Route
// //           path="/learn/:chapterId"
// //           element={
// //             <Layout>
// //               <LessonPage />
// //             </Layout>
// //           }
// //         />
// //         <Route
// //           path="/test/:chapterId"
// //           element={
// //             <Layout>
// //               <TestPage />
// //             </Layout>
// //           }
// //         />
// //         <Route
// //           path="/test-result/:chapterId"
// //           element={
// //             <Layout>
// //               <TestResult />
// //             </Layout>
// //           }
// //         />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import StudentDashboard from "./pages/student/Dashboard";
// import ParentDashboard from "./pages/parent/Dashboard";
// import Signup from "./pages/auth/Signup";
// import Login from "./pages/auth/Login";
// import Layout from "./components/Layout";
// import ProtectedRoute from "./components/ProtectedRoute";
// import AdminDashboard from "./pages/admin/Dashboard";
// import GeminiPromptPage from "./pages/quicklearn/GeminiPrompt";
// import Settings from "./pages/profile/Settings";

// // Learn Module
// import LearnIndex from "./pages/learn/Index";
// import LessonPage from "./pages/learn/Lesson";
// import TestPage from "./pages/learn/Test";
// import TestResult from "./pages/learn/Result";

// // Quick Learn Module
// import QuickLearnIndex from "./pages/quicklearn/Index";
// import CheatsheetPage from "./pages/quicklearn/Cheatsheet";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Auth */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" element={<Login />} />

//         {/* Dashboards */}
//         <Route
//           path="/student/dashboard"
//           element={
//             <Layout>
//               <StudentDashboard />
//             </Layout>
//           }
//         />
//         <Route
//           path="/parent/dashboard"
//           element={
//             <Layout>
//               <ParentDashboard />
//             </Layout>
//           }
//         />
//         {/* Gemini Integration  */}
//         <Route
//           path="/quicklearn/ai"
//           element={
//             <Layout>
//               <GeminiPromptPage />
//             </Layout>
//           }
//         />

//         {/* Learn Module */}
//         <Route
//           path="/learn"
//           element={
//             <Layout>
//               <LearnIndex />
//             </Layout>
//           }
//         />

//         {/* Settings */}
//         <Route
//           path="/settings"
//           element={
//             <Layout>
//               <Settings />
//             </Layout>
//           }
//         />

//         <Route
//           path="/admin/dashboard"
//           element={
//             <Layout>
//               <AdminDashboard />
//             </Layout>
//           }
//         />

//         {/* Learn Routes */}
//         <Route
//           path="/learn/:chapterId"  // Changed from "/learn/:chapterId/lessons"
//           element={
//             <Layout>
//               <LessonPage />
//             </Layout>
//           }
//         />
//         <Route
//           path="/test/:chapterId"   // Changed from "/learn/:chapterId/test"
//           element={
//             <Layout>
//               <ChapterTest />
//             </Layout>
//           }
//         />
//         <Route
//           path="/test-result/:chapterId"
//           element={
//             <Layout>
//               <TestResult />
//             </Layout>
//           }
//         />

//         {/* Quick Learn Module */}
//         <Route
//           path="/quicklearn"
//           element={
//             <Layout>
//               <QuickLearnIndex />
//             </Layout>
//           }
//         />
//         <Route
//           path="/quicklearn/:chapterId"
//           element={
//             <Layout>
//               <CheatsheetPage />
//             </Layout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// File: src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/page";
import StudentDashboard from "./pages/student/Dashboard";
import ParentDashboard from "./pages/parent/Dashboard";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import LearnIndex from "./pages/learn/Index"; // assuming this exists
import LessonPage from "./pages/learn/Lesson";
import ChapterTest from "./pages/learn/Test";
import QuickLearnIndex from "./pages/quicklearn/Index";
import CheatsheetPage from "./pages/quicklearn/Cheatsheet";
// import CheatSheet from "./pages/quicklearn/Cheatsheet";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import GeminiPromptPage from "./pages/quicklearn/GeminiPrompt";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboards */}
        <Route
          path="/student/dashboard"
          element={
            <Layout>
              <StudentDashboard />
            </Layout>
          }
        />
      {/* Gemini Ai  */}
        <Route
          path="/quicklearn/ai"
          element={
            <Layout>
              <GeminiPromptPage />
            </Layout>
          }
        />
        <Route
          path="/parent/dashboard"
          element={
            <Layout>
              <ParentDashboard />
            </Layout>
          }
        />

        {/* Learn Routes */}
        <Route
          path="/learn"
          element={
            <Layout>
              <LearnIndex />
            </Layout>
          }
        />
        <Route
          path="/learn/:chapterId"
          element={
            <Layout>
              <LessonPage />
            </Layout>
          }
        />
        <Route
          path="/test/:chapterId"
          element={
            <Layout>
              <ChapterTest />
            </Layout>
          }
        />

        {/* QuickLearn Routes */}
        <Route
          path="/quicklearn"
          element={
            <Layout>
              <QuickLearnIndex />
            </Layout>
          }
        />

        <Route path="/quicklearn/:chapterId" element={<CheatsheetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
