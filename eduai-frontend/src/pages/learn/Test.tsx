
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const dummyTests = {
  "1": {
    type: "MCQ",
    questions: [
      {
        question: "What is the value of x in the equation 2x + 3 = 7?",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        question: "Which of the following is a prime number?",
        options: ["4", "6", "9", "11"],
        answer: "11",
      },
    ],
  },
  "3": {
    type: "Text",
    questions: [
      {
        question: "Explain the causes of World War II in 3 points.",
      },
    ],
  },
};

export default function TestPage() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const test = dummyTests[chapterId as keyof typeof dummyTests];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleMCQChange = (qIndex: number, value: string) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleTextChange = (qIndex: number, value: string) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      navigate(`/test-result/${chapterId}`);
    }, 1000);
  };

  if (!test) return <div className="p-6">No test available for this chapter.</div>;

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Chapter Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {test.type === "MCQ" &&
            test.questions.map((q, i) => (
              <div key={i} className="space-y-2">
                <p className="font-medium">{q.question}</p>
                <RadioGroup onValueChange={(val) => handleMCQChange(i, val)}>
                  {('options' in q) && q.options.map((opt) => (
                    <div key={opt} className="flex items-center space-x-2">
                      <RadioGroupItem value={opt} id={`q-${i}-${opt}`} />
                      <Label htmlFor={`q-${i}-${opt}`}>{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}

          {test.type === "Text" &&
            test.questions.map((q, i) => (
              <div key={i} className="space-y-2">
                <p className="font-medium">{q.question}</p>
                <Textarea
                  rows={4}
                  placeholder="Your answer..."
                  onChange={(e) => handleTextChange(i, e.target.value)}
                />
              </div>
            ))}

          <Button className="w-full bg-blue-600 text-white" onClick={handleSubmit} disabled={submitted}>
            Submit Test
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
