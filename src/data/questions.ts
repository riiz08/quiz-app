export interface Question {
  question: string;
  options: { text: string; score: number }[];
}

export const questions: Question[] = [
  {
    question: "Saat pasanganmu sedang marah, kamu biasanya…",
    options: [
      { text: "Menenangkannya dulu", score: 2 },
      { text: "Menjauh agar dia tenang", score: 1 },
      { text: "Marah balik", score: 0 },
    ],
  },
  {
    question: "Kamu lebih suka hubungan yang…",
    options: [
      { text: "Serius dan stabil", score: 2 },
      { text: "Santai dan fleksibel", score: 1 },
      { text: "Bebas tanpa komitmen", score: 0 },
    ],
  },
  {
    question: "Ketika ada masalah, kamu lebih suka…",
    options: [
      { text: "Bicara terbuka", score: 2 },
      { text: "Tunda dulu", score: 1 },
      { text: "Pura-pura gak terjadi apa-apa", score: 0 },
    ],
  },
];

export const quizData = [
  {
    question: "How do you express love in a relationship?",
    options: [
      "Words of affirmation",
      "Acts of service",
      "Physical touch",
      "Gifts",
    ],
  },
  {
    question: "What’s your ideal first date?",
    options: [
      "Dinner & deep conversation",
      "Adventure outing",
      "Netflix & chill",
      "Museum or art walk",
    ],
  },
  {
    question: "How do you handle conflict?",
    options: [
      "Talk it out immediately",
      "Need some space first",
      "Avoid confrontation",
      "Use humor to ease tension",
    ],
  },
  {
    question: "What kind of partner are you?",
    options: [
      "Loyal & calm",
      "Passionate & intense",
      "Playful & light-hearted",
      "Protective & practical",
    ],
  },
];
