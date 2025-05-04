import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import QuizPage from "./pages/quiz";
import ResultPage from "./pages/result";
import { useAdsterra } from "./hooks/useAdsterra";
import TheBeekeeper2 from "./pages/the-beekeeper-2";

function App() {
  useAdsterra();
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<QuizPage />} path="/quiz" />
      <Route element={<ResultPage />} path="/result" />
      <Route element={<TheBeekeeper2 />} path="/watch/the-beekeeper-2" />
    </Routes>
  );
}

export default App;
