
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
const testHistory = [
  {
    date: "2024-03-01",
    subject: "Mathematics",
    score: 92,
    total: 100,
    remarks: "Excellent grasp of concepts"
  },
  {
    date: "2024-02-20",
    subject: "Science",
    score: 78,
    total: 100,
    remarks: "Good but needs improvement in diagrams"
  },
  {
    date: "2024-02-05",
    subject: "History",
    score: 63,
    total: 100,
    remarks: "Revise WWII timeline and Cold War topics"
  },
  {
    date: "2024-01-28",
    subject: "English",
    score: 87,
    total: 100,
    remarks: "Strong vocabulary and grammar"
  }
];

export default function StudentTestHistory() {
  return (
    <div className="p-6 space-y-6">
          <Button
      onClick={() => window.location.href = "/student/dashboard"}
      variant="outline"
      className="mb-4"
    > 
      ← Back to Dashboard
    </Button>
      <Card>
        <CardHeader className="flex items-center gap-2">
          <CalendarDays className="w-6 h-6 text-purple-600" />
          <CardTitle>Student Test History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testHistory.map((test, index) => (
                <TableRow key={index}>
                  <TableCell>{new Date(test.date).toLocaleDateString()}</TableCell>
                  <TableCell>{test.subject}</TableCell>
                  <TableCell>{test.score} / {test.total}</TableCell>
                  <TableCell className="text-gray-600 text-sm">{test.remarks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
