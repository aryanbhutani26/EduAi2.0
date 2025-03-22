// Login.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      const { data } = await supabase.auth.getUser();
      const role = data?.user?.user_metadata?.role;
      if (role === "student") navigate("/student/dashboard");
      else if (role === "parent") navigate("/parent/dashboard");
      else navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login to EduAI</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
          Login
        </Button>
        
        <div className="mt-4 text-center pt-2 border-t">
          <p className="text-gray-600 mb-2">New to Edu Ai?</p>
          <Link to="/signup">
            <Button variant="outline" className="w-full">
              Sign up Now
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

