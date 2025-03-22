
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const performanceStats = {
  totalTests: 12,
  averageScore: 76,
  topSubject: "Mathematics",
  subjectScores: {
    Mathematics: 88,
    Science: 72,
    History: 65,
    English: 79,
  },
  monthlyScores: [
    { month: "Jan", score: 70 },
    { month: "Feb", score: 75 },
    { month: "Mar", score: 80 },
    { month: "Apr", score: 79 },
    { month: "May", score: 78 },
  ],
  testHistory: [
    { date: "2024-05-01", subject: "Mathematics", type: "MCQ", score: 85 },
    { date: "2024-05-10", subject: "Science", type: "Text-Based", score: 73 },
    { date: "2024-05-18", subject: "English", type: "MCQ", score: 80 },
    { date: "2024-06-01", subject: "History", type: "Text-Based", score: 66 },
  ]
};

const getWeakTopics = () => {
  const weak = Object.entries(performanceStats.subjectScores)
    .filter(([_, score]) => score < 75)
    .map(([subject]) => subject);

  return weak;
};

export default function StudentPerformance() {
  const subjectData = Object.entries(performanceStats.subjectScores).map(([subject, score]) => ({
    subject,
    score,
  }));

  const weakSubjects = getWeakTopics();

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">📊 Welcome back, Student!</h2>
      <p className="text-gray-600 mb-4">Here’s a snapshot of your academic progress so far. Keep it up! 🚀</p>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Total Tests</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">{performanceStats.totalTests}</CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle>Average Score</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-blue-600">{performanceStats.averageScore}%</CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle>Top Subject</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold text-green-600">{performanceStats.topSubject}</CardContent>
        </Card>
      </div>

      {/* Subject-wise Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>📘 Subject-wise Scores</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectData}>
              <XAxis dataKey="subject" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Progress Line Chart */}
      <Card>
        <CardHeader>
          <CardTitle>📈 Monthly Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceStats.monthlyScores}>
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Test History Table */}
      <Card>
        <CardHeader>
          <CardTitle>📜 Test History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border text-sm">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Score</th>
                </tr>
              </thead>
              <tbody>
                {performanceStats.testHistory.map((test, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{test.date}</td>
                    <td className="px-4 py-2">{test.subject}</td>
                    <td className="px-4 py-2">{test.type}</td>
                    <td className="px-4 py-2 font-semibold">{test.score}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Weak Subject Recommendations */}
      {weakSubjects.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>📚 Recommended Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {weakSubjects.map((subject, index) => (
                <li key={index}>
                  You should revisit <strong>{subject}</strong> to strengthen your concepts.
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* CTA */}
      <div className="text-center">
        <Button className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700">
          🧪 Take New Test
        </Button>
        <Button variant="outline" className="ml-4">
          📚 Review Weak Topics
        </Button>
      </div>
    </div>
  );
}
