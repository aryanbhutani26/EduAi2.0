// File: src/pages/student/GamificationDashboard.tsx

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Medal, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const dummyGamification = {
  xp: 1240,
  currentStreak: 5,
  totalTests: 12,
  highestScore: 98,
};

const badges = [
  { icon: <Medal className="text-yellow-500 w-6 h-6" />, title: "Streak Master", earned: dummyGamification.currentStreak >= 5 },
  { icon: <Trophy className="text-green-500 w-6 h-6" />, title: "Top Scorer", earned: dummyGamification.highestScore >= 95 },
  { icon: <Flame className="text-red-500 w-6 h-6" />, title: "Quiz Champion", earned: dummyGamification.totalTests >= 10 },
];

export default function GamificationDashboard() {
  return (
    <div className="p-6 space-y-6">
        <Button
      onClick={() => window.location.href = "/student/dashboard"}
      variant="outline"
      className="mb-4"
    > 
      ← Back to Dashboard
    </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>🔥 XP Points</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-600">{dummyGamification.xp}</p>
            <p className="text-sm text-gray-500">Keep learning to gain more!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🔥 Current Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-600">{dummyGamification.currentStreak} days</p>
            <p className="text-sm text-gray-500">Don't break the streak!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🏆 Top Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Best Score: {dummyGamification.highestScore}%</p>
            <p className="text-sm text-gray-500">Across {dummyGamification.totalTests} tests</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🏅 Your Badges</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((badge, index) => (
            <Card
              key={index}
              className={`p-4 text-center transition border-2 ${
                badge.earned ? "border-green-500" : "border-gray-200"
              }`}
            >
              <div className="mb-2 flex justify-center">{badge.icon}</div>
              <p className={`font-medium ${badge.earned ? "text-green-600" : "text-gray-400"}`}>
                {badge.title}
              </p>
              {!badge.earned && <p className="text-xs text-gray-400 mt-1">Not yet earned</p>}
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Link to="/student/assignments">
          <Button
          onClick={() => window.location.href = "/student/assignment-history"}
          className="bg-purple-600 text-white hover:bg-purple-700">📄 View Assignment History</Button>
        </Link>
      </div>
    </div>
  );
}
