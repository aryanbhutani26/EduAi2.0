
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Chapter {
  id: string;
  title: string;
  subject: string;
  video_url: string;
  order: number;
  unlock_after: number;
  is_unlocked: boolean;
}

const dummyChapters: Chapter[] = [
  {
    id: "1",
    title: "Introduction to Algebra",
    subject: "Mathematics",
    video_url: "https://www.youtube.com/embed/dummy1",
    order: 1,
    unlock_after: 0,
    is_unlocked: true,
  },
  {
    id: "2",
    title: "Quadratic Equations",
    subject: "Mathematics",
    video_url: "https://www.youtube.com/embed/dummy2",
    order: 2,
    unlock_after: 70,
    is_unlocked: false,
  },
  {
    id: "3",
    title: "World War II",
    subject: "History",
    video_url: "https://www.youtube.com/embed/dummy3",
    order: 1,
    unlock_after: 0,
    is_unlocked: true,
  },
  {
    id: "4",
    title: "Cold War Era",
    subject: "History",
    video_url: "https://www.youtube.com/embed/dummy4",
    order: 2,
    unlock_after: 70,
    is_unlocked: false,
  }
];

export default function LearnIndex() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    setChapters(dummyChapters);
  }, []);

  const subjects = ["All", ...new Set(dummyChapters.map((c) => c.subject))];

  const filteredChapters = filter === "All"
    ? chapters
    : chapters.filter((c) => c.subject === filter);

  return (
    <div className="p-6 space-y-6">
      <div className="flex gap-3 mb-4">
        {subjects.map((subj) => (
          <Button
            key={subj}
            variant={filter === subj ? "default" : "outline"}
            onClick={() => setFilter(subj)}
          >
            {subj}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChapters.map((chapter) => (
          <Card
            key={chapter.id}
            className={`transition-transform hover:scale-105 ${!chapter.is_unlocked ? "opacity-50" : ""}`}
          >
            <CardHeader>
              <CardTitle>{chapter.title}</CardTitle>
              <p className="text-sm text-gray-500">Subject: {chapter.subject}</p>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => navigate(`/learn/${chapter.id}`)}
                disabled={!chapter.is_unlocked}
                className="w-full"
              >
                {chapter.is_unlocked ? "Start Lesson" : "Locked 🔒"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
