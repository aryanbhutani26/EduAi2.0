
// Signup.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Signup() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    institution: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // First sign up the user
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.full_name,
            institution: formData.institution,
            role: formData.role,
          },
        },
      });

      if (error) {
        alert(error.message);
        return;
      }

      // Then sign in the user immediately
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (signInError) {
        alert(signInError.message);
        return;
      }

      // Redirect based on selected role
      if (formData.role === "student") {
        navigate("/student/dashboard");
      } else if (formData.role === "parent") {
        navigate("/parent/dashboard");
      } else if (formData.role === "teacher") {
        navigate("/teacher/dashboard");
      } else {
        alert("Signup successful. Please verify your email.");
        navigate("/");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Create Your EduAI Account</h2>
        <Input
          type="text"
          placeholder="Full Name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          placeholder="Institution"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          required
        />

        <Select onValueChange={(value) => setFormData({ ...formData, role: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="parent">Parent</SelectItem>
            <SelectItem value="teacher">Teacher</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
