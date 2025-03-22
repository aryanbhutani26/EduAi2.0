// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import StudentDashboard from "./pages/student/Dashboard";
// import ParentDashboard from "./pages/parent/Dashboard";
// import Signup from "./pages/auth/Signup";
// import Login from "./pages/auth/Login";
// import Layout from "./components/Layout";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" element={<Login />} />

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
//       </Routes>
//     </Router>
//   );
// }
// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/student/Dashboard";
import ParentDashboard from "./pages/parent/Dashboard";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Learn Pages
import LearnIndex from "./pages/learn/Index";
import LessonPage from "./pages/learn/Lesson";
import TestPage from "./pages/learn/Test";
import TestResult from "./pages/learn/Result";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />

        {/* Dashboards */}
        <Route
          path="/student/dashboard"
          element={
            <Layout>
              <StudentDashboard />
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
              <TestPage />
            </Layout>
          }
        />
        <Route
          path="/test-result/:chapterId"
          element={
            <Layout>
              <TestResult />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
