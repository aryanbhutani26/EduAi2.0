
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

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
    <motion.div 
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={() => navigate("/student/dashboard")}
          variant="outline"
          className="mb-4"
        >
          ← Back to Dashboard
        </Button>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Your Results</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div 
              className="flex justify-center h-64"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
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
            </motion.div>

            <motion.div 
              className="text-center mt-6 space-y-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.p 
                className="text-lg font-semibold text-green-600"
                whileHover={{ scale: 1.05 }}
              >
                Correct: {result.correct}
              </motion.p>
              <motion.p 
                className="text-lg font-semibold text-red-600"
                whileHover={{ scale: 1.05 }}
              >
                Incorrect: {result.incorrect}
              </motion.p>

              <motion.div 
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="font-semibold text-lg mb-1">Personalized Feedback:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {result.feedback.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + (idx * 0.1) }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="mt-6 bg-blue-600 text-white" 
                  onClick={() => navigate("/learn")}
                >
                  Continue Learning
                </Button>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
