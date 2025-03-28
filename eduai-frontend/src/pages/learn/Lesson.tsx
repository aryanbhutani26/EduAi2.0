
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const dummyChapters = [
  {
    id: "1",
    title: "Introduction to Algebra",
    subject: "Mathematics",
    video_url: "https://www.youtube.com/embed/HEfHFsfGXjs",
  },
  {
    id: "2",
    title: "Quadratic Equations",
    subject: "Mathematics",
    video_url: "https://www.youtube.com/embed/jZ3F3zU7vHc",
  },
  {
    id: "3",
    title: "World War II",
    subject: "History",
    video_url: "https://drive.google.com/file/d/1s2MSTGId5COzCe8AxxYjh8ABUlLhUdjB/preview?usp=sharing",
  },
  {
    id: "4",
    title: "Cold War Era",
    subject: "History",
    video_url: "https://www.youtube.com/embed/dMrjzV_tEKo",
  },
];

export default function LessonPage() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState<number>(Date.now());

  const chapter = dummyChapters.find((c) => c.id === chapterId);

  useEffect(() => {
    setStartTime(Date.now());
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      console.log(`Time spent on chapter ${chapterId}: ${timeSpent} seconds`);
      // You could send this to the backend in a real app
    };
  }, [chapterId]);

  if (!chapter) {
    return <div className="p-6">Chapter not found.</div>;
  }

  return (
    <motion.div 
      className="p-6"
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
            <CardTitle className="text-2xl font-bold">{chapter.title}</CardTitle>
            <p className="text-sm text-gray-500">Subject: {chapter.subject}</p>
          </CardHeader>
          <CardContent>
            <motion.div 
              className="aspect-video mb-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <iframe
                className="w-full h-full rounded"
                src={chapter.video_url}
                title="Lesson Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={() => navigate(`/test/${chapter.id}`)} 
                className="w-full bg-blue-600 text-white"
              >
                Start Chapter Test
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}