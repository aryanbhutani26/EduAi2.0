// src/components/quicklearn/CheatsheetCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface CheatsheetCardProps {
  id: string;
  subject: string;
  chapter: string;
  isPaid: boolean;
}

export default function CheatsheetCard({ id, subject, chapter, isPaid }: CheatsheetCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{chapter}</CardTitle>
          <p className="text-sm text-gray-500">Subject: {subject}</p>
        </CardHeader>
        <CardContent>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Button
              className="w-full"
              onClick={() => navigate(`/quicklearn/${id}`)}
              disabled={isPaid}
            >
              {isPaid ? "🔒 Premium" : "View Cheat Sheet"}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
