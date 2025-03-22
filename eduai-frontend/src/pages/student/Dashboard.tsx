import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function StudentDashboard() {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      const name = data?.user?.user_metadata?.full_name;
      if (name) setFullName(name);
    };
    fetchUser();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {fullName || "Student"} 👋</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Track your learning progress, take tests, and access personalized feedback.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Learning Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc pl-6">
            <li>📚 Start Video Lessons</li>
            <li>🧠 Take Chapter-Based Tests</li>
            <li>⚡ Access 10-Minute Quick Learning Cheatsheets</li>
            <li>📈 View your Performance Insights</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
