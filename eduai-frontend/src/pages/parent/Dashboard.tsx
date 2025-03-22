import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ParentDashboard() {
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
          <CardTitle>Welcome, {fullName || "Parent"} 📊</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Monitor your student's performance and assign custom AI-powered tests.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Tools</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc pl-6">
            <li>📥 Upload and Grade Assignments with AI</li>
            <li>📊 View Student Analytics</li>
            <li>📝 Access Custom Test Generator</li>
            <li>🧾 Download Detailed Reports</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
