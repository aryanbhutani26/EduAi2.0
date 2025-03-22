// src/components/ProtectedRoute.tsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

type Props = {
  children: React.ReactNode;
  allowedRoles?: string[]; // e.g., ['student']
};

const ProtectedRoute: React.FC<Props> = ({ children, allowedRoles }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        setIsLoading(false);
        return;
      }

      const role = data.user.user_metadata.role;

      setUserRole(role);
      setIsAuthorized(allowedRoles ? allowedRoles.includes(role) : true);
      setIsLoading(false);
    };

    getUser();
  }, [allowedRoles]);

  if (isLoading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (!isAuthorized) {
    return <Navigate to="/" replace />; // Redirect to login/home
  }

  return <>{children}</>;
};

export default ProtectedRoute;
