
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

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
        className="flex gap-3 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subjects.map((subj, index) => (
          <motion.div
            key={subj}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant={filter === subj ? "default" : "outline"}
              onClick={() => setFilter(subj)}
            >
              {subj}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredChapters.map((chapter) => (
          <motion.div
            key={chapter.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            layout
          >
            <Card
              className={`${!chapter.is_unlocked ? "opacity-50" : ""}`}
            >
              <CardHeader>
                <CardTitle>{chapter.title}</CardTitle>
                <p className="text-sm text-gray-500">Subject: {chapter.subject}</p>
              </CardHeader>
              <CardContent>
                <motion.div
                  whileHover={chapter.is_unlocked ? { scale: 1.02 } : {}}
                  whileTap={chapter.is_unlocked ? { scale: 0.98 } : {}}
                >
                  <Button
                    onClick={() => navigate(`/learn/${chapter.id}`)}
                    disabled={!chapter.is_unlocked}
                    className="w-full"
                  >
                    {chapter.is_unlocked ? "Start Lesson" : "Locked 🔒"}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
