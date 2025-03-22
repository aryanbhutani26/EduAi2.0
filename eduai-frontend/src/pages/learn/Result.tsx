
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const dummyResults = {
  "1": {
    correct: 2,
    incorrect: 0,
    feedback: ["Great job! Review quadratic equations for mastery."],
  },
  "3": {
    correct: 0,
    incorrect: 0,
    feedback: ["Try structuring your answer better.", "Add specific causes with years."],
  },
};

export default function TestResult() {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const result = dummyResults[chapterId as keyof typeof dummyResults] ?? { correct: 0, incorrect: 0, feedback: [] };
  const total = result.correct + result.incorrect;

  useEffect(() => {
    if (result.correct / (total || 1) >= 0.7) {
      console.log("✅ Chapter unlocked!");
      // Simulate unlock in real app
    }
  }, [result]);

  const chartData = [
    { name: "Correct", value: result.correct },
    { name: "Incorrect", value: result.incorrect },
  ];
  const COLORS = ["#4CAF50", "#F44336"];

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Your Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="text-center mt-6 space-y-2">
            <p className="text-lg font-semibold text-green-600">Correct: {result.correct}</p>
            <p className="text-lg font-semibold text-red-600">Incorrect: {result.incorrect}</p>

            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-1">Personalized Feedback:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {result.feedback.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <Button className="mt-6 bg-blue-600 text-white" onClick={() => navigate("/learn")}>Continue Learning</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
