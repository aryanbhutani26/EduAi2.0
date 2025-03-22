// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setRole(data.user.user_metadata?.role || null);
      }
    };
    fetchUser();
  }, []);

  return (
    <nav className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">EduAI</h1>
      <div className="flex items-center space-x-4">
        {role === "student" && <Link to="/student/dashboard">My Dashboard</Link>}
        {role === "parent" && <Link to="/parent/dashboard">Parent Panel</Link>}
        <button
          onClick={() => supabase.auth.signOut()}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
