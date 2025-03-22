import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster, toast } from "sonner";

export default function Settings() {
  const [form, setForm] = useState({
    fullName: "",
    institution: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { fullName, institution, role } = user.user_metadata || {};
        setForm({ fullName: fullName || "", institution: institution || "", role: role || "" });
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      data: {
        fullName: form.fullName,
        institution: form.institution,
        role: form.role,
      },
    });

    if (error) {
      toast.error("Update failed: " + error.message);
    } else {
      toast.success("Profile updated successfully!");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>👤 Profile Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <Input
            name="institution"
            value={form.institution}
            onChange={handleChange}
            placeholder="Institution"
          />
          <Input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role (e.g., student, parent)"
          />
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleUpdate} disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </CardContent>
      </Card>
      <Toaster position="top-right" richColors />
    </div>
  );
}
