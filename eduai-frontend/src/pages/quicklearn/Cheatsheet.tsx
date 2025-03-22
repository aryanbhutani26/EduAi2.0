
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const dummySheets = {
  "1": {
    title: "Trigonometry Formulas",
    subject: "Mathematics",
    bullets: [
      "sin²θ + cos²θ = 1",
      "1 + tan²θ = sec²θ",
      "1 + cot²θ = cosec²θ",
      "sin A / cos A = tan A",
    ],
  },
  "2": {
    title: "Probability Tricks",
    subject: "Mathematics",
    bullets: [
      "Probability = Favourable / Total outcomes",
      "Complement rule: P(A') = 1 - P(A)",
      "If events are independent: P(A and B) = P(A) × P(B)",
    ],
  },
  "3": {
    title: "World War II Timeline",
    subject: "History",
    bullets: [
      "1939: Germany invades Poland",
      "1941: Attack on Pearl Harbor",
      "1945: Germany surrenders",
      "1945: Atomic bomb dropped on Hiroshima/Nagasaki",
    ],
  },
  "4": {
    title: "Important Acts of India",
    subject: "Political Science",
    bullets: [
      "Right to Education Act - 2009",
      "RTI Act - 2005",
      "Consumer Protection Act - 2019",
    ],
  },
};

export default function CheatsheetPage() {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const sheet = dummySheets[chapterId as keyof typeof dummySheets];

  if (!sheet) return <div className="p-6">Cheat sheet not found.</div>;

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{sheet.title}</CardTitle>
          <p className="text-sm text-gray-500">Subject: {sheet.subject}</p>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            {sheet.bullets.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="mt-6 flex justify-end">
            <Button onClick={() => navigate("/quicklearn")} className="bg-blue-600 text-white">
              Back to Quick Learn
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
