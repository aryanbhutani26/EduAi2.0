// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Login from "@/pages/auth/Login";

// import Signup from "./pages/auth/signup";
// import StudentDashboard from "./pages/student/Dashboard";
// import ParentDashboard from "./pages/parent/Dashboard";
// import Login from "./pages/auth/login";
// import ProtectedRoute from "./components/ProtectedRoute";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/student/dashboard" element={<StudentDashboard />} />
//         <Route path="/parent/dashboard" element={<ParentDashboard />} />
//         <Route
//           path="/student/dashboard"
//           element={
//             <ProtectedRoute allowedRoles={["student"]}>
//               <StudentDashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/parent/dashboard"
//           element={
//             <ProtectedRoute allowedRoles={["parent", "teacher"]}>
//               <ParentDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/student/Dashboard";
import ParentDashboard from "./pages/parent/Dashboard";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <Layout>
                <StudentDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/parent/dashboard"
          element={
            <ProtectedRoute allowedRoles={["parent", "teacher"]}>
              <Layout>
                <ParentDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

