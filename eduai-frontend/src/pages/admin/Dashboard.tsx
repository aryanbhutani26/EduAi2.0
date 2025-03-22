import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const adminStats = {
  totalUsers: 154,
  totalStudents: 112,
  totalParents: 42,
  assignmentsGraded: 428,
  dailyLogins: [
    { date: "May 1", count: 34 },
    { date: "May 2", count: 40 },
    { date: "May 3", count: 25 },
    { date: "May 4", count: 50 },
  ],
};

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">🛠 Admin Dashboard</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">{adminStats.totalUsers}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Students</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-blue-600">{adminStats.totalStudents}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Parents</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-green-600">{adminStats.totalParents}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assignments Graded</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-purple-600">{adminStats.assignmentsGraded}</CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <Card>
        <CardHeader>
          <CardTitle>📈 Daily Logins</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={adminStats.dailyLogins}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
