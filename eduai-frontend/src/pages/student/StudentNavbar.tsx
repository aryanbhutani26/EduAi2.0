// File: src/components/navbars/StudentNavbar.tsx

import { useNavigate, useLocation } from "react-router-dom";
import { GraduationCap, Flame, BookOpen, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function StudentNavbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { label: "Dashboard", icon: <GraduationCap className="w-5 h-5" />, path: "/student/dashboard" },
    { label: "Gamify", icon: <Flame className="w-5 h-5" />, path: "/student/gamify" },
    { label: "Learn", icon: <BookOpen className="w-5 h-5" />, path: "/learn" },
    { label: "QuickLearn", icon: <Sparkles className="w-5 h-5" />, path: "/quicklearn" },
    // { label: "Profile", icon: <User className="w-5 h-5" />, path: "/student/profile" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-purple-600 flex items-center gap-2 cursor-pointer" onClick={() => navigate("/student/dashboard")}>
          <GraduationCap className="w-6 h-6" />
          EduAI Student
        </div>

        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={pathname === item.path ? "default" : "ghost"}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all",
                pathname === item.path ? "bg-purple-600 text-white hover:bg-purple-700" : "text-gray-700"
              )}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
