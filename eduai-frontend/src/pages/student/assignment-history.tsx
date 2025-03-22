// File: src/pages/student/assignment-history.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyAssignments = [
  {
    id: "A001",
    title: "Math Quiz 1",
    date: "2025-03-28",
    score: "8/10",
    feedback:
      "Great job! But revise probability concepts, especially conditional probability.",
  },
  {
    id: "A002",
    title: "History Chapter 2 Test",
    date: "2025-03-25",
    score: "6/10",
    feedback:
      "Good effort. Focus more on dates and treaty names. Try summarizing key events.",
  },
  {
    id: "A003",
    title: "English Essay - Environment",
    date: "2025-03-21",
    score: "9/10",
    feedback:
      "Excellent structure and grammar! Add more real-world examples.",
  },
];

export default function AssignmentHistory() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800">📚 Assignment Feedback History</h1>
        <Button variant="outline" onClick={() => navigate("/student/dashboard")}> <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyAssignments.map((assignment) => (
          <Card key={assignment.id} className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{assignment.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays className="w-4 h-4" />
                <span>{assignment.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Score:</span>
                <Badge variant="secondary" className="text-sm px-3 py-1">{assignment.score}</Badge>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>AI Feedback:</strong> {assignment.feedback}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
