import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateCheatsheet } from "@/lib/gemini";
import { Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function GeminiPromptPage() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setResult("");
    try {
      const response = await generateCheatsheet(topic);
      setResult(response);
    } catch (err) {
      setError("Failed to generate cheat sheet. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">AI-Powered 10-Minute Sheet</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Enter a topic (e.g. Photosynthesis, WW2 Causes...)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Button onClick={handleGenerate} disabled={loading || !topic} className="w-full bg-blue-600 text-white">
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Generate Cheat Sheet"}
          </Button>
        </CardContent>
      </Card>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}

      {result && (
        <Card className="border border-blue-300 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl">Generated Sheet for: {topic}</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <ReactMarkdown>{result}</ReactMarkdown>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
