import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import QuizPage from "./pages/quiz";
import ResultPage from "./pages/result";
import { useAdsterra } from "./hooks/useAdsterra";

function App() {
  useAdsterra();
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<QuizPage />} path="/quiz" />
      <Route element={<ResultPage />} path="/result" />
    </Routes>
  );
}

export default App;
