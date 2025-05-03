import React from "react";
import { Question } from "../data/questions";
import { Button } from "@heroui/button";

interface Props {
  question: Question;
  onAnswer: (score: number) => void;
  step: number;
  total: number;
}

export const QuestionStep: React.FC<Props> = ({
  question,
  onAnswer,
  step,
  total,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">{`Pertanyaan ${step + 1} dari ${total}`}</h2>
      <p className="text-lg">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <Button
            key={idx}
            variant="bordered"
            className="w-full"
            onPress={() => onAnswer(option.score)}
          >
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
};
