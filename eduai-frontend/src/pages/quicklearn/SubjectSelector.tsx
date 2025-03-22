// src/components/quicklearn/SubjectSelector.tsx

import { Button } from "@/components/ui/button";

interface SubjectSelectorProps {
  subjects: string[];
  selected: string;
  onChange: (subject: string) => void;
}

export default function SubjectSelector({ subjects, selected, onChange }: SubjectSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {subjects.map((subj) => (
        <Button
          key={subj}
          variant={selected === subj ? "default" : "outline"}
          onClick={() => onChange(subj)}
        >
          {subj}
        </Button>
      ))}
    </div>
  );
}
