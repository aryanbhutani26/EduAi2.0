// File: src/pages/parent/Performance.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";

const performanceData = [
  { month: "Jan", score: 72 },
  { month: "Feb", score: 78 },
  { month: "Mar", score: 65 },
  { month: "Apr", score: 82 },
  { month: "May", score: 74 },
  { month: "Jun", score: 89 },
];

const strengths = ["Algebra", "Probability", "World History"];
const weaknesses = ["Geometry", "Trigonometry", "Polity"];

const suggestion = "Encourage your child to revise Trigonometry basics and practice more on Polity current affairs. Consistent revision and short daily quizzes can help boost their confidence.";

export default function ParentPerformancePage() {
  return (
    <div className="p-6 space-y-8">
        <Button
      onClick={() => window.location.href = "/parent/dashboard"}
      variant="outline"
      className="mb-4"
    > 
      ← Back to Dashboard
    </Button>
      <h1 className="text-3xl font-bold mb-6">Student Performance Overview</h1>

      {/* Performance Line Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[50, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Strengths and Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle2 className="w-5 h-5" /> Strong Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {strengths.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-500">
              <XCircle className="w-5 h-5" /> Weak Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {weaknesses.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Suggestion Box */}
      <Card className="border-l-4 border-yellow-400 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-700">
            <Lightbulb className="w-5 h-5" /> Suggestions from AI Tutor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-800 leading-relaxed">{suggestion}</p>
        </CardContent>
      </Card>

      {/* Action Button */}
      <div className="flex justify-end">
        <Button
        onClick={() => window.location.href = "/parent/test-history"}
        className="bg-purple-600 hover:bg-purple-700 text-white">
          View Detailed Test History
        </Button>
      </div>
    </div>
  );
}
