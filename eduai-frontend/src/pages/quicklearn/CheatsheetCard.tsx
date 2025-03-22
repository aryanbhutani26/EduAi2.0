// src/components/quicklearn/CheatsheetCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CheatsheetCardProps {
  id: string;
  subject: string;
  chapter: string;
  isPaid: boolean;
}

export default function CheatsheetCard({ id, subject, chapter, isPaid }: CheatsheetCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle>{chapter}</CardTitle>
        <p className="text-sm text-gray-500">Subject: {subject}</p>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full"
          onClick={() => navigate(`/quicklearn/${id}`)}
          disabled={isPaid}
        >
          {isPaid ? "🔒 Premium" : "View Cheat Sheet"}
        </Button>
      </CardContent>
    </Card>
  );
}
