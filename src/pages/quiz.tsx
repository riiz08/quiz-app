import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";
import { quizData } from "@/data/questions";
import { Button } from "@heroui/button";
import { Progress } from "@heroui/progress";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (step + 1 === quizData.length) {
      const counts: Record<string, number> = {};
      newAnswers.forEach((ans) => {
        counts[ans] = (counts[ans] || 0) + 1;
      });
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const result = sorted[0][0];
      navigate(`/result?type=${encodeURIComponent(result)}`);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg rounded-2xl shadow-xl p-6">
        <CardBody>
          {step < quizData.length && (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 text-xl font-semibold text-purple-700">
                Question {step + 1} of {quizData.length}
              </div>
              <div className="text-2xl font-bold mb-4 text-gray-800">
                {quizData[step].question}
              </div>
              <div className="grid gap-3">
                {quizData[step].options.map((opt) => (
                  <Button
                    key={opt}
                    className="w-full text-base py-6 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-pink-400 hover:to-red-400 text-white"
                    onPress={() => handleAnswer(opt)}
                  >
                    {opt}
                  </Button>
                ))}
              </div>
              <Progress
                value={((step + 1) / quizData.length) * 100}
                className="mt-6 h-2 bg-gray-200"
              />
            </motion.div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
