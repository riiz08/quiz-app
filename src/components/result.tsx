// src/components/Result.tsx
import React from "react";
import ResultAdTrigger from "./result-ad-trigger";

interface Props {
  score: number;
  total: number;
}

export const Result: React.FC<Props> = ({ score }) => {
  let result = "";
  if (score <= 2) result = "💃 The Free Spirit";
  else if (score <= 4) result = "🎯 The Balanced One";
  else result = "💞 The Ideal Partner";

  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold">Hasil Kuis Kamu</h2>
      <p className="text-xl">{result}</p>
      <p className="text-gray-600">Total Skor: {score}</p>

      {/* Link CTA untuk mencoba lagi */}
      <div className="pt-4">
        <a href="/" className="text-blue-500 underline">
          Coba Lagi
        </a>
      </div>

      {/* Inject Iklan setelah hasil kuis */}
      <ResultAdTrigger />
    </div>
  );
};
